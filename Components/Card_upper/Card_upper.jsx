import React from "react";
import styles from "./Card_upper.module.css";

const Card_upper = () => (
  <div>
    <div className={styles["ball1"]}></div>
    <div className={styles["card"]}>
      <p>VISA</p>
      <div className={styles["card-num"]}>
        6216 1906 5218 1991
        <p>VALID : 15 - 04 - 2005</p>
      </div>
    </div>
    <div className={styles["ball2"]}></div>
  </div>
);

export default Card_upper;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_upper = () => (
         <div>
          <div className="ball1"></div>
<div className="card">
  <p>VISA</p>
  <div className="card-num">
    6216 1906 5218 1991
    <p>VALID : 15 - 04 - 2005</p>
  </div>
</div>
<div className="ball2"></div>
        </div>
        );

        export default Card_upper;
        
        
         */
}
