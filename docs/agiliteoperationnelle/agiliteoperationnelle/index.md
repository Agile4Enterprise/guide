# L’agilité opérationnelle

Propriétaire: Laurent Morisseau

- Sommaire

<aside>
✨

**Objectif**

Donner à chaque équipe la capacité de **naviguer en continu** entre Exploration, Expansion, Exploitation et Exclusion, en adaptant sa méthode de travail à son contexte, via des boucles d’ajustement rapides et accompagné d’un **Agile Master agnostique**.

</aside>

<aside>
➿

Imaginez Élodie, Agile Master chez TechNova :

Mardi matin : un pic d’erreurs clients vient de tomber en prod alors qu’une nouvelle fonctionnalité IA est en test. Élodie doit :

1. **Prioriser** le hotfix sans bloquer l’expérimentation IA.
2. **Choisir** entre un patch rapide et un correctif robuste.
3. **Coordonner** R&D, Ops et Support pour minimiser l’impact.

Cet incident révèle tout l’enjeu de l’agilité opérationnelle : concilier **apprentissage rapide**, **fiabilité** et **fluidité organisationnelle**.

</aside>

# L’exécution dans un système vivant

L’agilité opérationnelle est **le moteur d’apprentissage** de l’organisation. Elle s’incarne par :

1. **Des équipes autonomes et responsables** capables de décider localement et de livrer de la valeur utile.
2. **Des [managers de proximité agile](https://www.notion.so/L-agilit-manag-riale-18b90eaf28ff8023814bdcc2e0240ac4?pvs=21)** garants de la cohérence entre les niveaux stratégique, tactique et opérationnel.
3. **Une [logique adaptative](https://www.notion.so/La-gouvernance-adaptative-op-rationnelle-13b90eaf28ff80da8cefeb9b98d6b1c9?pvs=21)**, où l’**ajustement dynamique** prime sur le respect figé d’un plan.

Contrairement à la stratégie (qui fixe le cap) et à la tactique (qui orchestre les initiatives), l’opérationnel porte la **concrétisation** : un modèle hybride entre tâches routinières et décisions locales, soutenu par des retours terrain permanents.

![La place de l’agilité Opérationnelle dans les niveaux de décisions](image.png)

La place de l’agilité Opérationnelle dans les niveaux de décisions

## Les tensions clés à piloter

Chaque équipe doit arbitrer cinq tensions majeures :

| Tension | Dilemme | Exemple | Arbitrage |
| --- | --- | --- | --- |
| **Autonomie ↔ Cohérence** | Décider localement vs aligner sur la stratégie | Les activités Run et Build utilisent des Kanban distincts | Tableau + stand-up commun |
| **Vitesse ↔ Fiabilité** | Livraisons rapides vs zéro régression | Hotfix « quick & dirty » vs correctif complet | Réserver 5–10 % de slack |
| **Standardisation ↔ Adaptation** | Un seul framework vs méthodes sur-mesure | Scrum pour le build vs Kanban pour le run | Socle de rituels obligatoires + rituels locaux facultatifs |
| **Innovation ↔ Disponibilité** | Expérimentation libre vs service stable | PoC IA en prod vs core opérationnel | Isolation par feature-flags / microservices |
| **Feedback ↔ Réunionite** | Multiples synchronisations vs trop de réunions | Démo, rétro, daily, planning, … | Stand-up mutualisé + ateliers ≤ 30 min |

**Pour chaque tension :**

1. **Identifier** la valeur apportée et le risque associé.
2. **Formaliser** l’arbitrage (OKR, SLA, backlog).
3. **Mesurer** l’impact… et recalibrer la boucle adaptative au sprint suivant.

<aside>
➿

La semaine d’Élodie !

- **Tension 1** : elle co-construit avec les équipes un Kanban commun.
- **Tension 2** : valide un hotfix rapide, le correctif est attribué à un autre équipier.
- **Tension 3** : Anime un forum mensuel pour capitaliser les retours.
- **Tension 4** : pilote l’activation de feature-flags pour le PoC IA.
- **Tension 5** : fusionne deux réunions à faible valeur en un flash-feedback hebdo.
</aside>

## Deux caractéristiques clés

### 1. **Autonomie locale**

L’agilité opérationnelle s’inscrit dans un principe d’**autonomie encadrée** :

- **Cadre clair** : OKR, backlog, règles du jeu partagés.
- **Marge d’initiative** : chaque équipe choisit sa méthode de travail en cohérence avec sa zone 4E.
- **Slack opérationnel** : 5–10 % de la capacité pour imprévus et innovation.

### 2. **Exécution = apprentissage**

- Chaque user-story est une **hypothèse** à valider.
- **Boucles courtes** : daily, sprint, revues tactiques.
- **Retour rapide** vers tactique & stratégie pour ajuster les priorités.

---

# Méthodes agiles contextualisées (Modèle 4E)

![Modèle 4E au niveau de l’équipe](image%201.png)

Modèle 4E au niveau de l’équipe

Les équipes peuvent évoluer dans **plusieurs zones simultanément.** On ne prescrit pas une méthode unique, on choisit la méthode adaptée au contexte :

| Zone 4E | Objectif | Méthodes privilégiées | Types d’équipe |
| --- | --- | --- | --- |
| **Exploration** | Expérimenter vite pour apprendre vite | [Lean Startup](https://www.notion.so/Lean-StartUp-18390eaf28ff80bc8928d9d864ef7628?pvs=21), [Shape-up](https://www.notion.so/Shape-Up-17e90eaf28ff80758f0bd20ba1545584?pvs=21), [FaST Agile](https://www.notion.so/Fast-Agile-18990eaf28ff805c9d61cea1a9896532?pvs=21) | Projet, équipe ad hoc |
| **Expansion** | Itérer rapidement pour développer son produit rapidement | Scrum, [FaST Agile](https://www.notion.so/Fast-Agile-18990eaf28ff805c9d61cea1a9896532?pvs=21), Extreme Programming | Équipe produit pluridisciplinaire : feature / impact team |
| **Exploitation** | Fluidifier bout en bout pour répondre aux flux de demandes | Craftman Software, [Kanban](https://www.notion.so/Kanban-17590eaf28ff8002ac08fead95b04e5a?pvs=21), DevOps | Équipe [stable](https://www.notion.so/quipe-stable-et-organisation-dynamique-un-second-paradoxe-de-l-agilit-14390eaf28ff80a39deffbe7db0f3b06?pvs=21) & propriétaire du processus,  profils spécialisés le long des activités de la [chaîne de valeur](https://www.notion.so/Concevoir-les-unit-s-tactiques-de-l-ext-rieur-vers-l-int-rieur-14390eaf28ff80108d31d366d1dc42af?pvs=21). |
| **Exclusion** | Gérer l’obsolescence et le désengagement efficacement | Projet | Équipe dédiée |

> L’agilité est **plurielle**, ambidextre et [localisée](https://www.notion.so/De-l-entreprise-ambidextre-l-quipe-ambidextre-14990eaf28ff80578356d0cc40c6c15a?pvs=21). L’ajustement devient une compétence.
> 

---

## Le rôle de l’[Agile Master](https://www.notion.so/R-les-de-la-transformation-agile-17b90eaf28ff804ea65eeb4b0d94c877?pvs=21)

Les **Agile Masters** sont responsables de l’agilité dans leur équipe. Ils doivent veiller à ce que les équipes adoptent les approches les plus pertinentes en fonction de leur contexte. Il est :

- **Agnostique** des méthodes : Scrum, Kanban, Lean…
- **Facilitateur** : guide le choix, l’ajustement et l’apprentissage en temps réel.
- **Intégrateur** : garantit la cohérence méthode ↔ zone ↔ objectifs.

<aside>
➿

Pour gérer le problème majeur HotFix + expérimentation, Élodie construit avec l’équipe un tableau à deux lignes, l’une pour le flux de supports et l’autre pour les tâches planifiables, avec des colonnes harmonisées. Chaque ligne correspond à une capacité de l’équipe dédiée.

Le stand-up commence par les urgences matérialisées dans le flux, puis se termine par la répartition des tâches de chacun.

</aside>

## Ce que produit un modèle rigide

- **Silos méthodologiques** : résistance accrue aux changements. Une groupe Scrum et un autre Kanban dans une même équipe.
- **Décalage réel/plan** : backlogs obsolètes et frustration terrain.
- **Épuisement** : cérémoniels lourds, peu de réel feedback.
- Inefficience : réunion de tout le collectif systématique.

---

## Mais aussi, limites et pièges

- **Rituels sans adhésion** : cadence usante sans bénéfice.
- **Biais quantitatif** : indicateurs numériques occultent la qualité.
- **Sur-réactivité** : ajustements frénétiques sans cap partagé.
- **Complexité cognitive** : choix trop nombreux tuent l’agilité.

---

## Et concrètement, lundi matin ?

En tant qu’équipe :

1. **Cartographiez** votre zone 4E : où passez-vous 80 % de votre temps ?
2. Avez-vous choisie la méthode adaptée à votre zone dominante ?
3. Essayez une autre méthode sur une des activités d’une autre zone pendant un mois
4. Ajustez au besoin.
5. Faites le bilan et ajoutez cette nouvelle méthode à votre boîte à outils d’équipe.

---

# 🔑 Points clés à retenir

- **Équipe ambidextre** : ajustez la méthode, pas l’inverse.
- **Exécuter = Tester** : chaque action est un feedback stratégique.
- **Méthode contextuelle** : un cadre unique, des pratiques multiples.
- **Gouvernance fluide** : backlogs et cadences intégrées.
- **Agile Master agnostique** : garant du « quoi » et du « pourquoi », jamais du « comment » imposé.

> L’agilité opérationnelle n’est pas un outil figé : c’est la capacité d’une équipe à choisir, ajuster et apprendre en temps réel.
> 

---