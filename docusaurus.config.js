import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Programming Projects',
  tagline: 'A repository of programming projects',

  url: 'https://programmingprojects.org',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/anonymouscoolguy/programmingprojects/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'ProgrammingProjects.org',
        items: [
          {
            href: 'https://github.com/anonymouscoolguy/programmingprojects',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      footer: {
        style: 'dark',
        copyright: `Check out our <a href="https://github.com/anonymouscoolguy/programmingprojects">GitHub</a> repository.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
