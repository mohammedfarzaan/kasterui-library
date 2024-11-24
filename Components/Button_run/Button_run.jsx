import React from "react";
import styles from "./Button_run.module.css";

const Button_run = () => (
  <div>
    <button className={styles["btn-shine"]}>
      <span>Shine</span>
    </button>
  </div>
);

export default Button_run;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_run = () => (
         <div>
          <button className="btn-shine">
    <span>Shine</span>
</button>
        </div>
        );

        export default Button_run;
        
        
         */
}