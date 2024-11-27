import React from "react";
import styles from "./Button_bottle.module.css";

const Button_bottle = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["button-content"]}>Download </span>
    </button>
  </div>
);

export default Button_bottle;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_bottle = () => (
         <div>
          <button className="button">
    <span className="button-content">Download </span>
</button>
        </div>
        );

        export default Button_bottle;
        
        
         */
}
