import React from "react";
import styles from "./Card_were.module.css";

const Card_were = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["card"]}>
        <div className={styles["face"] + styles["back"]}>
          <div className={styles["content"]}>
            <span className={styles["stars"]}></span>
            <b className={styles["desc"]}>Hello</b>
            <p className={styles["desc"]}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className={styles["face"] + styles["front"]}>
          <b>Hover</b>
        </div>
      </div>
    </div>
  </div>
);

export default Card_were;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_were = () => (
         <div>
          <div className="container">
  <div className="card">
    <div className="face back">
      <div className="content">
        <span className="stars"></span>
        <b className="desc">Hello</b>
        <p className="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>
    </div>
    <div className="face front">
      <b>Hover</b>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_were;
        
        
         */
}
