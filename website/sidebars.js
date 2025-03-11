// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    // L'Entreprise Agile
    {
      type: 'category',
      label: "L'Entreprise Agile",
      collapsed: false,
      items: [
        'introduction/index',
        {
          type: 'category',
          label: "Pourquoi l'Entreprise Agile ?",
          collapsed: true,
          items: [
            'introduction/entrepriseagile/index',
          ],
        },
      ],
    },
    // Les fondations
    {
      type: 'category',
      label: "Les fondations d'Agile4Enterprise",
      collapsed: false,
      items: [
        'fondations/index',
        {
          type: 'category',
          label: "Le Framework Agile4Enterprise",
          collapsed: true,
          items: [
            'fondations/framework/index',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
