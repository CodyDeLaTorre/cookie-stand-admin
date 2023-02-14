import Head from 'next/head';
import { useAuth } from '../contexts/auth';
import CookieStandAdmin from '@/components/CookieStandAdmin';
import LoginForm from '@/components/login';

export default function Home() {

  const { user, login, logout } = useAuth();

  return (
    <div className="p-4">
      <Head>
          <title>Cookie Stand Admin</title>
      </Head>

      {user ?
        <CookieStandAdmin className="font-serif" login={login} />
        :
        <LoginForm onLogin={login} />
      }

    </div>
  );
}
