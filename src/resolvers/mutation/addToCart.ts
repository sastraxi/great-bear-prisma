import { Context } from '../../utils'

export interface CartParams {
  itemId: number
  quantity: number
}

export default (
  _parent: any,
  { itemId, quantity }: CartParams,
  ctx: Context,
) => {
  if (quantity < 1) throw new Error(
    "addToCart expects an integer >= 1",
  );

  const { sessionId, user, knex } = context;
  await ensureCart(context);

  return ctx.prisma.$graphql(`
  
  `, 
    cart
  })
    insert into app_public.cart_item
      (cart_id, item_id, quantity)
    select
      id, ?, ?
    from app_public.cart
      where cart.session_id = ?
      and cart.user_id = ?
    on conflict
      (cart_id, item_id)
    do update
      set quantity = cart_item.quantity + excluded.quantity
  `, [itemId, quantity, sessionId!, user!.id]).then(() => true);
  if (quantity < 1)
  return ctx.prisma.post({ id }).author()
};