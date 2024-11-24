import React from "react";
import styles from "./Button_sky.module.css";

const Button_sky = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["similar-line"] + styles["line-1"]}></div>
      <div className={styles["similar-line"] + styles["line-2"]}></div>
      <div className={styles["similar-line"] + styles["line-3"]}></div>
    </button>
  </div>
);

export default Button_sky;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_sky = () => (
         <div>
          <button className="button">
  <div className="similar-line line-1"></div>
  <div className="similar-line line-2"></div>
  <div className="similar-line line-3"></div>
</button>
        </div>
        );

        export default Button_sky;
        
        
         */
}
