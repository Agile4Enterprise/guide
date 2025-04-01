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
    {
      type: 'doc',
      id: 'index',  // ✅ Utilisation de index.md à la racine
      label: 'Introduction',
    },
    {
      type: 'category',
      label: "L'entreprise agile",
      collapsed: false,
      items: [
        'introduction/entrepriseagile/index', 
        'introduction/piloterlechangement/index', 
        'introduction/defis/index', 
        'introduction/niveauxdecisions/index', 
        'introduction/pourquoiagile4enterprise/index', 
      ],
    },
    {
      type: 'category',
      label: 'Les fondations',
      collapsed: false,
      items: [
        'fondations/fondations', 
        'fondations/framework/index',
        'fondations/agilite4d/index',
        'fondations/susovuca/index',
        'fondations/4cadences/index',
        'fondations/4capacites/index',
        'fondations/ensavoirplus/index',
      ],
    },
    {
      type: 'category',
      label: "L'agilité Portfolio",
      collapsed: false,
      items: [
        'fondations/introduction/index', 
        'fondations/modele4e/index',
        'fondations/gouvernanceadaptative/index',
        'fondations/agiliteorganisationnelle/index',
        'fondations/agiliteorganisationnelleportfolio/index',
        'fondations/action/index',
      ],
    },
    {
      type: 'category',
      label: "L'agilité Stratégique",
      collapsed: false,
      items: [
        'fondations/introduction/index', 
        'fondations/agiliterh/index',
        'fondations/gouvernanceadaptative/index',
        'fondations/agiliteorganisationnelle/index',
        'fondations/action/index',
      ],
    },
    {
      type: 'category',
      label: "L'agilité Tactique",
      collapsed: false,
      items: [
        'fondations/introduction/index', 
      ],
    },
  ],
};

export default sidebars;