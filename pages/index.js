import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { toggleMenuOpen } from '../redux/uiSlice';

export default function Page() {
  const [session, loading] = useSession();
  const dispatch = useDispatch();

  const toggleMenuOpenAction = () => dispatch(toggleMenuOpen());

  if (loading) {
    return <h1>Loading ...</h1>;
  }
  console.log('SESSION', session);
  return (
    <>
      <h1>Welcome friends !!</h1>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={signOut}>Sign out</button>
        </>
      )}
      <Link href="/ssr">
        <a>SSR Page</a>
      </Link>
      <button onClick={toggleMenuOpenAction}>ToggleMenu</button>
    </>
  );
}
