import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostSlugs } from "@/lib/posts";

const postModules: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  "social-listening-stack": () => import("@/content/posts/social-listening-stack.mdx"),
  "voice-of-customer-taxonomy": () => import("@/content/posts/voice-of-customer-taxonomy.mdx"),
  "ai-coding-feedback-loops": () => import("@/content/posts/ai-coding-feedback-loops.mdx"),
  "market-insight-signals": () => import("@/content/posts/market-insight-signals.mdx"),
  "data-quality-checklist": () => import("@/content/posts/data-quality-checklist.mdx"),
};

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug: slug.replace(/\.mdx$/, "") }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getAllPosts().find((p) => p.slug === params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getAllPosts().find((p) => p.slug === params.slug);
  const loader = postModules[params.slug];
  if (!post || !loader) notFound();

  const { default: PostBody } = await loader();

  return (
    <article className="mx-auto max-w-3xl">
      <p className="text-sm text-slate-500">{post.date}</p>
      <h1 className="mt-2 text-4xl font-bold text-slate-900">{post.title}</h1>
      <p className="mt-3 text-slate-600">{post.excerpt}</p>
      <div className="prose prose-slate mt-10 max-w-none">
        <PostBody />
      </div>
    </article>
  );
}
