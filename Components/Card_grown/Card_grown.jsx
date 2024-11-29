import React from "react";
import styles from "./Card_grown.module.css";

const Card_grown = () => (
  <div>
    <article className={styles["card"]}>
      <div className={styles["card-img"]}>
        <div
          className={styles["card-imgs"] + styles["pv"] + styles["delete"]}
        ></div>
      </div>

      <div className={styles["project-info"]}>
        <div className={styles["flex"]}>
          <div className={styles["project-title"]}>Title card</div>
          <span className={styles["tag"]}>type</span>
        </div>
        <span className={styles["lighter"]}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
          voluptas ullam aut incidunt minima.
        </span>
      </div>
    </article>
  </div>
);

export default Card_grown;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_grown = () => (
         <div>
          <article className="card">
  <div className="card-img">
    <div className="card-imgs pv delete"></div>
  </div>

  <div className="project-info">
    <div className="flex">
      <div className="project-title">Title card</div>
      <span className="tag">type</span>
    </div>
    <span className="lighter"
      >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae
      voluptas ullam aut incidunt minima.</span
    >
  </div>
</article>
        </div>
        );

        export default Card_grown;
        
        
         */
}
