#!/bin/bash

# Stop on error
set -e

# Variables
DIST_DIR="dist/antoinepell-site/browser"
REPO_URL="git@github.com:AntoinePell/AntoinePell.github.io.git"
CUSTOM_404_SRC="src/app/404.html"

# 1. Nettoyer l'ancien build
echo "🧹 Suppression de l'ancien dossier dist..."
rm -rf dist/

# 2. Build Angular
echo "🛠️ Build Angular en production avec base-href..."
ng build --configuration production --base-href="/antoinepell-site/"

# 3. Copier le 404.html personnalisé
echo "📄 Copie du 404.html personnalisé..."
cp "$CUSTOM_404_SRC" "$DIST_DIR/404.html"

# 4. Ajouter .nojekyll
echo "📦 Ajout du fichier .nojekyll..."
touch "$DIST_DIR/.nojekyll"

# 5. Préparer dossier de déploiement
echo "📁 Préparation du dossier temporaire de déploiement..."
mkdir -p gh-temp/antoinepell-site
cp -r $DIST_DIR/* gh-temp/antoinepell-site
cp -r $DIST_DIR/.* gh-temp/antoinepell-site 2>/dev/null || true  # inclure les fichiers cachés comme .nojekyll

# 6. Déploiement sur gh-pages
echo "🚀 Déploiement sur GitHub Pages..."
cd gh-temp
git init
git remote add origin "$REPO_URL"
git checkout -b gh-pages
git add .
git commit -m "Deploy in /antoinepell-site/"
git push -f origin gh-pages

# 7. Nettoyage
cd ..
rm -rf gh-temp

echo "✅ Déploiement terminé avec succès !"
