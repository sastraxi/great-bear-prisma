import { Query } from './query/Query';
import { Subscription } from './subscription/Subscription';
import { auth } from './mutation/auth';
import { post } from './mutation/post';
import { Post } from './query/Post';

export default {
  Query,
  Mutation: {
    ...auth,
    ...post,
  },
  Subscription,
  Post,
}
