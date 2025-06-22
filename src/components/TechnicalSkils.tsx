export function TechnicalSkills() {
  const skills = {
    Languages: ["JavaScript", "TypeScript", "HTML", "CSS", "SCSS"],
    "Frameworks / Libraries": [
      "React.js",
      "Next.js",
      "Node.js",
      "Nest.js",
      "Express.js",
      "Redux",
      "Bootstrap",
      "Tailwind CSS",
      "MUI",
      "Chakra UI",
      "React Native",
    ],
    Databases: ["PostgreSQL", "MariaDB", "MySQL"],
    "Tools & Others": [
      "Jira",
      "Bitbucket",
      "Formik",
      "Yup",
      "ELK Stack",
      "Jest",
      "Mocha",
      "Chai",
    ],
  };

  return (
    <section id="skills" className="px-6 md:px-24 text-stone-800">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-amber-600">
        Technical Skills
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-3 text-stone-200">
              {category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {items.map((skill, index) => (
                <li
                  key={index}
                  className="bg-stone-100 font-semibold px-3 py-1 rounded text-sm text-stone-700 shadow-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
