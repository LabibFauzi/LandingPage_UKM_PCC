import About from "./componets/about";
import Event from "./componets/event";
import Gallery from "./componets/gallery";
import Home from "./componets/home";

export default function Dashboard() {
  return (
    <main className="w-full overflow-x-hidden">
      <section id="home" className="p-10 lg:min-h-screen min-h-[300px] flex items-center">
        <Home />
      </section>

      <section id="about" className="bg-white p-10 lg:h-screen min-h-[700px]">
        <About />
      </section>

      <section id="event" className="p-10 lg:h-screen h-full">
        <Event />
      </section>

      <section id="galery" className="bg-white p-10 h-full ">
        <Gallery />
      </section>
    </main>
  );
}

