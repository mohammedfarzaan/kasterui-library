import React from "react";
import styles from "./Button_music.module.css";

const Button_music = () => (
  <div>
    <button className={styles["btn-76"]}>
      Button
      <span className={styles["top"]}></span>
      <span className={styles["right"]}></span>
      <span className={styles["bottom"]}></span>
      <span className={styles["left"]}></span>
    </button>
  </div>
);

export default Button_music;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_music = () => (
         <div>
          <button className="btn-76">
  Button
  <span className="top"></span>
  <span className="right"></span>
  <span className="bottom"></span>
  <span className="left"></span>
</button>
        </div>
        );

        export default Button_music;
        
        
         */
}
