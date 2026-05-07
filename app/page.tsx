import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/post-card";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-gradient-to-br from-blue-100 via-white to-slate-100 p-8 md:p-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Social Listen In</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">Make better decisions by listening to the market.</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-700">Practical essays on social listening, customer research, AI coding workflows, and data quality for product and growth teams.</p>
        <Link href="/blog" className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">Read the blog</Link>
      </section>

      <section>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Latest posts</h2>
          <Link href="/blog" className="text-sm text-blue-700 hover:underline">View all</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => <PostCard key={post.slug} post={post} />)}
        </div>
      </section>
    </div>
  );
}
