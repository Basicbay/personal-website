import About from "@/components/about";
import Experience from "@/components/experience";
import Navbar from "@/components/navbar";
import { ExperienceItem } from "@/components/config/experienceItem";
import Education from "@/components/education";
import { EducationItem } from "@/components/config/educationItem";
import Skill from "@/components/skill";
import Certificate from "@/components/certificate";
import Project from "@/components/project";
import { ProjectItem } from "@/components/config/projectItem";

export default function Home() {
  return (
    <main className="flex flex-col justify-between p-5 max-w-[1280px]">
      <Navbar />
      <About />
      <Experience items={ExperienceItem} />
      <Education items={EducationItem} />
      <Certificate />
      <Skill />
      <Project items={ProjectItem} />
    </main>
  );
}
