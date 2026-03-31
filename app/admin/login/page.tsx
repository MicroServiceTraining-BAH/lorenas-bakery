import { readData } from '@/lib/data';
import LoginForm from './_LoginForm';

export const metadata = { title: 'Admin Login — Lorena\'s Bakery CMS' };

export default function LoginPage() {
  const { users } = readData<{ users: unknown[] }>('users.json');
  return <LoginForm isFirstRun={users.length === 0} />;
}
