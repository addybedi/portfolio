import { Mail, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="px-6 md:px-24 text-stone-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-600">
        Let's Connect
      </h2>

      <p className="mb-6 max-w-xl text-stone-200">
        I'm always open to discussing opportunities in frontend development,
        especially roles that involve React, UI architecture, or design systems.
        Whether you're a recruiter, hiring manager, or fellow developer, feel
        free to reach out.
        <br /> — I'd be glad to connect.
      </p>

      <div className="flex flex-col gap-4 text-stone-300">
        <a
          href="mailto:adityabedi33@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-amber-600 transition"
        >
          <Mail className="w-5 h-5" />
          adityabedi33@gmail.com
        </a>

        <a
          href="https://github.com/addybedi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-amber-600 transition"
        >
          <Github className="w-5 h-5" />
          github.com/addybedi
        </a>

        <a
          href="https://www.linkedin.com/in/aditya-bedi-362539143"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-amber-600 transition"
        >
          <Linkedin className="w-5 h-5" />
          linkedin.com/in/aditya-bedi-362539143
        </a>
      </div>
    </section>
  );
}
