import React from "react";
import styles from "./Button_basket.module.css";

const Button_basket = () => (
  <div>
    <div className={styles["center"]}>
      <button className={styles["btn"]}>
        <svg
          viewBox="0 0 150 50"
          height="50px"
          width="150px"
          className={styles["svg"]}
        >
          <polyline
            className={styles["bg-line"]}
            points="149,1 149,49 1,49 1,1 149,1"
          ></polyline>
          <polyline
            className={styles["hl-line"]}
            points="149,1 149,49 1,49 1,1 149,1"
          ></polyline>
        </svg>
        <span>HOVER ME</span>
      </button>
    </div>
  </div>
);

export default Button_basket;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_basket = () => (
         <div>
          <div className="center">
  <button className="btn">
    <svg viewBox="0 0 150 50" height="50px" width="150px" className="svg">
      <polyline className="bg-line" points="149,1 149,49 1,49 1,1 149,1"></polyline>
      <polyline className="hl-line" points="149,1 149,49 1,49 1,1 149,1"></polyline>
    </svg>
    <span>HOVER ME</span>
  </button>
</div>
        </div>
        );

        export default Button_basket;
        
        
         */
}
