/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // ============================================
      // EXISTING REDIRECTS (preserved)
      // ============================================
      
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

      // ============================================
      // NEW REDIRECTS - SERVICE PAGES (from 404 list)
      // ============================================
      
      // Hiab lift plan (old URL without -2)
      {
        source: '/hiab-lift-plan',
        destination: '/services/lift-plans',
        permanent: true,
      },
      
      // Lift plan audit
      {
        source: '/lift-plan-audit',
        destination: '/services/lift-plan-checking',
        permanent: true,
      },
      {
        source: '/lift-plan-audit/',
        destination: '/services/lift-plan-checking',
        permanent: true,
      },
      
      // Lift plan consultancy
      {
        source: '/lift-plan-consultancy',
        destination: '/services/lift-plans',
        permanent: true,
      },
      {
        source: '/lift-plan-consultancy/',
        destination: '/services/lift-plans',
        permanent: true,
      },
      
      // Old contact page
      {
        source: '/rmt-solutions-contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/rmt-solutions-contact-us/',
        destination: '/contact',
        permanent: true,
      },
      
      // Drone inspection (service discontinued)
      {
        source: '/drone-inspection-service',
        destination: '/',
        permanent: true,
      },
      {
        source: '/drone-inspection-service/',
        destination: '/',
        permanent: true,
      },
      
      // Fire risk assessment
      {
        source: '/fire-risk-assessment',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/fire-risk-assessment/',
        destination: '/resources',
        permanent: true,
      },
      
      // Health and safety audit
      {
        source: '/health-and-safety-audit',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/health-and-safety-audit/',
        destination: '/resources',
        permanent: true,
      },
      
      // Health and safety consultancy
      {
        source: '/health-and-safety-consultancy-2',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/health-and-safety-consultancy-2/',
        destination: '/resources',
        permanent: true,
      },

      // ============================================
      // NEW REDIRECTS - WORDPRESS BLOG POSTS
      // ============================================
      
      // Fire-related posts
      {
        source: '/2024/07/12/why-your-business-needs-a-fire-risk-assessment',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2024/07/15/fire-regulations',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2024/07/15/fire-regulations/',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2024/03/04/fire-safety-compliance',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2024/03/04/fire-safety-compliance/',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2024/01/18/fire-risk-bussiness',
        destination: '/resources',
        permanent: true,
      },
      
      // Drone services post
      {
        source: '/2024/08/04/the-skys-the-limit-benefits-of-drone-services-in-construction',
        destination: '/',
        permanent: true,
      },
      
      // Lifting operations posts
      {
        source: '/2024/02/15/lifting-operations-audit-2',
        destination: '/services/lift-plan-checking',
        permanent: true,
      },
      {
        source: '/2024/02/15/lifting-operations-audit-2/',
        destination: '/services/lift-plan-checking',
        permanent: true,
      },
      {
        source: '/2024/01/23/lifting-operations-audit',
        destination: '/services/lift-plan-checking',
        permanent: true,
      },
      {
        source: '/2024/01/19/lift-plan-safety-audit',
        destination: '/services/lift-plan-checking',
        permanent: true,
      },
      
      // LOLER post
      {
        source: '/2024/02/20/loler',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2024/02/20/loler/',
        destination: '/resources',
        permanent: true,
      },
      
      // Appointed person post
      {
        source: '/2024/01/20/appointed-person',
        destination: '/resources',
        permanent: true,
      },
      
      // Health and safety consultant post
      {
        source: '/2024/01/21/health-and-safety-consultants',
        destination: '/resources',
        permanent: true,
      },
      
      // Musculoskeletal disorders
      {
        source: '/2024/01/23/musculoskeletal-disorders',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2024/01/23/musculoskeletal-disorders/',
        destination: '/resources',
        permanent: true,
      },
      
      // MEWP post
      {
        source: '/2024/01/24/mewp',
        destination: '/services/lift-plans',
        permanent: true,
      },
      {
        source: '/2024/01/24/mewp/',
        destination: '/services/lift-plans',
        permanent: true,
      },
      
      // Welding fumes
      {
        source: '/2024/01/24/mild-steel-welding-fumes',
        destination: '/resources',
        permanent: true,
      },
      
      // Tower crane posts
      {
        source: '/2024/01/16/tower-crane-lift-operations',
        destination: '/services/tower-crane',
        permanent: true,
      },
      {
        source: '/2024/01/17/tower-crane-accidents',
        destination: '/services/tower-crane',
        permanent: true,
      },
      
      // Workplace safety
      {
        source: '/2024/01/05/safety-in-the-workplace',
        destination: '/resources',
        permanent: true,
      },
      
      // Lift plan CAD/software posts
      {
        source: '/2024/01/07/lift-plan-drawing-2d-cad',
        destination: '/services/lift-plans',
        permanent: true,
      },
      {
        source: '/2024/01/11/lift-planning-software',
        destination: '/services/lift-plans',
        permanent: true,
      },
      {
        source: '/2024/01/02/lift-plan-software',
        destination: '/services/lift-plans',
        permanent: true,
      },
      
      // Lift plan in construction
      {
        source: '/2023/12/24/lift-plan-in-construction',
        destination: '/services/lift-plans',
        permanent: true,
      },
      
      // Health and safety audits
      {
        source: '/2023/12/27/health-and-safety-audits',
        destination: '/resources',
        permanent: true,
      },
      
      // Crane ground loadings
      {
        source: '/2023/12/30/crane-ground-loadings',
        destination: '/services/lift-plans',
        permanent: true,
      },

      // ============================================
      // WORDPRESS DATE ARCHIVE REDIRECTS
      // ============================================
      
      {
        source: '/2024/01',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2024/01/02',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2024/01/04',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2024/01/05',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2024/01/07',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2024/01/11',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2024/01/16',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2024/01/17',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2024/01/18',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2024/01/19',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2024/01/20',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2024/01/23',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2024/01/24',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2024/02',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2023/12',
        destination: '/resources',
        permanent: true,
      },

      // ============================================
      // WORDPRESS CATEGORY/FEED REDIRECTS
      // ============================================
      
      {
        source: '/category/posts',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2024/01/25/health-and-safety-news/feed',
        destination: '/resources',
        permanent: true,
      },

      // ============================================
      // TECHNICAL/ASSET REDIRECTS
      // ============================================
      
      {
        source: '/apple-app-site-association',
        destination: '/',
        permanent: false,
      },
      {
        source: '/apple-app-site-association/',
        destination: '/',
        permanent: false,
      },
      {
        source: '/.well-known/apple-app-site-association',
        destination: '/',
        permanent: false,
      },

      // ============================================
      // WILDCARD CATCH-ALLS (must be last)
      // ============================================
      
      // Catch any remaining WordPress date-based URLs
      {
        source: '/2024/:month/:day/:slug',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2023/:month/:day/:slug',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2024/:month/:day/:slug/',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/2023/:month/:day/:slug/',
        destination: '/resources',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
