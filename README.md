# The prisma backend will not be written.

Unfortunately, Prisma does not help you with security in any idiomatic fashion. As a result, I've decided not to implement. A few random notes I took along the way:

* dev says to add composite indices ourselves, so we'll have to add knex / pgsh and have migrations:
  * https://www.prisma.io/forum/t/composite-index/4133/2
* https://github.com/prisma/prisma/issues/28
* one-time schema migrations are super interesting
  * https://www.prisma.io/docs/1.27/datamodel-and-migrations/datamodel-POSTGRES-knum/#renaming-a-type-or-field
* https://www.prisma.io/tutorials/a-guide-to-common-resolver-patterns-ct08/#scenario:-implementing-relations-with-prisma-client
* once we have our `datamodel.prisma` correct, run `dotenv yarn prisma deploy --new`
* nice warnings for `@id` and `@createdAt` / `@updatedAt`
* no help with security: https://stackoverflow.com/questions/53683009/row-level-security-using-prisma-and-postgres
  * spoiler alert for the presentation (I answered)

---
---
---

### Prisma Notes


### TODO
* add knex to context
* add auth (passport)
* try proxying a subscription (client mode)

### Implemented

* the start of the addToCart mutation

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
