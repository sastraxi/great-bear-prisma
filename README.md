### Prisma Notes

* dev says to add composite indices ourselves, so we'll add knex / pgsh and have migrations:
  https://www.prisma.io/forum/t/composite-index/4133/2
* https://github.com/prisma/prisma/issues/28
* one-time schema migrations are super interesting:
  https://www.prisma.io/docs/1.27/datamodel-and-migrations/datamodel-POSTGRES-knum/#renaming-a-type-or-field
* https://www.prisma.io/tutorials/a-guide-to-common-resolver-patterns-ct08/#scenario:-implementing-relations-with-prisma-client

### TODO
* https://www.prisma.io/docs/prisma-server/deployment-environments/docker-rty1/
* copy over "dockerhost" from hasura
* put things in .env, set up pgsh
* test out locally with docker (dev mode)
* try proxying a subscription (client mode)


### Implemented


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
