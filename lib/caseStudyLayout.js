import { IMAGE_RIGHTS } from '@/lib/imageRights'

// Shared JSON-LD builders for the anonymised case studies (Nov 2026).
// Client and site names are withheld on these pages; the figures come from
// the issued lift plans. Images are RMT's own public example drawings.

export const SITE = 'https://www.rmtsafetysolutions.com'

export function caseStudyArticle({ url, headline, description, image, about, date, region }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: {
      '@type': 'ImageObject',
      contentUrl: `${SITE}${image.src}`,
      url: `${SITE}${image.src}`,
      width: image.width,
      height: image.height,
      caption: image.caption,
      ...IMAGE_RIGHTS,
    },
    about,
    datePublished: date,
    dateModified: date,
    author: {
      '@type': 'Person',
      name: 'Ricky Marsh',
      jobTitle: 'CPCS Appointed Person (A61)',
      url: `${SITE}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'RMT Solutions Ltd',
      url: SITE,
      logo: { '@type': 'ImageObject', url: `${SITE}/images/rmt-logo-publisher.png` },
    },
    contentLocation: { '@type': 'Place', name: region, address: { '@type': 'PostalAddress', addressRegion: region, addressCountry: 'GB' } },
    isPartOf: { '@type': 'CollectionPage', name: 'Lift Planning Case Studies', url: `${SITE}/case-studies` },
    mainEntityOfPage: url,
  }
}

export function caseStudyBreadcrumb({ url, name }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Case Studies', item: `${SITE}/case-studies` },
      { '@type': 'ListItem', position: 3, name, item: url },
    ],
  }
}
