import { Application } from 'express';
import passport from 'passport';
import { Prisma } from '../generated/prisma-client';;

import applyLocal from './local';

import createDebugger from 'debug';
const debug = createDebugger('gbp:auth');

interface UserRow {
  id: number
};

const applyPassport = (app: Application, prisma: Prisma) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user: UserRow, done) => {
    debug('serialize', user, '=>', user.id)
    done(null, user.id)
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await prisma.$graphql(`
        query {
          user(where: { id: $id }) {
            id
            email
          }
        }
      `, { id });
      debug('deserialize', id, '=>', user);
      done(null, user);
    } catch (err) {
      console.error('Could not deserialize user', err);
      done(err);
    }
  });

  applyLocal(prisma);
};

export default applyPassport;
