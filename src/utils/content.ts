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

/** Generate a short excerpt from HTML — picks the first meaningful sentence */
export function generateExcerpt(html: string, maxLength = 160): string {
  const text = html
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!text) return '';
  if (text.length <= maxLength) return text;

  // Try to end on a complete sentence within maxLength
  const truncated = text.substring(0, maxLength);
  const lastPeriod = truncated.lastIndexOf('.');
  if (lastPeriod > maxLength * 0.4) {
    return truncated.substring(0, lastPeriod + 1);
  }

  // Fallback: cut at last word boundary
  return truncated.replace(/\s+\S*$/, '') + '…';
}
