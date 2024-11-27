import React from "react";
import styles from "./Button_art.module.css";

const Button_art = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["bracket"] + styles["left"]}>❴</span>
      <span className={styles["text"]}>Code</span>
      <span className={styles["bracket"] + styles["right"]}>❵</span>
    </button>
  </div>
);

export default Button_art;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_art = () => (
         <div>
          <button className="button">
  <span className="bracket left">❴</span>
  <span className="text">Code</span>
  <span className="bracket right">❵</span>
</button>
        </div>
        );

        export default Button_art;
        
        
         */
}
