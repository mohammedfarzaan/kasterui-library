import React from "react";
import styles from "./Button_silk.module.css";

const Button_silk = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["X"]}></span>
      <span className={styles["Y"]}></span>
      <div className={styles["close"]}>Close</div>
    </button>
  </div>
);

export default Button_silk;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_silk = () => (
         <div>
          <button className="button">
  <span className="X"></span>
  <span className="Y"></span>
  <div className="close">Close</div>
</button>
        </div>
        );

        export default Button_silk;
        
        
         */
}
