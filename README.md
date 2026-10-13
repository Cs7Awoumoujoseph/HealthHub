# HealthHub — Interface de gestion des remboursements dans les consultations de santé

HealthHub est une application web front-end construite avec **React** et **Vite**. Le projet présente une interface de type espace assuré, organisée autour des remboursements, du suivi des demandes, des contrats, des documents médicaux et du compte utilisateur.

> **État du projet :** le dépôt consulté contient l'interface front-end. Les données de remboursement visibles dans le code sont des exemples codés en dur. Aucun service back-end ou stockage persistant n'a été identifié dans les fichiers examinés.

## Fonctionnalités de l'interface

Les composants présents dans le projet couvrent les sections suivantes :

- **Remboursements** : présentation de demandes, montants, dates et statuts.
- **Suivi des remboursements** : espace de suivi des demandes.
- **Contrats** : section dédiée aux informations contractuelles.
- **Documents médicaux** : espace consacré aux documents médicaux.
- **Mon compte** : section de compte utilisateur.
- **Navigation** : en-tête et barre latérale permettant de naviguer entre les sections.

Le composant principal `src/App.jsx` gère l'onglet actif à l'aide de l'état React.

## Technologies

- [React 19](https://react.dev/) — composants et interface utilisateur.
- [Vite 6](https://vite.dev/) — serveur de développement et outil de build.
- **JavaScript (ES modules) et JSX**.
- **CSS** — styles de l'interface dans `src/index.css`.
- **ESLint** — vérification statique du code.

## Prérequis

- Node.js et npm installés.
- Git pour cloner le dépôt.

## Installation et démarrage

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/Cs7Awoumoujoseph/HealthHub.git
   cd HealthHub
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Lancez le serveur de développement :

   ```bash
   npm run dev
   ```

4. Ouvrez dans votre navigateur l'adresse locale indiquée par Vite dans le terminal.

## Commandes disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur de développement Vite. |
| `npm run build` | Génère la version de production dans `dist/`. |
| `npm run preview` | Prévisualise localement la version de production. |
| `npm run lint` | Exécute ESLint sur le projet. |

## Structure du projet

```text
HealthHub/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── eslint.config.js
├── public/
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css
    ├── assets/
    └── Composants/
        ├── Header.jsx
        ├── Sidebar.jsx
        ├── Remboursements.jsx
        ├── Contrat.jsx
        ├── SuivisRemb.jsx
        ├── Documentmedicaux.jsx
        ├── MonCompte.jsx
        └── SousComposant/
```

## Architecture

- `src/main.jsx` initialise React et monte le composant principal dans l'élément `#root`.
- `src/App.jsx` assemble l'en-tête, la navigation et les vues.
- `src/Composants/` regroupe les composants d'interface.
- `src/index.css` contient les styles globaux.

## Améliorations recommandées

- Connecter l'interface à une API sécurisée pour charger les contrats, remboursements et documents réels.
- Remplacer les données d'exemple codées en dur par des données provenant de la source appropriée.
- Ajouter les états de chargement, les messages d'erreur et les états vides.
- Mettre en place l'authentification et le contrôle d'accès avant d'exposer des informations personnelles.
- Vérifier l'accessibilité et l'affichage sur mobile.
- Ajouter des tests de composants et des vérifications automatisées de l’accessibilité.

## Sécurité et confidentialité

Les données de santé et les informations d'assurance sont sensibles. Avant tout usage réel, il faut prévoir une API sécurisée, une authentification appropriée, des autorisations côté serveur et une gestion conforme des données personnelles. Ne stockez pas de données médicales réelles dans le dépôt.

## Dépôt

[Cs7Awoumoujoseph/HealthHub sur GitHub](https://github.com/Cs7Awoumoujoseph/HealthHub)
