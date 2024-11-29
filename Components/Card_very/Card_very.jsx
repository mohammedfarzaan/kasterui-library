import React from "react";
import styles from "./Card_very.module.css";

const Card_very = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card-front"]}>
        <p className={styles["title"]}>John Doe</p>
        <p className={styles["subtitle"]}>Web Dev</p>
      </div>
      <div className={styles["card-back"]}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
);

export default Card_very;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_very = () => (
         <div>
          <div className="card">
  <div className="card-front">
    <p className="title">John Doe</p>
    <p className="subtitle">Web Dev</p>
  </div>
  <div className="card-back">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</div>
        </div>
        );

        export default Card_very;
        
        
         */
}
