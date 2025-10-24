# Application de Gestion des Utilisateurs - React + TypeScript

Une application web moderne permettant de gérer et visualiser une liste d'utilisateurs avec des fonctionnalités avancées de recherche, tri, pagination et personnalisation.

## 🚀 Technologies utilisées

- **React 19** avec TypeScript
- **React Router DOM** pour la navigation
- **Vite** comme bundler
- **CSS3** avec variables CSS personnalisées
- **localStorage** pour la persistance des données
- **Context API** pour la gestion d'état globale

## ✨ Fonctionnalités

- 📋 Affichage de la liste des utilisateurs depuis l'API
- 🔍 Recherche en temps réel (nom, prénom, email)
- 🔄 Tri par nom (A-Z) ou âge (croissant)
- 📄 Pagination (10 utilisateurs par page)
- 👤 Page de détail pour chaque utilisateur (style carte d'identité)
- ⭐ Système de favoris avec sauvegarde locale
- 🌓 Thème clair/sombre avec persistance
- ⚡ Optimisation des performances avec useMemo
- 🎨 Design moderne et responsive

## 📦 Installation et lancement

```bash
# Installation des dépendances
npm install

# Lancement en mode développement
npm run dev

# Build pour la production
npm run build
```

## 📁 Structure du projet

```
src/
├── component/
│   ├── UserCard/         # Carte utilisateur avec étoile favori
│   ├── UserList/         # Liste avec recherche, tri, pagination
│   ├── UserDetail/       # Page de détail style carte d'identité
│   ├── SearchBar/        # Barre de recherche réutilisable
│   ├── SortSelect/       # Menu déroulant de tri
│   ├── Pagination/       # Composant de pagination
│   └── ThemeToggle/      # Bouton de changement de thème
├── context/
│   └── ThemeContext.tsx  # Contexte pour le thème
├── hooks/
│   └── useFavorites.tsx  # Hook personnalisé pour les favoris
├── data/
│   └── dataApi.tsx       # Appels API
├── model/
│   └── User.tsx          # Interface TypeScript User
└── main.tsx              # Point d'entrée avec Providers
```

## 🛠️ Timeline de développement

### Phase 1 : Configuration et Base
1. ✅ Création du dossier `data` pour récupérer les données de l'API
2. ✅ Création de `dataAPI.tsx` pour faire l'appel à l'API et récupérer les données
3. ✅ Création du dossier `components` pour y mettre les composants React
4. ✅ Création du composant `Card.tsx` pour afficher les données récupérées de l'API
5. ✅ Création du composant `UserList.tsx` pour faire la liste des utilisateurs en utilisant le composant Card
6. ✅ Modification du fichier `App.tsx` pour y intégrer le composant UserList et afficher la liste des users

### Phase 2 : Navigation et Détails
7. ✅ Création de `UserDetail.tsx` pour avoir la page de détail des utilisateurs
8. ✅ Ajout de la logique de routing avec `react-router-dom`
9. ✅ Modification du fichier `main.tsx` pour y intégrer le BrowserRouter et faire le routing entre les pages
10. ✅ Styling des composants avec du CSS
11. ✅ Tests pour vérifier que tout fonctionne correctement

### Phase 3 : Fonctionnalités Avancées
12. ✅ Mise en place d'une search bar pour rechercher un utilisateur par nom, prénom ou email
13. ✅ Ajout de `SortSelect.tsx` pour trier les utilisateurs par ordre alphabétique croissant et par âge croissant
14. ✅ Mise en place de la pagination pour afficher un nombre limité d'utilisateurs par page
15. ✅ Tests pour vérifier que tout fonctionne correctement

### Phase 4 : Optimisation et Personnalisation
16. ✅ Implémentation de `useMemo` pour optimiser les performances de l'application (filtrage, tri, pagination)
17. ✅ Ajout d'un système de mode sombre et clair pour améliorer l'expérience utilisateur (enregistré dans localStorage)
18. ✅ Ajout d'un système de favoris pour pouvoir ajouter des utilisateurs en favoris et les stocker dans le local storage

## 🎨 Design

### Thème Sombre 🌙
- Fond : Océan profond (#0a1929)
- Accents : Turquoise/Cyan (#14b8a6 → #06b6d4)
- Style : Élégant, sobre, professionnel

### Thème Clair ☀️
- Fond : Beige raffiné (#fafaf9)
- Accents : Cyan profond (#0891b2)
- Style : Minimaliste, épuré, lumineux

## 🔧 Optimisations

- **useMemo** pour le filtrage des utilisateurs
- **useMemo** pour le tri des utilisateurs
- **useMemo** pour la pagination
- Réduction des re-renders inutiles
- Persistance des données avec localStorage

## 📝 API utilisée

L'application récupère les données depuis l'API publique : [DummyJSON Users API](https://dummyjson.com/users)

---

**Développé avec ❤️ en React + TypeScript**

