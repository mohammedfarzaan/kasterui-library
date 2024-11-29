import React from "react";
import styles from "./Card_able.module.css";

const Card_able = () => (
  <div>
    <article className={styles["article-wrapper"]}>
      <div className={styles["rounded-lg"] + styles["container-project"]}></div>
      <div className={styles["project-info"]}>
        <div className={styles["flex-pr"]}>
          <div className={styles["project-title"] + styles["text-nowrap"]}>
            Project
          </div>
          <div className={styles["project-hover"]}>
            <svg
              style={{ color: "black" }}
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              color="black"
              strokeLinejoin="round"
              strokeLinecap="round"
              viewBox="0 0 24 24"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <line y2="12" x2="19" y1="12" x1="5"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
        <div className={styles["types"]}>
          <span
            style="background-color: rgba(165, 96, 247, 0.43); color: rgb(85, 27, 177);"
            className={styles["project-type"]}
          >
            • Analytics
          </span>
          <span className={styles["project-type"]}>• Dashboards</span>
        </div>
      </div>
    </article>
  </div>
);

export default Card_able;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_able = () => (
         <div>
          <article className="article-wrapper">
  <div className="rounded-lg container-project">
    </div>
    <div className="project-info">
      <div className="flex-pr">
        <div className="project-title text-nowrap">Project</div>
          <div className="project-hover">
            <svg style={{color:"black"}} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor"><line y2="12" x2="19" y1="12" x1="5"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
          </div>
          <div className="types">
            <span style="background-color: rgba(165, 96, 247, 0.43); color: rgb(85, 27, 177);" className="project-type">• Analytics</span>
             <span className="project-type">• Dashboards</span>
        </div>
    </div>
</article>
        </div>
        );

        export default Card_able;
        
        
         */
}
