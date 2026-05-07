import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  tags: string[];
};

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".mdx"));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    meta: {
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      slug: realSlug,
      tags: data.tags ?? [],
    } as PostMeta,
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug).meta)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}
