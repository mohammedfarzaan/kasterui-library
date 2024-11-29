import React from "react";
import styles from "./Card_rice.module.css";

const Card_rice = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card-inner"]}>
        <div className={styles["card-front"]}>
          <p>Front Side</p>
        </div>
        <div className={styles["card-back"]}>
          <p>Back Side</p>
        </div>
      </div>
    </div>
  </div>
);

export default Card_rice;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_rice = () => (
         <div>
          <div className="card">
  <div className="card-inner">
    <div className="card-front">
      <p>Front Side</p>
    </div>
    <div className="card-back">
      <p>Back Side</p>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_rice;
        
        
         */
}
