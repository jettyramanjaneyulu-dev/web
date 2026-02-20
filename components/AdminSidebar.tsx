import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-black text-white p-6">
      <h2 className="text-xl font-bold mb-8">Admin Panel</h2>

      <nav className="space-y-4">
        <Link href="/admin/dashboard" className="block hover:text-gray-300">
          Dashboard
        </Link>

        <Link href="/admin/blogs" className="block hover:text-gray-300">
          Blogs
        </Link>

        {/* <form action="/api/auth/logout" method="POST">
          <button className="text-red-400 hover:text-red-300 mt-10">
            Logout
          </button>
        </form> */}
      </nav>
    </aside>
  );
}
