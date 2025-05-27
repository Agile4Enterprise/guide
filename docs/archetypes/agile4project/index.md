# Agile4Project : Archétype Projet (agile)

Propriétaire: Laurent Morisseau

- Sommaire

<aside>
✨

**Objectif**
L’**archétype Projet** structure des **initiatives stratégiques temporaires**, orientées vers l’**exploration**, la **transformation** ou le **désengagement**, avec des **objectifs clairs**, une **durée limitée** et un **focus sur l’impact**.

</aside>

<aside>
➿

**TechNova SRE (2024-2025)**

Pour explorer la plateforme SRE, TechNova a lancé un programme de projets communs avec un partenaire, dans le cadre d’une alliance stratégique.

</aside>

<aside>
🧑‍🎓

**Lexique rapide**

**Projet** : effort temporaire, budgété, avec objectif et échéance.

**Backlog Projet** : file d’attente des tâches propre à chaque projet.

**SCRIP** : Structure, Capacités, Reconnaissance, Individus, Processus (Projet).

**OKR stratégiques vs OKR tactiques** : objectifs programme / initiatives stratégiques vs objectifs de projet.

</aside>

![Archétype Projet dans le modèle Agile4X des 4 archétypes agile (et de son anti archétype)](image.png)

Archétype Projet dans le modèle Agile4X des 4 archétypes agile (et de son anti archétype)

# Positionnement

**Stratégie d’innovation** ciblée **:** nouveaux business models dans des niches émergentes, reposant sur une **différenciation forte** (plutôt que sur l’efficience ou la scalabilité).

**Logique dominante :** organisation qui se structure autour de ses projets.

**Secteurs cibles** : R&D, plateformes de projets**,** portefeuilles de startups internes.

## Cas d’usage

| Zone | But | Technova |
| --- | --- | --- |
| **Exploration** | Tester nouveaux modèles d’affaires ciblés | ***Technova Site Reliability Engineering (SRE)*** 
*Lorsque le CTO a lancé son projet SRE, Technova a décidé de créer un alliance stratégique avec une entreprise partenaire. Il a été décidé que la collaboration dans le contexte de l’alliance se ferait sous forme de projets communs.* |
| **Exclusion** | Désengager des actifs obsolètes de façon maîtrisée | Le produit SRE n’ayant pas trouvé son marché, et le partenaire n’étant pas aussi impliqué que Technova, elle a décidé de se **désengager pour libérer s**es ressources et de les réallouer sur l’innovation IA. |

> **Question** : Quel projet lanceriez-vous pour valider une nouvelle offre en 3 mois ?
> 

## Caractéristiques clés

- **Objectif & contraintes** : chaque projet a un objectif, un budget et une échéance.
- **Temporalité** : durée fixée vs cadence des autres archétypes. Globalement les autres archétypes supposent une certaine permanence des activités, une relative stabilité des processus, et donc une certaine répétitivité.

| Dimension | Enjeux clés |
| --- | --- |
| **Structure** | Programme central + unités projets temporaires + pôles de compétences partagées. |
| **Capacités** | Réactivité (mise en route rapide), Flexibilité (réallocation budget/ressources), Adaptabilité (pivot tactique), Proactivité (pipeline projets). |
| **Reconnaissance** | Impact mesuré via OKR tactiques, partages d’enseignements, célébration des transitions. |
| **Individus** | Équipes pluridisciplinaires, leadership distribué, mobilité fluide entre projets. |
| **Processus** | Pilotage par l’impact (OKR), backlog Projet par équipe, revues quotidiennes, tactiques hebdo, stratégiques trimestrielles. |

# Design organisationnel Projet

## Structure

![Structure type d’une organisation Projet](image%201.png)

Structure type d’une organisation Projet

<aside>
💡

**Unité stratégique**

C’est le **programme** d’initiatives stratégiques (en exploration ou en désengagement).

</aside>

Le design de l’archétype Projet repose sur une **organisation fonctionnelle par pool de compétences** avec une zone tactique d’intégration organisée par projet. On trouve différents types d’organisations projets :

