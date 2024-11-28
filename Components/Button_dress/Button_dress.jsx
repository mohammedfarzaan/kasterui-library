import React from "react";
import styles from "./Button_dress.module.css";

const Button_dress = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["center"]}>
        <button className={styles["btn"]}>
          <svg
            className="border"
            viewBox="0 0 180 60"
            height="60px"
            width="180px"
          >
            <polyline
              className="bg-line"
              points="179,1 179,59 1,59 1,1 179,1"
            ></polyline>
            <polyline
              className="hl-line"
              points="179,1 179,59 1,59 1,1 179,1"
            ></polyline>
          </svg>
          <span>HOVER ME</span>
        </button>
      </div>
    </div>
  </div>
);

export default Button_dress;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_dress = () => (
         <div>
          <div className="container">
    <div className="center">
      <button className="btn">
        <svg className="border" viewBox="0 0 180 60" height="60px" width="180px">
          <polyline className="bg-line" points="179,1 179,59 1,59 1,1 179,1"></polyline>
          <polyline className="hl-line" points="179,1 179,59 1,59 1,1 179,1"></polyline>
        </svg>
        <span>HOVER ME</span>
      </button>
    </div>
  </div>
        </div>
        );

        export default Button_dress;
        
        
         */
}
