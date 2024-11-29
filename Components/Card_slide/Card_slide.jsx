import React from "react";
import styles from "./Card_slide.module.css";

const Card_slide = () => (
  <div>
    <div className={styles["card"]}>
      <p className={styles["header"]}>UI Blog's</p>
      <div className={styles["main-content"]}>
        <p className={styles["heading"]}>How to make a simple ui card?</p>
      </div>
      <div className={styles["footer"]}>by Harsh Gupta</div>
    </div>
  </div>
);

export default Card_slide;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_slide = () => (
         <div>
          <div className="card">
  <p className="header">UI Blog's</p>
  <div className="main-content">
    <p className="heading">How to make a simple ui card?</p>
  </div>
  <div className="footer">by Harsh Gupta</div>
</div>
        </div>
        );

        export default Card_slide;
        
        
         */
}
