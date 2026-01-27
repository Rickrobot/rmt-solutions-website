/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
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
    ]
  },
}

module.exports = nextConfig
