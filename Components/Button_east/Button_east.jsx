import React from "react";
import styles from "./Button_east.module.css";

const Button_east = () => (
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

export default Button_east;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_east = () => (
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

        export default Button_east;
        
        
         */
}
