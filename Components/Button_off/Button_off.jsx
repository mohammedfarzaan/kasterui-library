import React from "react";
import styles from "./Button_off.module.css";

const Button_off = () => (
  <div>
    <div className={styles["uiverse"]}>
      <span className={styles["tooltip"]}>uiverse.io</span>
      <span>Tooltip</span>
    </div>
  </div>
);

export default Button_off;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_off = () => (
         <div>
          <div className="uiverse">
    <span className="tooltip">uiverse.io</span>
    <span>
        Tooltip
    </span>
</div>
        </div>
        );

        export default Button_off;
        
        
         */
}
