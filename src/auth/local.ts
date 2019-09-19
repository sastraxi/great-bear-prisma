import passport from 'passport';
import bcrypt from 'bcrypt';
import _ from 'lodash';
import { Prisma } from '../generated/prisma-client';

import createDebugger from 'debug';
const debug = createDebugger('gbpg:auth');

import { Strategy as LocalStrategy } from 'passport-local';

const ERR_USER_OR_PASSWORD_MISMATCH = 'user-or-password-mismatch';

const userFragment = `
  fragment UserAuthInfo on User {
    id
    email
    hashPassword
  }
`;

type UserAuthInfo = {
  id: number
  email: string
  hashPassword: string
};

export default (prisma: Prisma) =>
  passport.use(new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (email, password, done) => {      
      const user = await prisma.user({
        email: email.trim(), // FIXME: how can we do case-insensitive email matching?
      }).$fragment(userFragment) as UserAuthInfo;

      if (!user) return done(ERR_USER_OR_PASSWORD_MISMATCH);
      if (!user.hashPassword) return done(ERR_USER_OR_PASSWORD_MISMATCH);
      
      const passwordMatches = await bcrypt.compare(password, user.hashPassword);
      if (!passwordMatches) return done(ERR_USER_OR_PASSWORD_MISMATCH);

      debug('auth.local', user);

      return done(null, _.pick(user, ['id', 'email']));
    },
  ));
