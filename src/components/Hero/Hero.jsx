import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Devendra </h1>
        <p className={styles.description}>
        Eager to learn & grow as a Full-Stack Developer with a keen interest in Data Engineering.
        Proficient in Python,Java,SQL.
        Seeking opportunities to contribute to innovative projects.
        </p>
        <a href="https://drive.google.com/drive/u/0/folders/18fZRo7d9wfI0I4mo2gQXE-S1-lH0siwa" className={styles.contactBtn}>
          Download Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
