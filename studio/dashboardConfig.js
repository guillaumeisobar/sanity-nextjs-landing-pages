export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63690a1db0c47e30e7a400b9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4t9xxd2g',
                  apiId: 'd4cf0656-82f4-48d9-914a-5b9e30a3c366'
                },
                {
                  buildHookId: '63690a1e351d3f36b48aa041',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4uiphgq6',
                  apiId: 'b9659f71-5166-4f5a-a303-0e4e373ef6c0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/guillaumeisobar/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4uiphgq6.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
