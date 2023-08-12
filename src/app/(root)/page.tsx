import ThreadCard from '@/components/cards/ThreadCard';
import { fetchPosts } from '@/lib/actions/thread.actions';
import { currentUser } from '@clerk/nextjs';

export default async function Home() {
  const results = await fetchPosts(1, 30);
  const user = await currentUser();

  return (
    <div>
      <h1 className="head-text">Home</h1>

      <section className="flex flex-col mt-10 gap-10">
        {results.posts.length === 0 ? (
          <p className="no-result">No posts found.</p>
        ) : (
          <>
            {results.posts.map((post) => (
              <ThreadCard
                key={post._id}
                id={post._id}
                currentUserId={user?.id || ''}
                parentId={post.parentId}
                content={post.text}
                author={post.author}
                commuity={post.commuity}
                createdAt={post.createdAt}
                comments={post.children}
              />
            ))}
          </>
        )}
      </section>
    </div>
  );
}
