export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f2f55cc848de09bcb49393c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-vft5k1rn',
                  apiId: '0da65cf9-6289-465e-b325-ec7ad8105330'
                },
                {
                  buildHookId: '5f2f55cd7f23730956a08688',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-u94gid41',
                  apiId: '90c6ab41-2f88-4291-81c1-1b55a2300ab6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/faizulho/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-u94gid41.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
