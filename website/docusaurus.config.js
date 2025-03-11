// @ts-check
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const prismThemes = require('prism-react-renderer').themes.github;
const prismDarkTheme = require('prism-react-renderer').themes.dracula;

import { fileURLToPath } from 'url';
import path from 'path';

// Remplace require.resolve pour fonctionner en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Agile4Enterprise - Le Guide',
  tagline: 'L’agilité adaptée aux PME',
  favicon: 'img/favicon.ico',

  // URL de production
  url: 'https://Agile4Enterprise.github.io',
  baseUrl: '/guide/',

  // Configuration pour GitHub Pages
  organizationName: 'Agile4Enterprise',
  projectName: 'guide',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
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
          path: '../docs',
          sidebarPath: path.resolve(__dirname, './sidebars.js'), // Remplace require.resolve()
          editUrl: 'https://github.com/Agile4Enterprise/guide/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Agile4Enterprise/guide/edit/main/blog/',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: path.resolve(__dirname, './src/css/custom.css'),
        },
      }),
    ],
  ],

  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
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
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/Agile4Enterprise/guide',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [{ label: 'Guide', to: '/docs/' }],
          },
          {
            title: 'Communauté',
            items: [
              { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
              { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
              { label: 'X', href: 'https://x.com/docusaurus' },
            ],
          },
          {
            title: 'Plus',
            items: [
              { label: 'Blog', to: '/blog' },
              { label: 'GitHub', href: 'https://github.com/Agile4Enterprise/guide' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Agile4Enterprise.`,
      },
      prism: {
        theme: prismThemes,
        darkTheme: prismDarkTheme,
      },
    },
  
  
  };
  
  export default config;