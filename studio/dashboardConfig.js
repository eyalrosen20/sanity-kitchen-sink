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
                  buildHookId: '5ee1739e3aee2a0198e204eb',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-grk36ymc',
                  apiId: 'dcd710c9-2034-4fb3-94fa-4915f26d05e3'
                },
                {
                  buildHookId: '5ee1739f62c43c01c57c7ce1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1zzw8er4',
                  apiId: '4d4539d4-3ab1-4742-85cf-72328c6a048e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chloerosen4/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1zzw8er4.netlify.app', category: 'apps'}
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
