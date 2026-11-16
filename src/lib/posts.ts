import { mediumUsername } from '@/config';
import { fetchFeed, sortPosts, type Post } from './medium';

let pending: Promise<Post[]> | undefined;

/**
 * All Medium posts from the RSS feed, newest first. Fetched once per build and shared by every page.
 * Never throws: if Medium is unreachable, an empty list is returned.
 */
export function getPosts(): Promise<Post[]> {
  pending ??= (async () => {
    try {
      const posts = sortPosts(await fetchFeed(mediumUsername));
      console.log(`[medium] fetched ${posts.length} posts for @${mediumUsername}`);
      return posts;
    } catch (err) {
      console.warn(`[medium] fetch failed (${(err as Error).message}); no posts will be shown`);
      return [];
    }
  })();
  return pending;
}
