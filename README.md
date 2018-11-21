# vuelize

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Comandos do sequelize-cli

`node_modules/.bin/sequelize`

```
db:migrate                        Run pending migrations
db:migrate:schema:timestamps:add  Update migration table to have timestamps
db:migrate:status                 List the status of all migrations
db:migrate:undo                   Reverts a migration
db:migrate:undo:all               Revert all migrations ran
db:seed                           Run specified seeder
db:seed:undo                      Deletes data from the database
db:seed:all                       Run every seeder
db:seed:undo:all                  Deletes data from the database
db:create                         Create database specified by configuration
db:drop                           Drop database specified by configuration
init                              Initializes project
init:config                       Initializes configuration
init:migrations                   Initializes migrations
init:models                       Initializes models
init:seeders                      Initializes seeders
migration:generate                Generates a new migration file       [aliases: migration:create]
model:generate                    Generates a model and its migration  [aliases: model:create]
seed:generate                     Generates a new seed file            [aliases: seed:create]

```
