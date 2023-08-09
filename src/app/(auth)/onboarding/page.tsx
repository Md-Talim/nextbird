import AccountProfile from '@/components/forms/AccountProfile';
import { currentUser } from '@clerk/nextjs';

async function Page() {
  const user = await currentUser();

  const userInfo = {};

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || '',
    bio: userInfo?.bio || '',
    image: userInfo?.image || user?.imageUrl,
  };

  return (
    <main className="mx-auto max-w-3xl px-10 py-20 flex flex-col justify-start">
      <h1 className="head-text">Onboarding</h1>
      <p className="text-base-regular text-light-2 mt-2">
        Complete your profile now to use Threads.
      </p>

      <section className="mt-10 p-10 bg-dark-2">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
}

export default Page;
