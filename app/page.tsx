import { Dashboard_Section } from "./constant";

export default function Dashboard() {
  return (
    <main className="w-full overflow-x-hidden">
      {Dashboard_Section.map((section) => (
        <div key={section.id} className="relative">
          <div id={section.id} className={section.anchorClass} />
          <section className={section.containerClass}>
            {section.component}
          </section>
        </div>
      ))}
    </main>
  );
}
