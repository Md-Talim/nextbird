import UserCard from '@/components/cards/UserCard';
import { fetchUser, fetchUsers } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo.onboarded) redirect('/onboarding');

  // fetch Search Results
  const results = await fetchUsers({
    userId: user.id,
    searchString: '',
    pageNumber: 1,
    pageSize: 20,
  });

  return (
    <section>
      <h1 className="head-text">Search</h1>
      {/* Search Bar */}

      <div className="mt-14 flex flex-col gap-8">
        {results.users.map((user) => (
          <UserCard
            key={user.id}
            userId={user.id}
            name={user.name}
            username={user.username}
            imageUrl={user.image}
            personType="User"
          />
        ))}
      </div>
    </section>
  );
}

export default Page;
