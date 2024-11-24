import React from "react";
import styles from "./Button_base.module.css";

const Button_base = () => (
  <div>
    <button className={styles["box"]}>
      <span className={styles["button"]}>How Are you today?</span>
    </button>
  </div>
);

export default Button_base;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_base = () => (
         <div>
          <button className="box">
    <span className="button">How Are you today?</span>
  </button>
        </div>
        );

        export default Button_base;
        
        
         */
}
