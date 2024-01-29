import React from "react";
import styles from "./ProjectCard.module.css";

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiRubyonrails,
  SiCsharp,
  SiPython,
  SiFlask
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
  showPy,
  showCsharp,
  showFlask,
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
        { showCsharp && <SiCsharp />}
        {showPy && <SiPython />}
        {showFlask && <SiFlask />}
      </div>
      <a href={linkRepo}>
        <img src={img} alt="web page icon" />
        <p>{nameProject}</p>
      </a>
    </div>
  );
}

export default ProjectCard;
