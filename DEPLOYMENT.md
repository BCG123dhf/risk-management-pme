# Déploiement en Production

## Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Git
- Compte Vercel
- Compte Supabase

## Configuration Supabase

1. Créer un compte sur https://supabase.com
2. Créer un nouveau projet
3. Copier la connexion PostgreSQL
4. Ajouter à `.env.local`:

```bash
DATABASE_URL="postgresql://[user]:[password]@[host]:[port]/[database]"
```

## Migrations de base de données

```bash
# Appliquer les migrations
npx prisma migrate deploy

# Générer le client Prisma
npx prisma generate
```

## Déploiement Vercel

### Option 1 : Via CLI

```bash
npm install -g vercel
vercel
```

### Option 2 : Via GitHub

1. Push le code sur GitHub
2. Aller sur https://vercel.com
3. Connecter le dépôt GitHub
4. Ajouter les variables d'environnement
5. Déployer

## Variables d'environnement production

```bash
DATABASE_URL=<URL PostgreSQL>
NEXTAUTH_SECRET=<Clé secrète sécurisée>
NEXTAUTH_URL=https://votredomaine.com
NEXT_PUBLIC_APP_NAME=Risk Management PME
```

## Configuration DNS

1. Pointer votre domaine vers Vercel
2. Configurer le certificat SSL (automatique)

## Post-déploiement

1. Vérifier les logs : `vercel logs`
2. Tester les API
3. Configurer les sauvegardes PostgreSQL
4. Configurer le monitoring

## Rollback

```bash
vercel rollback
```

## Monitoring

- Sentry : https://sentry.io (erreurs)
- LogRocket : https://logrocket.com (logs utilisateurs)
- Vercel Analytics : intégré

## Support

Documentation Vercel : https://vercel.com/docs
Documentation Supabase : https://supabase.com/docs
