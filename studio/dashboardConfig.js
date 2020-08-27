export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f478e9ad0f5ff8a419f2655',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-u512tcxh',
                  apiId: 'c74c9d51-a7f7-4645-bfbf-f92c418b5957'
                },
                {
                  buildHookId: '5f478e9abd7b193d0fe0daeb',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-geu263a4',
                  apiId: '2b888b8e-0c3b-4147-a854-c93c691dcb5d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dravasp/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-geu263a4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
