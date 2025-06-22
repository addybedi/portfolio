import { Github, Linkedin, Mail } from "lucide-react";

export const Home = () => {
  return (
    <div className="flex flex-col xl:flex-row">
      <img src="/MERN.png" className="w-lg h-auto object-contain" />
      <section className="flex flex-col justify-center items-start mt-2 xl:mt-0 xl:ml-4 h-full">
        <div className="">
          <h1 className="font-bold text-lg xl:text-2xl bg-gradient-to-r from-amber-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Hi, I'm Aditya Bedi
          </h1>
          <div className="mt-2 gap-6 flex">
            <a
              href="https://www.linkedin.com/in/aditya-bedi-362539143"
              target="_blank"
            >
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/addybedi" target="_blank">
              <Github size={24} />
            </a>
            <a href="mailto:adityabedi33@gmail.com">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <h2 className=" text-amber-600 xl:text-xl font-bold mb-3 mt-2">
          Senior Software Developer • Frontend Developer • MERN Stack
        </h2>
        <p className="leading-relaxed mb-4 text-stone-300">
          I'm a{" "}
          <strong>collaborative and detail-oriented Frontend Developer</strong>{" "}
          with a strong foundation in the <strong>MERN stack</strong>,
          specializing in building responsive, scalable, and accessible web
          applications. I’ve delivered impactful interfaces for clients like{" "}
          <strong>Manulife, CapitalMind, Knotch</strong>, and{" "}
          <strong>NetApp</strong>.
        </p>

        <p className="leading-relaxed mb-4 text-stone-300">
          My frontend expertise includes{" "}
          <strong>React.js, Next.js, and TypeScript</strong>, along with modern
          styling tools such as <strong>Tailwind CSS, Chakra UI, MUI</strong>,
          and <strong>styled-components</strong>. I also translate designs from
          Figma into pixel-perfect UI and collaborate across teams to ensure
          visual consistency.
        </p>

        <p className="leading-relaxed mb-4 text-stone-300">
          At <strong>Velotio Technologies</strong>, I’ve built modular component
          libraries, integrated APIs, and written robust tests using{" "}
          <strong>Jest</strong>, <strong>React Testing Library</strong>, and{" "}
          <strong>Mocha</strong>. I use <strong>Redux</strong> and{" "}
          <strong>React Hook Form</strong> for efficient state and form
          management.
        </p>

        <p className="leading-relaxed text-stone-300">
          I take pride in delivering <strong>clean, performant code</strong> and
          creating <strong>exceptional user experiences</strong>. I thrive in
          fast-moving agile teams and love solving real-world problems through
          UI craftsmanship.
        </p>
        <p className="leading-relaxed mt-4 italic text-stone-300">
          If you're into <strong>React</strong>, clean code, and the occasional
          pun, let's connect — we might just{" "}
          <span className="text-amber-500">hook</span> up the perfect component!
        </p>
      </section>
    </div>
  );
};
