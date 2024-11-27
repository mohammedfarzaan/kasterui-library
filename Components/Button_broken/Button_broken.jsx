import React from "react";
import styles from "./Button_broken.module.css";

const Button_broken = () => (
  <div>
    <div className={styles["button"]}>
      <a href="#">Download</a>
      <b className={styles["top"]}>click to download</b>
      <b className={styles["bottom"]}>1.2MB .zip</b>
    </div>
  </div>
);

export default Button_broken;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_broken = () => (
         <div>
          <div className="button">
  <a href="#">Download</a>
  <b className="top">click to download</b>
  <b className="bottom">1.2MB .zip</b>
</div>
        </div>
        );

        export default Button_broken;
        
        
         */
}
