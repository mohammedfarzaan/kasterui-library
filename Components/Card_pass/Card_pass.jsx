import React from "react";
import styles from "./Card_pass.module.css";

const Card_pass = () => (
  <div>
    <div className={styles["unique-card"]}>
      <div className={styles["background-overlay"]}></div>
      <div className={styles["card-content"]}>
        <div className={styles["card-title"]}>Unique Card</div>
        <div className={styles["card-description"]}>
          Hover over me for a distinct effect!
        </div>
      </div>
    </div>
  </div>
);

export default Card_pass;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_pass = () => (
         <div>
          <div className="unique-card">
  <div className="background-overlay"></div>
  <div className="card-content">
    <div className="card-title">Unique Card</div>
    <div className="card-description">Hover over me for a distinct effect!</div>
  </div>
</div>
        </div>
        );

        export default Card_pass;
        
        
         */
}
