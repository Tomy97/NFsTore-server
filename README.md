# Server Base - Proyecto NFTSTORE

## Envinroment setup

1. Create database with the name "nftstore"
2. Copy .env.example to .env and fill with database credentials.
3. To access the jwt in the .env you have to generate a key in https://randomkeygen.com/ and past in the .env "jwt_secret"

## Installation

To install dependencies, run

```bash
pnpm install
```

4. Migrations:

```bash
npx sequelize-cli db:migrate
```

5. Seeders:

```bash
npx sequelize-cli db:seed:all
```

6. Eslint and Prettier airbnb:

```bash
 https://gist.github.com/bradtraversy/aab26d1e8983d9f8d79be1a9ca894ab4

 document rules: https://github.com/airbnb/javascript
```
