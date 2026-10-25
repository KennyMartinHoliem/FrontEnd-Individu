import Link from "next/link";

type PostCardProps = {
  id: number;
  title: string;
  excerpt: string;
};

export default function PostCard({ id, title, excerpt }: PostCardProps) {
  return (
    <article className="post-card">
      <h2>{title}</h2>
      <p>{excerpt}</p>
      <Link href={`/blog/${id}`} prefetch={false}>
        Baca selengkapnya
      </Link>
    </article>
  );
}
