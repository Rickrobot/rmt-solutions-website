/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Old lift plan pages
      {
        source: '/telehandler-lift-plan',
        destination: '/services/lift-plans',
        permanent: true,
      },
      {
        source: '/telehandler-lift-plan/',
        destination: '/services/lift-plans',
        permanent: true,
      },
      {
        source: '/excavator-lift-plan',
        destination: '/services/lift-plans',
        permanent: true,
      },
      {
        source: '/excavator-lift-plan/',
        destination: '/services/lift-plans',
        permanent: true,
      },
      {
        source: '/hiab-lift-plan-2',
        destination: '/services/lift-plans',
        permanent: true,
      },
      {
        source: '/hiab-lift-plan-2/',
        destination: '/services/lift-plans',
        permanent: true,
      },
      // Tower crane pages
      {
        source: '/tower-crane-lift-plans',
        destination: '/services/tower-crane',
        permanent: true,
      },
      {
        source: '/tower-crane-lift-plans/',
        destination: '/services/tower-crane',
        permanent: true,
      },
      // Old blog posts (WordPress date-based URLs)
      {
        source: '/2023/12/24/lift-plan-in-constructionconsultant-manchester',
        destination: '/services/lift-plans',
        permanent: true,
      },
      {
        source: '/2023/12/24/lift-plan-in-constructionconsultant-manchester/',
        destination: '/services/lift-plans',
        permanent: true,
      },
      {
        source: '/2024/01/04/safety-notice',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2024/01/04/safety-notice/',
        destination: '/resources',
        permanent: true,
      },
      // Health and safety page
      {
        source: '/health-and-safety',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/health-and-safety/',
        destination: '/resources',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
