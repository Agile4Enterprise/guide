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
      collapsed: true,
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
      label: "Les fondations d'Agile4Enterprise'",
      collapsed: true,
      items: [
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
      collapsed: true,
      items: [
        'agiliteportfolio/introduction/index', 
        'agiliteportfolio/modele4e/index',
        'agiliteportfolio/gouvernanceadaptative/index',
        'agiliteportfolio/agiliteorganisationnelle/index',
        'agiliteportfolio/agiliteorganisationnelleportfolio/index',
        'agiliteportfolio/action/index',
      ],
    },
    {
      type: 'category',
      label: "L'agilité Stratégique",
      collapsed: true,
      items: [
        'agilitestrategique/introduction/index', 
        'agilitestrategique/agiliterh/index',
        'agilitestrategique/gouvernanceadaptative/index',
        'agilitestrategique/agiliteorganisationnelle/index',
        'agilitestrategique/action/index',
      ],
    },
    {
      type: 'category',
      label: "L'agilité Tactique",
      collapsed: true,
      items: [
        'agilitetactique/introduction/index', 
        'agilitetactique/gouvernanceadaptative/index', 
        'agilitetactique/agiliteorganisationnelle/index', 
        'agilitetactique/action/index', 
      ],
    },
    {
      type: 'category',
      label: "L'agilité Opérationnelle & Managériale",
      collapsed: true,
      items: [
        'agiliteoperationnelle/agilitemanageriale/index', 
        'agiliteoperationnelle/agiliteoperationnelle/index', 
        'agiliteoperationnelle/gouvernanceadaptative/index', 
        'agiliteoperationnelle/agiliteorganisationnelle/index', 
        'agiliteoperationnelle/action/index', 
      ],
    },
    {
      type: 'category',
      label: "Les 4 archétypes agiles",
      collapsed: true,
      items: [
        'archetypes/4archetypes/index', 
        'archetypes/agile4flow/index', 
        'archetypes/agile4network/index', 
        'archetypes/agile4product/index', 
        'archetypes/agile4project/index', 
        'archetypes/topologie/index', 
      ],
    },
    {
      type: 'category',
      label: "La transformation",
      collapsed: true,
      items: [
        'transformation/demarche/index', 
        'transformation/radar/index', 
        'transformation/impacte/index', 
        'transformation/pacte/index', 
        'transformation/acte/index', 
        'transformation/roles/index', 
      ],
    },
    {
      type: 'category',
      label: "Conclusion",
      collapsed: true,
      items: [
        'conclusion/index', 
      ],
    },
  ],
};

export default sidebars;