import Button from "@/components/Button";

export default function HomePage() {
  return (
    <section className="hero container">
      <h1>Selamat Datang di PT Maju Bersama</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris.
      </p>

      <div className="hero-actions">
        <Button href="/about">Tentang Kami</Button>
        <Button href="/blog" variant="outline">
          Baca Blog
        </Button>
      </div>
    </section>
  );
}
