# Agile4Project : Archétype Projet (agile)



✨ **Objectif** L’**archétype Projet** structure des **initiatives stratégiques temporaires**, orientées vers l’**exploration**, la **transformation** ou le **désengagement**, avec des **objectifs clairs**, une **durée limitée** et un **focus sur l’impact**.

➿ **TechNova SRE (2024-2025)** Pour explorer la plateforme SRE, TechNova a lancé un programme de projets communs avec un partenaire, dans le cadre d’une alliance stratégique.

🧑‍🎓 **Lexique rapide** **Projet** : effort temporaire, budgété, avec objectif et échéance. **Backlog Projet** : file d’attente des tâches propre à chaque projet. **SCRIP** : Structure, Capacités, Reconnaissance, Individus, Processus (Projet). **OKR stratégiques vs OKR tactiques** : objectifs programme / initiatives stratégiques vs objectifs de projet.

%2013490eaf28ff8030a8aeecf9206d94ea/image.png)

Archétype Projet dans le modèle Agile4X des 4 archétypes agile (et de son anti archétype)

# Positionnement

**Stratégie d’innovation** ciblée **:** nouveaux business models dans des niches émergentes, reposant sur une **différenciation forte** (plutôt que sur l’efficience ou la scalabilité).

**Logique dominante :** organisation qui se structure autour de ses projets.

**Exemples d’organisations**

- Grandes entreprises : R&D, plateformes de projets**,** portefeuilles de startups internes.
- Entreprises en transformation.

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

%2013490eaf28ff8030a8aeecf9206d94ea/image%201.png)

Structure type d’une organisation Projet

💡 **Unité stratégique** C’est le **programme** d’initiatives stratégiques (en exploration ou en désengagement).

Le design de l’archétype Projet repose sur une **organisation fonctionnelle par pool de compétences** avec une zone tactique d’intégration organisée par projet. On trouve différents types d’organisations projets :

- **Structure pure projets** : Projet + structure fonctionnelle - exemple BTP
- **Structure mixte projets - fonctions** : Projet + structure divisionnelle - exemple ESN
- **Structure matricielle projets - métiers** : Projet + structure matricielle - exemple sociétés d’ingénierie

💡 **Unité tactique** C’est l’espace d’intégration des projets, agile, temporaire et reconfigurable, piloté par l’impact. C’est une structure opérationnelle à durée déterminée.

**Couplage faible entre projets**

Chaque projet est autonome, avec des objectifs et un budget définis.

**Dépendance faible entre projets**

**L’interdépendance est liée aux services partagés mutualisés**, tels que des compétences rares ne pouvant être intégrées à l’équipe projet (architecte, sécurité, …).

**Couplage fort au sein d’un projet, autour** du Backlog projet et des OKR pour la fixation des objectifs : OKR stratégique pour le programme et OKR tactique pour le projet.

**L’organisation duale**

La structure est la ligne hiérarchique, les projets se font là où se font les affaires.

- **Structure formelle**  = stable par pôles de compétences
- **Réseau dynamique**  = équipes projet. Ce système informel peut évoluer au gré des OKR tactiques.

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

**Coordination verticale** repose sur des **rôles d’intégrateurs** : ex. chefs de projet agiles, responsables de transformation.

**Coordination horizontale** est gérée par du management réticulaire. Elle est assurée par un **réseau informel** et des **cadences de synchronisation régulières**.

**Cadence de changement**

- Revue opérationnelle quotidienne
- Revue tactique hebdomadaire ou bi mensuelle des initiatives pour ajuster les priorités.
- Revue **trimestrielle** pour évaluer les **OKR tactiques** et piloter l’atteinte des objectifs.

**Méthodes**

| **Méthode** | **Idéal pour…** | **Pourquoi ?** |
| --- | --- | --- |
| **DSDM (Dynamic Systems Development Method)** | Projets structurés, compliance, IT | Gestion hybride avec flexibilité sur le périmètre fonctionnel |
| Shape -Up **** | Petits projets, équipes autonomes | Approche fluide sans Backlog, engagement sur 6 semaines |
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

➿ **Mini-cas d’échec** Sans OKR clairs, le projet SRE-C a continué 2 mois en dérive, faute de jalons définis.

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

%2013490eaf28ff8030a8aeecf9206d94ea/image%202.png)

*Alignement stratégique du modèle organisationnel projet*

###