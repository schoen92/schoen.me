import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-xs text-slate-500">{post.date}</p>
      <h3 className="mt-2 text-xl font-semibold text-slate-900">
        <Link href={`/blog/${post.slug}`} className="hover:text-blue-600">{post.title}</Link>
      </h3>
      <p className="mt-2 text-slate-700">{post.excerpt}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">#{tag}</span>
        ))}
      </div>
    </article>
  );
}
