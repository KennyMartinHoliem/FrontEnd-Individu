import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="hero container">
      <h1>404 - Halaman tidak ditemukan</h1>
      <p>Alamat yang kamu buka tidak ada atau sudah dipindahkan.</p>
      <div className="hero-actions">
        <Button href="/">Kembali ke Home</Button>
      </div>
    </section>
  );
}
