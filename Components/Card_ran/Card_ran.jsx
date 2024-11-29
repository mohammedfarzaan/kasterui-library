import React from "react";
import styles from "./Card_ran.module.css";

const Card_ran = () => (
  <div>
    <div className={styles["flip"]}>
      <div className={styles["content"]}>
        <div className={styles["front"]}>
          <h2>Front</h2>
          <p>Front Description</p>
        </div>
        <div className={styles["back"]}>
          <h2>Back</h2>
          <p>Back Description</p>
        </div>
      </div>
    </div>
  </div>
);

export default Card_ran;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_ran = () => (
         <div>
          <div className="flip">
    <div className="content">
        <div className="front">
            <h2>Front</h2>
            <p>Front Description</p>
        </div>
        <div className="back">
            <h2>Back</h2>
            <p>Back Description</p>
        </div>
    </div>
</div>
        </div>
        );

        export default Card_ran;
        
        
         */
}
