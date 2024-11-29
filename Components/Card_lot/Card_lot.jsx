import React from "react";
import styles from "./Card_lot.module.css";

const Card_lot = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card-border-top"]}></div>
      <div className={styles["img"]}></div>
      <span> Person</span>
      <p className={styles["job"]}> Job Title</p>
      <button> Click</button>
    </div>
  </div>
);

export default Card_lot;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_lot = () => (
         <div>
          <div className="card">
  <div className="card-border-top">
  </div>
  <div className="img">
  </div>
  <span> Person</span>
  <p className="job"> Job Title</p>
  <button> Click
  </button>
</div>
        </div>
        );

        export default Card_lot;
        
        
         */
}
