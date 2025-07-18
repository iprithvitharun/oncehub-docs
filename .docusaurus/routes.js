import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'fe9'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'd9f'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'd1e'),
            routes: [
              {
                path: '/docs/connecting-calendars-video-apps/exchange-outlook',
                component: ComponentCreator('/docs/connecting-calendars-video-apps/exchange-outlook', 'e17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/connecting-calendars-video-apps/google-calendar',
                component: ComponentCreator('/docs/connecting-calendars-video-apps/google-calendar', '558'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/connecting-calendars-video-apps/icloud',
                component: ComponentCreator('/docs/connecting-calendars-video-apps/icloud', 'f9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/connecting-calendars-video-apps/o365',
                component: ComponentCreator('/docs/connecting-calendars-video-apps/o365', '3ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/connecting-calendars-video-apps/overview',
                component: ComponentCreator('/docs/connecting-calendars-video-apps/overview', '309'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/connecting-calendars-video-apps/video-setup',
                component: ComponentCreator('/docs/connecting-calendars-video-apps/video-setup', 'bb3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/connect-your-calendar',
                component: ComponentCreator('/docs/getting-started/connect-your-calendar', '87b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/connect-your-video-conferencing-app',
                component: ComponentCreator('/docs/getting-started/connect-your-video-conferencing-app', 'd7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/introduction-to-oncehub',
                component: ComponentCreator('/docs/getting-started/introduction-to-oncehub', '810'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/join-your-existing-organization',
                component: ComponentCreator('/docs/getting-started/join-your-existing-organization', '397'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/getting-started/use-oncehub-on-mobile',
                component: ComponentCreator('/docs/getting-started/use-oncehub-on-mobile', '5d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
