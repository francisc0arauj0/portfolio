import Navbar from "@/components/navbar";
import About from "@/components/cards/about";
import Skills from "@/components/cards/skills";
import Projects from "@/components/cards/projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}
