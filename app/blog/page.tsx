import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { PostCard } from "@/components/post-card";

export const metadata: Metadata = {
  title: "Blog",
  description: "All posts from Social Listen In.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section>
      <h1 className="text-4xl font-bold text-slate-900">Blog</h1>
      <p className="mt-3 text-slate-700">Insights on social listening, research systems, and AI-enabled execution.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {posts.map((post) => <PostCard key={post.slug} post={post} />)}
      </div>
    </section>
  );
}
