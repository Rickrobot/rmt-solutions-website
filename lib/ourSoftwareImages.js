import { IMAGE_RIGHTS } from '@/lib/imageRights'

const SITE = 'https://www.rmtsafetysolutions.com'

/**
 * Images from RMT's own software (LiftDraft 3D CAD and the lift planning
 * software), shown in the "How RMT plans and reviews lifts" section.
 * Used for ImageObject structured data and the image sitemap so Google can
 * associate them with the pages they appear on. All are RMT-made, so the
 * RMT image rights apply.
 */
export const OUR_SOFTWARE_IMAGES = [
  {
    src: '/images/our-software/liftdraft-3d-cad.webp',
    name: 'LiftDraft 3D CAD: mobile crane lift model',
    caption: 'LiftDraft, the 2D and 3D CAD system built by RMT Solutions, modelling a mobile crane lift on outrigger mats',
    width: 1226,
    height: 853,
  },
  {
    src: '/images/our-software/mobile-crane-3d.webp',
    name: 'Mobile crane lift plan 3D view',
    caption: '3D view of a mobile crane lift with slew and exclusion zones, from RMT lift planning software',
    width: 1600,
    height: 900,
  },
  {
    src: '/images/our-software/lorry-loader-3d.webp',
    name: 'Lorry loader cabin lift 3D view',
    caption: '3D view of a lorry loader lifting a welfare cabin on four-leg slings, from RMT lift planning software',
    width: 1600,
    height: 900,
  },
  {
    src: '/images/our-software/telehandler-3d.webp',
    name: 'Telehandler lift plan 3D view',
    caption: '3D view of a telehandler carrying a load on forks with the working radius marked, from RMT lift planning software',
    width: 1600,
    height: 900,
  },
  {
    src: '/images/our-software/excavator-3d.webp',
    name: 'Excavator lift plan 3D model in LiftDraft',
    caption: 'Excavator lifting a trench drag box on chains from the quick-hitch, bucket removed, modelled in LiftDraft',
    width: 855,
    height: 481,
  },
]

export const ourSoftwareImageUrls = () => OUR_SOFTWARE_IMAGES.map((i) => `${SITE}${i.src}`)

export const ourSoftwareImageObjects = () =>
  OUR_SOFTWARE_IMAGES.map((i) => ({
    '@type': 'ImageObject',
    contentUrl: `${SITE}${i.src}`,
    url: `${SITE}${i.src}`,
    name: i.name,
    caption: i.caption,
    width: i.width,
    height: i.height,
    ...IMAGE_RIGHTS,
  }))
