export function Companies() {
  const experience = [
    {
      company: "Velotio Technologies Pvt. Ltd.",
      companyLink: "https://www.velotio.com/",
      role: "Senior Software Developer",
      period: "Mar 2022 – Present",
      responsibilities: [
        "Developed and tested new features based on client requirements across multiple apps.",
        "Maintained front-end and back-end systems, resolving critical bugs.",
        "Built REST APIs using NestJS and designed UI components using Figma, TSX, and Bulma CSS.",
        "Worked with libraries like RBX, Rsuite, Styled Components, and Chakra UI.",
        "Wrote backend unit tests using Chai/Mocha, and frontend tests using Jest.",
      ],
      projects: [
        "Spot Connect",
        "Unscramble by Qbo",
        "Manulife",
        "Knotch",
        "StarTree",
        "CapitalMind",
      ],
      techStack: [
        "React",
        "Next.js",
        "TypeScript",
        "NestJS",
        "Tailwind CSS",
        "Chakra UI",
        "MUI",
        "React Flow",
        "Styled Components",
        "Bulma",
        "Jest",
        "Mocha",
        "Node.js",
        "Jira",
        "Lerna",
        "Bitbucket",
      ],
    },
    {
      company: "Value Innovation Labs",
      companyLink: "https://www.valueinnovationlabs.com/",

      role: "Full Stack Web Developer",
      period: "Aug 2021 – Mar 2022",
      responsibilities: [
        <span>
          {" "}
          <strong>Product-based company:</strong>- contributed to the
          development of an internal product{" "}
          <a
            href="https://rozgar.com/"
            className="text-amber-600 hover:underline"
            target="_blank"
          >
            Rozgar.com
          </a>
          .
        </span>,
        "Created backend APIs using Node.js and Express.",
        "Developed interactive UI/UX interfaces with React and Next.js.",
        "Maintained third-party APIs and made dynamic changes based on client requirements.",
      ],
      projects: [
        "Rozgar.com",
        "Campus-Rozgar",
        "Gujarat Garmin Bank HRMS",
        "Performance Management System",
        "Assets Management Server",
        "OTP and Mail Server",
      ],
      techStack: [
        "React",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Bootstrap 5",
        "Material UI",
        "Font Awesome",
        "ELK Stack",
        "Redis",
        "Formik",
        "Yup",
        "Context API",
      ],
    },
    {
      company: "Freelancer",
      role: "Full Stack Developer",
      period: "Apr 2021 – Aug 2021",
      responsibilities: [
        "Built web applications from scratch for client-side services.",
        "Designed responsive UIs and REST APIs using React, Node, and Express.",
      ],
      projects: ["Online Examination Portal for IT Developers"],
      techStack: [
        "React",
        "Node.js",
        "Express",
        "Redux",
        "Bootstrap 5",
        "PostgreSQL",
        "Formik",
        "Yup",
      ],
    },
    {
      companyLink: "https://www.startek.com/",
      company: "Startek Global",
      role: "Senior Executive",
      period: "May 2019 – Apr 2021",
      responsibilities: [
        "Managed disconnection and reactivation service requests.",
        "Coordinated across departments to resolve service issues.",
        "Maintained internal records and trained new team members.",
      ],
      techStack: [],
      projects: [],
    },
  ];

  return (
    <section id="experience" className="px-6 md:px-24 text-stone-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-amber-600">
        Professional Experience
      </h2>

      <div className="space-y-10">
        {experience.map((item, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex justify-between flex-col md:flex-row">
              <h3 className="text-xl font-semibold text-stone-200">
                {item.role}
              </h3>
              <span className="text-sm text-stone-300">{item.period}</span>
            </div>
            <a
              className="block text-md font-medium text-amber-600 mb-2 hover:underline"
              href={item.companyLink}
              target="_blank"
            >
              {item.company}
            </a>

            <ul className="list-disc ml-6 text-sm space-y-1">
              {item.responsibilities.map((res, i) => (
                <li key={i} className="text-stone-300">
                  {res}
                </li>
              ))}
            </ul>

            {item.projects.length > 0 && (
              <p className="text-sm mt-2 text-stone-300">
                <span className="font-medium text-stone-200">Projects:</span>{" "}
                {item.projects.join(", ")}.
              </p>
            )}

            {item.techStack.length > 0 && (
              <p className="text-sm text-stone-300">
                <span className="font-medium text-stone-200">Tech Stack:</span>{" "}
                {item.techStack.join(", ")}.
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
