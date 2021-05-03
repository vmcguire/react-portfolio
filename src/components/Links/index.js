import React from "react";

function Links() {
  const projects = [
    {
      name: "Github",
      link: "https://github.com/vmcguire",
    },
    { name: "LinkedIn", link: "https://linkedin.com/in/victormcguire" },
    { name: "Twitter", link: "https://twitter.com/VicMcGuire12" },
  ];
  function projectSelected(name) {
    console.log(`${name} clicked`);
  }
  return (
    <footer>
      <ul className="flex-row">
        {projects.map((project) => (
          <div>
            <a href={project.link}>{project.name}</a>
          </div>
        ))}
      </ul>
    </footer>
  );
}

export default Links;
