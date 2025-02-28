# TMDB React App

Une application web React qui interagit avec l’API The Movie Database (TMDB) pour rechercher des films, gérer les favoris, noter et commenter.

## Sommaire

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [Technologies utilisées](#technologies-utilisées)
- [Améliorations possibles](#améliorations-possibles)

## Aperçu

Cette application React affiche la liste des films populaires, permet de rechercher des films/acteurs/séries, et d’afficher les détails d’un film (son affiche, son casting, sa note, etc.).  
Vous pouvez :

- Mettre un film en favori (stockage local).
- Attribuer une note (système d’étoiles).

## Fonctionnalités

- **Accueil** – Liste des films tendance ou populaires.
- **Barre de recherche** – Recherche par titre, acteurs, séries, réalisateurs.
- **Catégories (Genres)** – Filtrer des films par genre.
- **Détails d’un film** – Synopsis, casting, moyenne TMDB, etc.
- **Gestion des favoris** – Ajouter ou retirer un film de vos favoris (localStorage).
- **Notation** – Système d’étoiles, stocké localement (localStorage).

## Prérequis

* Node.js
* npm ou Yarn
* Une clé API TMDB (Gratuite via themoviedb.org)

## Installation

1. Cloner le dépot :
```bash
git clone https://github.com/USER-NAME/my-react-tmdb-app.git
cd my-react-tmdb-app
```
2. Installer les dépendances : 

```bash
npm install
# ou yarn si vous préférez Yarn
```

3.  Créer un fichier .env à la racine du projet

```bash
REACT_APP_TMDB_API_KEY=VOTRE_CLE_TMDB
```

## Configuration

* Clé TMDB : Placez la clé dans le .env

## Utilisation

1. Démarrer l'application :

```bash
npm start
```

2. Ouvrir le navigateur à l'adresse suivante

```bash
http://localhost:3000
```

## Technologies utilisées

- React (Create React App)
- React Router
- Axios pour les appels HTTP
- TMDB API pour la base de données de films
- CSS pour le style visuel de l'application

## Améliorations possibles 

- Gérer la pagination TMDB (infinite scroll ou pagination simple)
- Ajouter un filtrage avancé (Recherche par note, date, ...)
- Ajouter un switch Light / Dark Mode
- Ajouter des tests unitaires (Jest / React Testing Library).
