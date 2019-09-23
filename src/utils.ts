import * as jwt from 'jsonwebtoken'
import { Prisma } from './generated/prisma-client'

export interface Context {
  prisma: Prisma
  request: any
}

export function getUserId(ctx: Context) {
  const Authorization = ctx.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, process.env.APP_SECRET) as { userId: string }
    return userId
  }

  throw new AuthError()
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}

const ensureCart = ({ prisma, user, sessionId }: Context) =>
  prisma.upsertCart({
    where: {
      
    }
  })
  knex.raw(` 
    insert into app_public."cart"
      (session_id, user_id)
    values
      (?, ?)
    on conflict
    do nothing
  `, [sessionId, user!.id]);

export default ensureCart;