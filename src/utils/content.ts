/** Strip WordPress block comments and shortcodes from HTML */
export function cleanWpContent(html: string): string {
  return html
    // Fix double-escaped quotes in HTML attributes (e.g. src=\"...\" → src="...")
    .replace(/\\"/g, '"')
    // Remove WP block comments
    .replace(/<!--\s*\/?wp:[^>]*-->/g, '')
    // Remove shortcodes like [su_button ...] ... [/su_button]
    .replace(/\[su_[^\]]*\][^[]*\[\/su_[^\]]*\]/g, '')
    .replace(/\[su_[^\]]*\/?\]/g, '')
    // Fix internal links to new structure
    .replace(/https?:\/\/cambiandopilas\.com\//g, '/')
    .replace(/https?:\/\/ctarut\.com\//g, '/')
    // Remove MS Word classes
    .replace(/\s*class="Mso[^"]*"/g, '')
    // Remove empty paragraphs
    .replace(/<p>\s*<\/p>/g, '')
    .replace(/<p>\s*&nbsp;\s*<\/p>/g, '')
    // Remove inline styles from pasted content
    .replace(/\s*style="[^"]*mso-[^"]*"/g, '')
    // Remove empty spans
    .replace(/<span>\s*<\/span>/g, '')
    // Remove migration artifacts (tixagb_XX codes from WP export)
    .replace(/\(tixagb_\d+[_\d]*\)/g, '')
    .replace(/tixagb_\d+[_\d]*/g, '')
    // Unwrap <p> inside <li> (keep text, remove the extra p tags)
    .replace(/<li([^>]*)>\s*<p[^>]*>([\s\S]*?)<\/p>\s*<\/li>/gi, '<li$1>$2</li>')
    // Remove empty <li> items (with only whitespace or &nbsp;)
    .replace(/<li[^>]*>\s*(&nbsp;)?\s*<\/li>/gi, '')
    // Fix non-secure image URLs
    .replace(/src="http:\/\//g, 'src="https://')
    // Add lazy loading to YouTube iframes
    .replace(/<iframe([^>]*)(src="https:\/\/www\.youtube\.com\/embed\/[^"]*")([^>]*)>/g,
      (match, before, src, after) => {
        if (match.includes('loading=')) return match;
        return `<iframe${before}${src}${after} loading="lazy">`;
      })
    // Clean up excess whitespace
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** Extract headings from HTML for TOC */
export function extractHeadings(html: string): { id: string; text: string; level: number }[] {
  const regex = /<h([23])[^>]*>(?:<strong>)?(.*?)(?:<\/strong>)?<\/h[23]>/gi;
  const headings: { id: string; text: string; level: number }[] = [];
  let match;

  while ((match = regex.exec(html)) !== null) {
    const text = match[2].replace(/<[^>]+>/g, '').trim();
    const id = text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    headings.push({ id, text, level: parseInt(match[1]) });
  }

  return headings;
}

/** Add IDs to headings in HTML */
export function addHeadingIds(html: string): string {
  return html.replace(/<h([23])([^>]*)>((?:<strong>)?)(.*?)((?:<\/strong>)?)<\/h[23]>/gi, (_, level, attrs, openTag, text, closeTag) => {
    const plainText = text.replace(/<[^>]+>/g, '').trim();
    const id = plainText
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    return `<h${level} id="${id}"${attrs}>${openTag}${text}${closeTag}</h${level}>`;
  });
}

/** Strip HTML tags and return plain text */
function toPlainText(html: string): string {
  return html.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}

/**
 * Extract HowTo steps from the first ordered list (<ol>) in HTML.
 * Returns array of step text strings, or empty array if no OL found.
 */
export function extractHowToSteps(html: string): string[] {
  const olMatch = html.match(/<ol[^>]*>([\s\S]*?)<\/ol>/i);
  if (!olMatch) return [];

  const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
  const steps: string[] = [];
  let m;
  while ((m = liRegex.exec(olMatch[1])) !== null) {
    const text = toPlainText(m[1]);
    if (text.length > 10) steps.push(text);
  }
  return steps;
}

/**
 * Extract FAQ pairs from H2/H3 headings that are questions (start with ¿ or end with ?)
 * followed by a paragraph as the answer.
 */
export function extractFAQs(html: string): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [];

  // Match h2/h3 questions followed by content until next heading
  const sectionRegex = /<h[23][^>]*>([\s\S]*?)<\/h[23]>([\s\S]*?)(?=<h[23]|$)/gi;
  let m;
  while ((m = sectionRegex.exec(html)) !== null) {
    const headingText = toPlainText(m[1]).trim();
    // Only pick headings that are questions
    if (!headingText.startsWith('¿') && !headingText.endsWith('?')) continue;

    // Extract the first paragraph after the heading as the answer
    const contentBlock = m[2];
    const pMatch = contentBlock.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
    if (!pMatch) continue;
    const answerText = toPlainText(pMatch[1]).trim();
    if (answerText.length < 20) continue;

    faqs.push({
      question: headingText.replace(/^¿|[?¿]$/g, '').trim(), // clean for schema
      answer: answerText.length > 300 ? answerText.substring(0, 300) + '…' : answerText,
    });

    if (faqs.length >= 5) break; // max 5 FAQs per article
  }

  return faqs;
}

/** Generate a short excerpt from HTML — picks the first meaningful paragraph */
export function generateExcerpt(html: string, maxLength = 160): string {
  // Try to extract text from the first <p> that has enough content
  const pMatches = html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi);
  for (const m of pMatches) {
    const text = m[1]
      .replace(/<[^>]+>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    // Skip very short paragraphs (less than 40 chars) — likely noise
    if (text.length >= 40) {
      if (text.length <= maxLength) return text;
      const truncated = text.substring(0, maxLength);
      const lastPeriod = truncated.lastIndexOf('.');
      if (lastPeriod > maxLength * 0.4) return truncated.substring(0, lastPeriod + 1);
      return truncated.replace(/\s+\S*$/, '') + '…';
    }
  }

  // Fallback: strip all HTML and take first N chars
  const text = html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!text) return '';
  if (text.length <= maxLength) return text;
  const truncated = text.substring(0, maxLength);
  const lastPeriod = truncated.lastIndexOf('.');
  if (lastPeriod > maxLength * 0.4) return truncated.substring(0, lastPeriod + 1);
  return truncated.replace(/\s+\S*$/, '') + '…';
}

/**
 * Add automatic internal links to first mentions of key terms in the HTML.
 * - Battery types → /tipos-de-pilas/ (with anchor)
 * - Car brands → their category page
 * Only links the FIRST occurrence per term, never inside existing <a> or headings.
 * Pass currentSlug to avoid linking to the page's own category.
 */
export function addInternalLinks(html: string, currentSlug: string): string {
  // Terms to auto-link: [regex to match text, url, link text to use]
  const linkTargets: { pattern: RegExp; url: string }[] = [
    // Battery types → tipos-de-pilas guide
    { pattern: /\bCR2032\b/i,  url: '/tipos-de-pilas/#cr2032' },
    { pattern: /\bCR2025\b/i,  url: '/tipos-de-pilas/#cr2025' },
    { pattern: /\bCR2016\b/i,  url: '/tipos-de-pilas/#cr2016' },
    { pattern: /\bCR1632\b/i,  url: '/tipos-de-pilas/#cr1632' },
    { pattern: /\bCR2450\b/i,  url: '/tipos-de-pilas/#cr2450' },
    { pattern: /\bCR1616\b/i,  url: '/tipos-de-pilas/#cr1616' },
    // Brand categories — only link if not already on that brand's page
    ...(!currentSlug.includes('audi')        ? [{ pattern: /\bAudi\b/i,        url: '/categoria/audi/' }]         : []),
    ...(!currentSlug.includes('renault')     ? [{ pattern: /\bRenault\b/i,     url: '/categoria/renault/' }]      : []),
    ...(!currentSlug.includes('volkswagen') && !currentSlug.includes('-vw-')
        ? [{ pattern: /\bVolkswagen\b/i,     url: '/categoria/volkswagen/' }]  : []),
    ...(!currentSlug.includes('mercedes')    ? [{ pattern: /\bMercedes\b/i,    url: '/categoria/mercedes-benz/' }]: []),
  ];

  let result = html;

  for (const { pattern, url } of linkTargets) {
    // We replace only the FIRST match that is:
    // 1. Inside a <p> tag text (not headings, not existing links, not attrs)
    // We do this by splitting on existing <a> tags to avoid double-linking
    let linked = false;
    result = result.replace(
      // Match paragraphs and replace only first occurrence of the term
      /<p([^>]*)>([\s\S]*?)<\/p>/gi,
      (fullP, attrs, inner) => {
        if (linked) return fullP;
        // Skip if term doesn't appear in this paragraph
        if (!pattern.test(inner)) return fullP;
        // Skip if term is already inside an anchor in this paragraph
        const innerWithoutLinks = inner.replace(/<a[^>]*>[\s\S]*?<\/a>/gi, '___LINK___');
        if (!pattern.test(innerWithoutLinks)) return fullP;

        // Replace first occurrence in this paragraph (outside existing links)
        let replaced = false;
        const newInner = inner.replace(
          // Split by <a> tags, replace in non-link segments only
          /(<a[^>]*>[\s\S]*?<\/a>)|([^<]+)/gi,
          (chunk, linkChunk, textChunk) => {
            if (linkChunk) return linkChunk; // already a link, skip
            if (replaced || !textChunk) return chunk;
            if (pattern.test(textChunk)) {
              replaced = true;
              return textChunk.replace(pattern, (match) => {
                return `<a href="${url}" class="internal-link">${match}</a>`;
              });
            }
            return chunk;
          }
        );
        if (replaced) linked = true;
        return `<p${attrs}>${newInner}</p>`;
      }
    );
  }

  return result;
}
