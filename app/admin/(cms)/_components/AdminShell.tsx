'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

type AdminShellProps = {
  user: { name: string; username: string; role: string };
  children: React.ReactNode;
};

const NAV = [
  { href: '/admin', label: 'Dashboard', exact: true, roles: ['admin', 'editor'] },
  { href: '/admin/menu', label: 'Menu Items', exact: false, roles: ['admin', 'editor'] },
  { href: '/admin/business', label: 'Business Info', exact: false, roles: ['admin', 'editor'] },
  { href: '/admin/home', label: 'Homepage', exact: false, roles: ['admin', 'editor'] },
  { href: '/admin/gallery', label: 'Gallery', exact: false, roles: ['admin', 'editor'] },
  { href: '/admin/users', label: 'Users', exact: false, roles: ['admin'] },
];

export default function AdminShell({ user, children }: AdminShellProps) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  const visibleNav = NAV.filter((item) => item.roles.includes(user.role));

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-56 bg-white border-r border-gray-200 flex flex-col flex-shrink-0">
        <div className="px-5 py-5 border-b border-gray-100">
          <div className="font-serif text-base font-bold text-stone-900 leading-tight">
            Lorena&apos;s Bakery
          </div>
          <div className="text-xs text-gray-400 mt-0.5">Content Manager</div>
        </div>

        <nav className="flex-1 p-3 space-y-0.5" aria-label="CMS navigation">
          {visibleNav.map(({ href, label, exact }) => {
            const isActive = exact
              ? pathname === href
              : pathname.startsWith(href) && href !== '/admin';
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? 'bg-stone-100 text-stone-900 font-medium'
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center text-xs font-bold text-stone-600 flex-shrink-0">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium text-gray-900 truncate leading-tight">{user.name}</div>
              <div className="text-xs text-gray-400 truncate">{user.role}</div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="text-xs text-gray-400 hover:text-red-500 transition-colors"
          >
            Sign out →
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}
