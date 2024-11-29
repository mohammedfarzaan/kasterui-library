import React from "react";
import styles from "./Card_men.module.css";

const Card_men = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["main-content"]}>
        <div className={styles["header"]}>
          <span></span>
          <span>03/01/2024</span>
        </div>
        <p className={styles["heading"]}>
          Different ways to use HTML, CSS, JAVA SCRIPT, IN REACT
        </p>
        <div className={styles["categories"]}>
          <span>HTML</span>
          <span>CSS</span>
          <span>JAVA SCRIPT</span>
          <span>REACT </span>
        </div>
      </div>
      <div className={styles["footer"]}>By @iamabdulbasit___</div>
    </div>
  </div>
);

export default Card_men;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_men = () => (
         <div>
          <div className="card">
  <div className="main-content">
    <div className="header">
      <span></span>
      <span>03/01/2024</span>
    </div>
    <p className="heading">
      Different ways to use HTML, CSS, JAVA SCRIPT, IN REACT
    </p>
    <div className="categories">
      <span>HTML</span>
      <span>CSS</span>
      <span>JAVA SCRIPT</span>
      <span>REACT </span>
    </div>
  </div>
  <div className="footer">By @iamabdulbasit___</div>
</div>
        </div>
        );

        export default Card_men;
        
        
         */
}
