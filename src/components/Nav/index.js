import React from "react";

function Nav() {
  const categories = [
    {
      name: "Portfolio",
      description: "Some of my notable Full Stack Development projects.",
    },
    { name: "Resume", description: "My experience and work history." },
  ];
  function categorySelected(name) {
    console.log(`${name} clicked`);
  }
  return (
    <header>
      <h2>Victor McGuire</h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">About Me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li className="mx-1" key={category.name}>
              <span onClick={() => categorySelected(category.name)}>
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
