export default {
  widgets: [
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
                  buildHookId: '5edf889b19e0938ba27abe0f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-qtu6v4ox',
                  apiId: 'a80faf12-5935-4b43-aa8e-788c4b871057'
                },
                {
                  buildHookId: '5edf889b4fb2ac6c3f3a1d87',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-wti7j15a',
                  apiId: '7c39b55d-48d7-4d83-831d-63213b16eedc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/LauraAnnabel89/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-wti7j15a.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
