import { posts } from "@/lib/posts"; 
import PostCard from "@/components/PostCard";

export default function BlogPage() {
  return (
    <section className="page container">
      <h1>Blog</h1>
      <p>Blog PT Maju Bersama</p>

      <div className="post-list">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  );
}
