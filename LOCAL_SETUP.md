# Guide de lancement local

## Prerequisites

- Node.js 18+
- npm ou yarn
- PostgreSQL 14+ (ou Docker)
- Git

## Installation rapide

### 1. Cloner le dépôt

```bash
git clone https://github.com/BCG123dhf/risk-management-pme.git
cd risk-management-pme
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configuration de la base de données

#### Option A : PostgreSQL local

```bash
# Créer une base de données
creatdb risk_management_pme

# Ajouter à .env.local
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/risk_management_pme"
```

#### Option B : Docker (recommandé)

```bash
# Démarrer PostgreSQL avec Docker
docker run --name postgres-dev \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=risk_management_pme \
  -p 5432:5432 \
  -d postgres:14

# Ajouter à .env.local
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/risk_management_pme"
```

#### Option C : Supabase (cloud)

1. Créer compte sur https://supabase.com
2. Créer un projet
3. Copier la connexion PostgreSQL
4. Ajouter à .env.local

### 4. Variables d'environnement

```bash
cp .env.example .env.local

# Éditer .env.local avec vos valeurs
```

### 5. Prisma setup

```bash
# Générer le client Prisma
npx prisma generate

# Créer les tables
npx prisma migrate dev --name init

# Optionnel : voir la base de données
npx prisma studio
```

### 6. Démarrer le serveur de développement

```bash
npm run dev
```

### 7. Ouvrir l'application

Naviguer vers http://localhost:3000

## Commandes utiles

```bash
# Démarrer le serveur
npm run dev

# Build production
npm run build

# Lancer la version de production
npm start

# Linter
npm run lint

# Prisma
npx prisma studio      # Vue graphique de la BD
npx prisma migrate dev # Créer migration
npx prisma generate    # Générer client
```

## Troubleshooting

### Erreur de connexion à PostgreSQL

```bash
# Vérifier que PostgreSQL est en cours d'exécution
sudo service postgresql status

# Ou avec Docker
docker ps
```

### Erreur Prisma "PrismaClientInitializationError"

```bash
# Régénérer le client
npx prisma generate

# Appliquer les migrations
npx prisma migrate dev
```

### Port 3000 déjà utilisé

```bash
# Utiliser un autre port
PORT=3001 npm run dev
```

## Structure du projet

```
.
├── app/                 # Pages et API routes
├── components/          # Composants réutilisables
├── lib/                 # Utilitaires
├── prisma/              # Schéma et migrations
├── public/              # Fichiers statiques
├── package.json         # Dépendances
└── README.md            # Documentation
```

## Prochaines étapes

1. Authentifier les utilisateurs
2. Connecter Prisma aux vraies données
3. Tester les formulaires CRUD
4. Ajouter les exports PDF/Excel
5. Déployer sur Vercel

## Support

Pour plus d'aide :
- Documentation Next.js : https://nextjs.org/docs
- Documentation Prisma : https://www.prisma.io/docs
- Documentation PostgreSQL : https://www.postgresql.org/docs
