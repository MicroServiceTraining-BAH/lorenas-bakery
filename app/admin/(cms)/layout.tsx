import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { getSession, getUserById } from '@/lib/auth';
import AdminShell from './_components/AdminShell';

export default async function CmsLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const token = cookieStore.get('cms-session')?.value;

  if (!token) redirect('/admin/login');

  const session = await getSession(token);
  if (!session) redirect('/admin/login');

  const user = await getUserById(session.userId);
  if (!user) redirect('/admin/login');

  return (
    <AdminShell user={{ name: user.name, username: user.username, role: user.role }}>
      {children}
    </AdminShell>
  );
}
