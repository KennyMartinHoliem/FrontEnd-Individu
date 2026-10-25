import { notFound } from "next/navigation"; 
import Link from "next/link";
import { getPostById } from "@/lib/posts";

type BlogDetailProps = {
  params: Promise<{ id: string }>;
};

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { id } = await params;

  const post = getPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <article className="page container">
      <Link href="/blog" className="back-link" prefetch={false}>
        ← Kembali ke Blog
      </Link>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
