export function resolveYear(text: string): string {
  return text.replace(/%%currentyear%%/g, new Date().getFullYear().toString());
}

export function stripEmojis(text: string): string {
  return text.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}]/gu, '').trim();
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateArticleSchema(opts: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    ...(opts.image && { image: opts.image }),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: {
      '@type': 'Organization',
      name: opts.author || 'Cambiando de Pilas',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Cambiando de Pilas',
      url: 'https://cambiandopilas.com',
    },
  };
}

export function generateHowToSchema(opts: {
  title: string;
  description: string;
  url: string;
  image?: string;
  steps: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: opts.title,
    description: opts.description,
    url: opts.url,
    ...(opts.image && { image: opts.image }),
    step: opts.steps.map((text, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: text.length > 80 ? text.substring(0, 80) + '…' : text,
      text,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Cambiando de Pilas',
    url: 'https://cambiandopilas.com',
    description: 'Guías y tutoriales sobre cómo cambiar pilas y baterías de llaves de coche, auriculares, relojes y dispositivos electrónicos.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://cambiandopilas.com/blog?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Cambiando de Pilas',
    url: 'https://cambiandopilas.com',
    logo: 'https://cambiandopilas.com/favicon.svg',
    description: 'Guías y tutoriales sobre cómo cambiar pilas y baterías en todo tipo de dispositivos.',
    sameAs: [],
  };
}
