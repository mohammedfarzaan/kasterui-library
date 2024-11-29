import React from "react";
import styles from "./Card_claws.module.css";

const Card_claws = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["upper-part"]}>
        <div className={styles["upper-part-face"]}>Hover Me</div>
        <div className={styles["upper-part-back"]}>
          Some Additional Information At The Back Side
        </div>
      </div>
      <div className={styles["lower-part"]}>
        <div className={styles["lower-part-face"]}>Face Side</div>
        <div className={styles["lower-part-back"]}>Back Side</div>
      </div>
    </div>
  </div>
);

export default Card_claws;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_claws = () => (
         <div>
          <div className="card">
  <div className="upper-part">
    <div className="upper-part-face">Hover Me</div>
    <div className="upper-part-back">Some Additional Information At The Back Side</div>
  </div>
  <div className="lower-part">
    <div className="lower-part-face">Face Side</div>
    <div className="lower-part-back">Back Side</div>
  </div>
</div>
        </div>
        );

        export default Card_claws;
        
        
         */
}
