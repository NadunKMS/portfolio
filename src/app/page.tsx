import Hero from "./components/Hero";
import Nav from "./Nav";

export default function Home() {
  return (
    <>
    <main className="h-screen bg-slate-50">

      <header className="w-full mx-auto">
        <Nav />
      </header>


      <section className="container mx-auto">
        <Hero />
      </section>

    </main>
    </>
  );
}
