import React from "react";
import styles from "./Button_held.module.css";

const Button_held = () => (
  <div>
    <a className={styles["codepen-button"]}>
      <span>Start Coding</span>
    </a>
  </div>
);

export default Button_held;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_held = () => (
         <div>
          <a className="codepen-button"><span>Start Coding</span></a>
        </div>
        );

        export default Button_held;
        
        
         */
}
