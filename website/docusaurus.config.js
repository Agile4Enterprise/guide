// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Agile4Enterprise',
  tagline: 'Transformer durablement votre manière de faire du business',
  favicon: 'img/logo.svg',

  // URL de production (remplacez par votre domaine final si applicable)
  url: 'https://Agile4Enterprise.github.io',
  // Base URL pour GitHub Pages
  baseUrl: '/guide/',

  // Configuration pour GitHub Pages
  organizationName: 'Agile4Enterprise', // Nom de l'organisation GitHub
  projectName: 'guide', // Nom du repo GitHub
  deploymentBranch: 'gh-pages', // Branche où le site sera déployé
  trailingSlash: false, // Empêche les redirections SEO problématiques sur GitHub Pages
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: '../docs', // Permet d’utiliser le dossier docs à la racine du projet
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Agile4Enterprise/guide/edit/main/docs/',
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl: 'https://github.com/Agile4Enterprise/guide/edit/main/blog/',
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Agile4Enterprise',
        logo: {
          alt: 'Logo Agile4Enterprise',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guide',
          },
          //{ to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://agile4enterprise.github.io/framework/',
            label: 'Framework',
            position: 'left',
          },
          {
            type: 'docSidebar',
            href: 'https://agile4enterprise.github.io/framework/blog',
            label: 'Blog',
            position: 'left',
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Framework',
                href: 'https://agile4enterprise.github.io/framework/',
              },
              {
                label: 'Guide',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'Communauté',
            items: [
              {
                label: 'Site officiel',
                href: 'https://agile4enterprise.com/',
              },
              {
                label: 'Circle',
                href: 'http://community.agile4enterprise.com/',
              },
              {
                label: 'Meetup',
                href: 'http://meetup.agile4enterprise.com/',
              },
            ],
          },
          {
            title: 'Plus',
            items: [
              {
                label: 'Blog',
                href: 'https://agile4enterprise.github.io/framework/blog',
              },
              {
                label: 'GitHub Framework',
                href: 'https://github.com/Agile4Enterprise/framework',
              },
              {
                label: 'GitHub Guide',
                href: 'https://github.com/Agile4Enterprise/guide',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Agile4Enterprise`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
