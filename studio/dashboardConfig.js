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
                  buildHookId: '616491400407c90e4c768d1d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-page-2-studio',
                  apiId: '511600bc-5f35-49d8-a9e6-1c7ce6565dc9'
                },
                {
                  buildHookId: '616491405890270c8766adb5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-page-2',
                  apiId: 'f0c92507-ac33-46d3-8926-e2371148f497'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/raffi1300/sanity-nextjs-landing-page2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-page-2.netlify.app', category: 'apps'}
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
