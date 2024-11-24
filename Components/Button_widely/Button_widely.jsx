import React from "react";
import styles from "./Button_widely.module.css";

const Button_widely = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["button-text"]}>Button</span>
      <span className={styles["tooltip"]}>Tooltip</span>
    </button>
  </div>
);

export default Button_widely;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_widely = () => (
         <div>
          <button className="button">
  <span className="button-text">Button</span>
  <span className="tooltip">Tooltip</span>
</button>
        </div>
        );

        export default Button_widely;
        
        
         */
}
