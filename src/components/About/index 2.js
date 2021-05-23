import React, { Component } from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

class About extends Component {
  render() {
    return (
      <section className="my-5">
        <h1 id="about">Who am I?</h1>
        <img
          src={coverImage}
          className="my-2"
          style={{ width: "100%" }}
          alt="cover"
        />
        <p>
          I am Victor McGuire, Husband of Jill, Father of Patrick (here), and
          Gemma.
        </p>
      </section>
    );
  }
}

export default About;
