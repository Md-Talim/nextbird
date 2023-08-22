import CommunityCard from '@/components/cards/CommunityCard';
import UserCard from '@/components/cards/UserCard';
import { fetchCommunities } from '@/lib/actions/community.actions';
import { fetchUser, fetchUsers } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo.onboarded) redirect('/onboarding');

  // fetch Search Results
  const results = await fetchCommunities({
    searchString: '',
    pageNumber: 1,
    pageSize: 20,
  });

  return (
    <section>
      <h1 className="head-text">Communities</h1>
      {/* Search Bar */}

      <div className="mt-14 w-full flex flex-wrap gap-8">
        {results.communities.map((community) => (
          <CommunityCard
            id={community.id}
            key={community.id}
            name={community.name}
            username={community.username}
            imgUrl={community.image}
            bio={community.bio}
            members={community.members}
          />
        ))}
      </div>
    </section>
  );
}

export default Page;
