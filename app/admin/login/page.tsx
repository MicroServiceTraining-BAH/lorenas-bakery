import { readData } from '@/lib/data';
import LoginForm from './_LoginForm';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Admin Login — Lorena\'s Bakery CMS' };

export default async function LoginPage() {
  const { users } = await readData<{ users: unknown[] }>('users');
  return <LoginForm isFirstRun={users.length === 0} />;
}
