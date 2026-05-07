import { getAllPosts } from "@/lib/posts";

export async function GET() {
  const posts = getAllPosts();
  const site = "https://sociallistenin.com";

  const items = posts
    .map(
      (post) => `
    <item>
      <title>${post.title}</title>
      <link>${site}/blog/${post.slug}</link>
      <guid>${site}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${post.excerpt}</description>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Social Listen In</title>
    <link>${site}</link>
    <description>Social listening, customer research, AI coding, and market insights.</description>${items}
  </channel>
</rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml" } });
}
