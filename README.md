### Prisma Notes

* dev says to add composite indices ourselves, so we'll add knex / pgsh and have migrations:
  https://www.prisma.io/forum/t/composite-index/4133/2
* https://github.com/prisma/prisma/issues/28
* one-time schema migrations are super interesting:
  https://www.prisma.io/docs/1.27/datamodel-and-migrations/datamodel-POSTGRES-knum/#renaming-a-type-or-field
* https://www.prisma.io/tutorials/a-guide-to-common-resolver-patterns-ct08/#scenario:-implementing-relations-with-prisma-client

* once we have our `datamodel.prisma` correct, run `dotenv yarn prisma deploy --new`
* nice warnings for `@id` and `@createdAt` / `@updatedAt`
* community for prisma 1 seems more or less dead, but prisma 2 is far from complete

### TODO

* [X] add auth (passport)
* [ ] re-write database using knex migrations for optimal structure
* [ ] see if we can write `*cart` methods with built-in prisma library 
* [ ] add knex to context
* [ ] figure out how to proxy queries
* [ ] try proxying a subscription (client mode)

### Uniplemented

* login
* signup
* logout
* user sessions each have a unique "current cart"
* can add items to their cart
* can manipulate their cart
* can reset their cart
* can check out, providing a payment card and geo-location
* can track their order in real time
* can view a list of their past orders

### How to get started

```bash
cp .env .env.example # and fill in
yarn
service postgresql start
docker-compose up -d
dotenv yarn prisma deploy
```

Then go to http://localhost:4466
