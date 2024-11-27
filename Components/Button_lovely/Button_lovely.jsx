import React from "react";
import styles from "./Button_lovely.module.css";

const Button_lovely = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["top"]}>
        <p>Explore More</p>
        <p className={styles["before"]}>&nbsp;</p>
      </span>
      <span className={styles["bottom"]}> &nbsp; </span>
    </button>
  </div>
);

export default Button_lovely;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_lovely = () => (
         <div>
          <button className="button">
      <span className="top">
        <p>Explore More</p>
        <p className="before">&nbsp;</p>
      </span>
      <span className="bottom"> &nbsp; </span>
    </button>
        </div>
        );

        export default Button_lovely;
        
        
         */
}
