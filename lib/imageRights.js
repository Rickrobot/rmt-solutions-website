/**
 * Rights metadata for images RMT Solutions Ltd publishes as ImageObject
 * structured data.
 *
 * Google Search Console's "Image metadata" report flags any ImageObject that
 * carries a contentUrl but none of the rights fields below (license,
 * acquireLicensePage, creditText, copyrightNotice). The issues are
 * non-critical today but Google has said they may become critical, and the
 * fields are what lets Google show the "Licensable" badge and credit line in
 * Google Images.
 *
 * Spread IMAGE_RIGHTS into an ImageObject ONLY for images RMT Solutions Ltd
 * made and owns — the lift plan drawings, and photographs or drone imagery
 * RMT took itself. Never apply it to a client's, manufacturer's or third
 * party's image (logos, supplied site photos, manufacturer renders): that
 * would publish a copyright claim RMT does not hold.
 *
 * The licence terms themselves live on /image-licence. Change them there,
 * not here.
 */

const SITE = 'https://www.rmtsafetysolutions.com'

export const IMAGE_LICENCE_URL = `${SITE}/image-licence`

export const IMAGE_RIGHTS = {
  // The page that sets out the terms the image is published under.
  license: IMAGE_LICENCE_URL,
  // Where someone goes to ask for permission to reuse the image.
  acquireLicensePage: `${IMAGE_LICENCE_URL}#request-permission`,
  // Shown by Google as the credit line under the image.
  creditText: 'RMT Solutions Ltd',
  copyrightNotice: '© RMT Solutions Ltd. All rights reserved.',
  creator: { '@type': 'Organization', name: 'RMT Solutions Ltd', url: SITE },
  copyrightHolder: { '@type': 'Organization', name: 'RMT Solutions Ltd', url: SITE },
}