- **Structure pure projets** : Projet + [structure fonctionnelle](https://www.notion.so/Le-design-organisationnel-13e90eaf28ff8050add6fa0a5cf907c5?pvs=21) - exemple BTP
- **Structure mixte projets - fonctions** : Projet + [structure divisionnelle](https://www.notion.so/Le-design-organisationnel-13e90eaf28ff8050add6fa0a5cf907c5?pvs=21) - exemple ESN
- **Structure matricielle projets - métiers** : Projet + [structure matricielle](https://www.notion.so/Le-design-organisationnel-13e90eaf28ff8050add6fa0a5cf907c5?pvs=21) - exemple sociétés d’ingénierie

<aside>
💡

**Unité tactique**

C’est l’espace d’intégration des projets, agile, temporaire et reconfigurable, piloté par l’impact. C’est une structure opérationnelle à durée déterminée.

</aside>

[**Couplage faible](https://www.notion.so/Les-principes-de-design-strat-gique-13e90eaf28ff80628778e05ec7ed18cc?pvs=21) entre projets**

Chaque projet est autonome, avec des objectifs et un budget définis.

[**Dépendance faible](https://www.notion.so/Minimiser-les-interd-pendances-14390eaf28ff804f9da7d83917dd8232?pvs=21) entre projets**

**L’interdépendance est liée aux services partagés mutualisés**, tels que des compétences rares ne pouvant être intégrées à l’équipe projet (architecte, sécurité, …).

**Couplage fort au sein d’un projet, autour** du [Backlog](https://www.notion.so/Le-Backlog-un-outil-d-int-gration-ou-de-coordination-14490eaf28ff805e9950ccf8c65367cb?pvs=21) projet et des [OKR](https://www.notion.so/OKR-un-outil-de-l-agilit-strat-gique-et-tactique-14590eaf28ff80b3b0f7e344d0764762?pvs=21) pour la fixation des objectifs : OKR stratégique pour le programme et OKR tactique pour le projet.

[**L’organisation duale**](https://www.notion.so/La-reconfigurabilit-organisationnelle-14390eaf28ff80a3bb7dcfa1a866df07?pvs=21)

La structure est la ligne hiérarchique, les projets se font là où se font les affaires.

- **Structure formelle**  = stable par pôles de compétences
- **Réseau dynamique**  = équipes projet. Ce système informel peut évoluer au gré des [OKR tactiques](https://www.notion.so/OKR-un-outil-de-l-agilit-strat-gique-et-tactique-14590eaf28ff80b3b0f7e344d0764762?pvs=21).

### **Unité opérationnelle**

**Equipe projet ou d’impact**

Les équipes sont donc temporaires. Elle se constitue autour d’OKR tactiques. Elle s’arrête lorsque l’objectif est atteint ou à la fin du cycle tactique. La pluridisciplinarité est obtenue dans l’espace d’intégration. Le chef de projet est un rôle opérationnel d’intégration et de coordination, non un rôle managérial.

Un projet peut impacter plusieurs produits ou plusieurs services.

**Pôle de compétence**

Un pôle  de compétence est stable, avec un manager pour s’assurer du développement des compétences.

*Dans une approche produit, c’est l’inverse, l’équipe produit ou feature est stable, et la communauté de pratiques/compétences est plus dynamique.*

## Capacités organisationnelles

**Réactivité :** Capacité à expérimenter rapidement des hypothèses, à prendre des initiatives. Time-to-impact réduit.

**Flexibilité :** Réajustement des objectifs tactiques, réallocation de ressources.

**Adaptabilité :** Évolution rapide des objectifs stratégiques.

**Proactivité :** Création d’un pipeline d’innovations aligné avec la stratégie globale.

## Reconnaissance : Valoriser l'impact, pas la hiérarchie

**L’enjeu individuel** est celui de la réputation et le développement de compétences.

**L’enjeu managérial** porte sur le potentiel combinatoire des compétences et la capacité des équipes à pouvoir mettre en œuvre de nouvelles compétences rapidement.

## Individu

Les individus évoluent d’un projet à un autre, ce qui implique **un autre modèle de gestion des talents et des responsabilités plus dynamique**.

**Styles de leadership et d’encadrement :**

- **La direction adopte un style de leadership stratégique** → définit la **vision** et les grandes lignes du projet.
- **Le leadership est entrepreneurial et distribué** → l’équipe **décide elle-même** de ses moyens d’exécution.
- **Le management est orienté réseau** → facilite la mise en relation des talents, plutôt que de diriger en hiérarchie.

**Les individus doivent être capables de :**

- S’adapter rapidement à **de nouveaux contextes projet**.
- Développer des **compétences transverses** pour maximiser leur impact.
- Fonctionner avec **un haut niveau d’autonomie** et de responsabilité.

**L’évolution des talents et la gestion des compétences**

C’est un modèle de gestion basé sur l’apprentissage et l’évolution :

- **Les individus développent leur expertise** en passant d’un projet à un autre, plutôt qu’en restant dans une structure fixe.
- Les **OKR tactiques** permettent d’orienter les individus vers des projets où ils peuvent **apporter une valeur directe**.
- Une logique de **mobilité fluide** entre projets remplace la gestion classique des carrières (un collaborateur peut facilement passer d’un projet d’exploration à un projet d’exclusion).

## Processus

**Pilotage par l’impact**, en vue d’atteindre l’objectif associée à l’initiative stratégique, ajusté à chaque itération. L’objectif n’est pas le livrable, mais **l’impact stratégique mesurable**, que l’on pilote grâce à des OKR adaptés.

[**Coordination verticale](https://www.notion.so/La-coordination-verticale-14390eaf28ff807b9cafd0f0af71e154?pvs=21)** repose sur des **rôles d’[intégrateurs](https://www.notion.so/La-coordination-horizontale-14390eaf28ff803ca06ccdf8026760d7?pvs=21)** : ex. chefs de projet agiles, responsables de transformation.

[**Coordination horizontale](https://www.notion.so/La-coordination-horizontale-14390eaf28ff803ca06ccdf8026760d7?pvs=21)** est gérée par du management réticulaire. Elle est assurée par un **réseau informel** et des **cadences de synchronisation régulières**.

[**Cadence de changement**](https://www.notion.so/Agile4B-Les-4-boucles-adaptatives-13b90eaf28ff8091b4cce85974f50938?pvs=21)

- Revue opérationnelle quotidienne
- Revue tactique hebdomadaire ou bi mensuelle des initiatives pour ajuster les priorités.
- Revue **trimestrielle** pour évaluer les **OKR tactiques** et piloter l’atteinte des objectifs.

**Méthodes**

| **Méthode** | **Idéal pour…** | **Pourquoi ?** |
| --- | --- | --- |
| **DSDM (Dynamic Systems Development Method)** | Projets structurés, compliance, IT | Gestion hybride avec flexibilité sur le périmètre fonctionnel |
| [Shape -Up](https://www.notion.so/Shape-Up-17e90eaf28ff80758f0bd20ba1545584?pvs=21) **** | Petits projets, équipes autonomes | Approche fluide sans Backlog, engagement sur 6 semaines |
| **PMI Agile (PMI-ACP)** | Projets complexes | Standardisation + flexibilité agile |
| **AgilePM** | Gestion agile de projet | Structure + gouvernance pour projets agiles |
| **Scrum** | Gestion agile de projet | Flexibilité sur le périmètre fonctionnel |

## Résultats

### Performance

La performance repose sur l’atteinte des objectifs définis plutôt que par l’achèvement d’un plan préétabli.

### Culture

| Valeurs dominantes | Manifestation dans l’organisation projet |
| --- | --- |
| **Intrapreneuriat** | Autonomie, initiative, prise de risque stratégique |
| **Apprentissage continu** | Rétrospective projet, capitalisation, valorisation du pivot |
| **Flexibilité structurelle** | Reconfigurabilité permanente de l’espace d’intégration |
| **Réseau de talents** | Plateforme de compétences plutôt que hiérarchie de commandement |

# Bénéfices d’un archétype en projet

- **Validation rapide** d’hypothèses stratégiques.
- **Exploration sécurisée** de nouveaux marchés.
- **Désengagement maîtrisé** d’actifs non rentables.
- **Agilité tactique** et réallocation fluide des ressources.
- **Alignement dynamique** stratégie–action.

## Ce qu’il faut éviter

Pour ne pas avoir une organisation Projet Zombie :

- D’avoir un mode projet traditionnel
- De basculer en g**estion matricielle,** en ne choisissant pas le projet comme axe stratégique**.**
- **Objectifs flous, avec d**es projets qui ne s’arrêtent jamais, dérive d’une agilité sans fin.
- **Surcharge projets simultanés**

> Question : Êtes-vous prêt à sacrifier le nombre de projets pour garantir leur réussite ?
> 

<aside>
➿

**Mini-cas d’échec**

Sans OKR clairs, le projet SRE-C a continué 2 mois en dérive, faute de jalons définis.

</aside>

## La transformation vers l’archétype Projet

L’approche n’est pas nouvelle. Ici, la transformation consiste à basculer sur un mode de gestion agile de ces projets, ce que nous avons déjà fait avec les transformations agiles opérationnelles, sans aller jusqu’à l’approche produit.

- Remplacer les **projets traditionnels** par des **initiatives alignées sur les OKR stratégiques**.
- **Piloter** par l’impact, non par le livrable.
- Instaurer une **organisation permettant de** fluidifier la gestion des compétences.
- Structurer les projets autour d’**équipes d’impact**, avec une finalité mesurable et un horizon temporel limité.

## Et concrètement, demain…

> Question finale : Quel premier projet Agile4Project lancerez-vous la semaine prochaine ?
> 
- Choisissez les trois projets prioritaires, définissez leur OKR.
- Mettez en place de l’agilité au niveau équipe en choisissant la méthode la plus appropriée.
- Définissez les initiatives du projet qui font progresser les OKR

## Implémentations & Cadres d’inspiration

- Project Management Institute (PMI) propose une approche agile de la gestion de projet
- Disciplined Agile

---

# Synthèse de l’archétype Projet

![*Alignement stratégique du modèle organisationnel projet*](image%202.png)

*Alignement stratégique du modèle organisationnel projet*

### 👉 Et maintenant ? Zoom sur l’[anti-archétype Agile4Zombie](https://www.notion.so/Agile4Zombie-L-anti-arch-type-1db90eaf28ff802ebcecd01e11f22848?pvs=21) [](https://www.notion.so/Agile4Flow-Arch-type-Flux-13490eaf28ff809bac54ed5deaa8a257?pvs=21)!

---

# Annexes

## **Types d’organisation projet**

- **La structure pure projets** : Projet + [structure fonctionnelle](https://www.notion.so/Le-design-organisationnel-13e90eaf28ff8050add6fa0a5cf907c5?pvs=21)
    
    Les projets sont suffisamment de durée importante, de grande taille, et différents pour que l’organisation se découpe en autant de sous-ensembles quasi indépendants qu’il y a de projets. L’entreprise apparaît comme un conglomérat de projets. Le projet peut donc être considéré comme une unité à part entière.
    
    L’expérience et la connaissance se trouvent plus du côté de l’espace tactique des projets.
    
    *Exemple : BTP*
    
- **Les structures mixtes projets - fonctions** : Projet + [structure divisionnelle](https://www.notion.so/Le-design-organisationnel-13e90eaf28ff8050add6fa0a5cf907c5?pvs=21)
    
    Les projets sont plus courts, plus répétitifs, et moins différents les uns des autres.
    
    L’expérience et la connaissance se trouvent plus du côté de l’espace opérationnel des compétences / fonctions, plus stable.
    
    La source majeure d’économie d’échelle porte sur la standardisation des méthodes de gestion de projet.
    
    *Exemple : Une ESN est typiquement une organisation mixte projets - fonctions. La structure [Front - Back](https://www.notion.so/Le-mix-organisationnel-et-la-logique-dominante-15e90eaf28ff800cbef0fc08b66fb1f3?pvs=21) est également une implémentation de cette structure mixte.*
    
- La structure matricielle projets - métiers : Projet + [structure matricielle](https://www.notion.so/Le-design-organisationnel-13e90eaf28ff8050add6fa0a5cf907c5?pvs=21)
    
    Cette structure s’impose dès que la technologie développée dans les projets est complexe et évolutive. Les projets font appel aux mêmes compétences technologiques.
    
    *Exemple : CNES, sociétés d’ingénierie*
    

## Variantes de l’Archétype Projet

L’archétype **Projet** s’applique principalement dans **deux contextes stratégiques distincts**.

### [Zone d’exploration](https://www.notion.so/Design-organisationnel-de-la-zone-Exploration-13f90eaf28ff8012b2fcc13892e9048e?pvs=21)

**Objectif** : Rechercher un business model innovant ciblé.

![Modèle 4E](image%203.png)

Modèle 4E

![image.png](image%204.png)

Cycle de vie de l’actif : [Lancement](https://www.notion.so/Design-organisationnel-de-la-zone-Expansion-13f90eaf28ff8097b421cd0166ec489b?pvs=21)

![image.png](image%205.png)

Segment clients : [Novateurs et primo adoptants](https://www.notion.so/Explorer-et-comprendre-la-strat-gie-13690eaf28ff81d18468ca20936fdecc?pvs=21)

### [Zone d’exclusion](https://www.notion.so/Design-organisationnel-de-la-zone-Exploitation-13f90eaf28ff801888b5f5f63d62bfae?pvs=21)

![Modèle 4E](image%206.png)

Modèle 4E

**Objectif** : Désengager un actif pour libérer des ressources stratégiques.

![image.png](image%207.png)

Cycle de vie de l’actif : [Déclin](https://www.notion.so/Design-organisationnel-de-la-zone-Expansion-13f90eaf28ff8097b421cd0166ec489b?pvs=21)

![image.png](image%208.png)

Segment clients : [Retardataires](https://www.notion.so/Explorer-et-comprendre-la-strat-gie-13690eaf28ff81d18468ca20936fdecc?pvs=21)

### Zone d’exploitation

Enfin, on retrouve également le mode projet dans la zone d’exploitation pour les projets de transformation appliqués au cœur de métier.

## **Radar de l’Archétype Projet**

- Axe Réactif : Capacité à expérimenter rapidement des hypothèses.
- Axe Flexible : Capacité à ajuster les ressources en fonction des découvertes.
- Axe Adaptatif : Évolution rapide des objectifs stratégiques en phase d’exploration.
- Axe Proactif : Création d’un pipeline d’innovations aligné avec la stratégie globale.