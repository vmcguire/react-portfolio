import React, { useState } from "react";

function Portfolio({ project }) {
  const [photos] = useState([
    {
      name: "Budget_Tracker",
      description: "Budget Tracker App",
      github: "https://github.com/vmcguire/budget_tracker",
      website: "https://secure-headland-08208.herokuapp.com/",
    },
    {
      name: "Note_Taker",
      description: "Note Taker App",
      github: "https://github.com/vmcguire/notetaker",
      website: "https://mysterious-journey-96382.herokuapp.com/",
    },
    {
      name: "Pet_Adoption",
      description: "Pet Adoption App",
      github: "https://github.com/vmcguire/Pet-Adoption",
      website: "https://polar-lowlands-05168.herokuapp.com/",
    },
    {
      name: "Team_Profile",
      description: "Team Profile App",
      github: "https://github.com/vmcguire/teamprofile",
      website: "https://github.com/vmcguire/teamprofile",
    },
    {
      name: "Tech_Blog",
      description: "Tech Blog App",
      github: "https://github.com/vmcguire/techblog",
      website: "https://vast-ocean-28047.herokuapp.com/",
    },
    {
      name: "Weather_Man",
      description: "Weather Man App",
      github: "https://github.com/vmcguire/weatherman",
      website: "https://vmcguire.github.io/weatherman/",
    },
    {
      name: "Kathryn_Hansen",
      description: "Kathryn Hansen Artist Gallery",
      github: "https://github.com/vmcguire/kathryn-hansen",
      website: "https://kathryn-hansen.herokuapp.com/",
    },
  ]);
  const currentPhotos = photos.filter((photo) => photo.project === project);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <div>
            <p>{image.description}</p>
            <a href={image.website}>
              <img
                src={require(`../../assets/projects/${i}.png`).default}
                alt={image.name}
                className="img-thumbnail mx-1"
                key={image.name}
              />
            </a>
            <p>Click the Image to Access The App!</p>
            <p>
              <a href={image.github}>{image.github}</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
