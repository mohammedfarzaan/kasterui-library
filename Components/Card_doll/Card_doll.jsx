import React from "react";
import styles from "./Card_doll.module.css";

const Card_doll = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["card"]}>
        <div className={styles["box"]}>
          <div className={styles["content"]}>
            <span className={styles["heading"]}>01</span>
            <span className={styles["content"]}>Card </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              totam velit? Iure nemo labore inventore?
            </p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card_doll;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_doll = () => (
         <div>
          <div className="container">
  <div className="card">
    <div className="box">
      <div className="content">
        <span className="heading">01</span>
        <span className="content">Card </span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div></div>
        </div>
        );

        export default Card_doll;
        
        
         */
}
