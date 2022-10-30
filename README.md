# Server Base - Proyecto NFTSTORE

## Envinroment setup

1) Create database with the name "nftstore"
2) Copy .env.example to .env and fill with database credentials.

To install dependencies, run
``` bash
pnpm install
```

3) Migrations:
``` bash
npx sequelize-cli db:migrate
```

4) Seeders:
``` bash
npx sequelize-cli db:seed:all
```