import React from "react";
import styles from "./Card_least.module.css";

const Card_least = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["align"]}>
        <span className={styles["red"]}></span>
        <span className={styles["yellow"]}></span>
        <span className={styles["green"]}></span>
      </div>

      <h1>HOVER ME</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde explicabo
        enim rem odio assumenda?
      </p>
    </div>
  </div>
);

export default Card_least;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_least = () => (
         <div>
          <div className="card">
    <div className="align">
        <span className="red"></span>
        <span className="yellow"></span>
        <span className="green"></span>
    </div>

    <h1>HOVER ME</h1>
    <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde explicabo enim rem odio assumenda?
    </p>
</div>
        </div>
        );

        export default Card_least;
        
        
         */
}
