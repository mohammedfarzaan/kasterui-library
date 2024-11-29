import React from "react";
import styles from "./Card_topic.module.css";

const Card_topic = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["main-content"]}>
        <div className={styles["header"]}>
          <span>Article on</span>
          <span>29-June-2023</span>
        </div>
        <p className={styles["heading"]}>Different ways to use CSS in React</p>
        <div className={styles["categories"]}>
          <span>React</span>
          <span>Css</span>
        </div>
      </div>
      <div className={styles["footer"]}>by Harsh Gupta</div>
    </div>
  </div>
);

export default Card_topic;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_topic = () => (
         <div>
          <div className="card">
  <div className="main-content">
    <div className="header">
  <span>Article on</span>
  <span>29-June-2023</span>
</div>
<p className="heading">Different ways to use CSS in React</p>
<div className="categories">
  <span>React</span>
  <span>Css</span>
</div>
  </div>
<div className="footer">
  by Harsh Gupta
</div>
</div>
        </div>
        );

        export default Card_topic;
        
        
         */
}
