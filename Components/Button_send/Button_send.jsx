import React from "react";
import styles from "./Button_send.module.css";

const Button_send = () => (
  <div>
    <div className={styles["center"]}>
      <button className={styles["btn"]}>
        <svg viewBox="0 0 150 50" height="50px" width="150px" className="svg">
          <polyline
            className="bg-line"
            points="149,1 149,49 1,49 1,1 149,1"
          ></polyline>
          <polyline
            className="hl-line"
            points="149,1 149,49 1,49 1,1 149,1"
          ></polyline>
        </svg>
        <span>HOVER ME</span>
      </button>
    </div>
  </div>
);

export default Button_send;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_send = () => (
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

        export default Button_send;
        
        
         */
}
