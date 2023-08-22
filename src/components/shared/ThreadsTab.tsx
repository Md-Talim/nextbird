import { fetchUserPosts } from '@/lib/actions/user.actions';
import ThreadCard from '../cards/ThreadCard';
import { fetchCommunityPosts } from '@/lib/actions/community.actions';

interface Props {
  currentUserId: string;
  accountId: string;
  accountType: string;
}

const ThreadsTab = async ({ currentUserId, accountId, accountType }: Props) => {
  let results: any;

  if (accountType === 'Community') {
    results = await fetchCommunityPosts(accountId);
  } else {
    results = await fetchUserPosts(accountId);
  }

  return (
    <section className="mt-8 space-y-6">
      {results.threads.map((thread: any) => (
        <ThreadCard
          key={thread._id}
          id={thread._id}
          currentUserId={currentUserId}
          parentId={thread.parentId}
          content={thread.text}
          author={
            accountType === 'User'
              ? { name: results.name, image: results.image, id: results.id }
              : {
                  name: thread.author.name,
                  image: thread.author.image,
                  id: thread.author.id,
                }
          }
          community={thread.community}
          createdAt={thread.createdAt}
          comments={thread.children}
        />
      ))}
    </section>
  );
};

export default ThreadsTab;
