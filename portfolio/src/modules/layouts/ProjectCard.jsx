import React from "react";
import styles from "./ProjectCard.module.css";

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiRubyonrails,
} from "react-icons/si";
import { DiRuby } from "react-icons/di";

function ProjectCard({
  nameProject,
  showJs,
  showHtml,
  showCss,
  showRuby,
  showReact,
  showRails,
  img,
  linkRepo,
}) {
  return (
    <div className={styles.cardProject}>
      <div className={styles.icons}>
        {showJs && <SiJavascript />}
        {showHtml && <SiHtml5 />}
        {showCss && <SiCss3 />}
        {showRuby && <DiRuby />}
        {showReact && <SiReact />}
        {showRails && <SiRubyonrails />}
      </div>
      <a href={linkRepo}>
        <img src={img} alt="web page icon" />
        <p>{nameProject}</p>
      </a>
    </div>
  );
}

export default ProjectCard;
