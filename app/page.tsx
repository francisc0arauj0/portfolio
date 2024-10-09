import Navbar from "@/components/navbar";
import About from "@/components/cards/about";
import Skills from "@/components/cards/skills";
import Projects from "@/components/cards/projects";
import Construction from "@/components/cards/contruction";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Construction/>
    </div>
  );
}
