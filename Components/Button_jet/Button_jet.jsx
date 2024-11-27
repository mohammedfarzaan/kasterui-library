import React from "react";
import styles from "./Button_jet.module.css";

const Button_jet = () => (
  <div>
    <button
      type="button"
      className={styles["btn"] + styles["cube"] + styles["cube-hover"]}
    >
      <div className={styles["bg-top"]}>
        <div className={styles["bg-inner"]}></div>
      </div>
      <div className={styles["bg-right"]}>
        <div className={styles["bg-inner"]}></div>
      </div>
      <div className={styles["bg"]}>
        <div className={styles["bg-inner"]}></div>
      </div>
      <div className={styles["text"]}>Hover Me</div>
    </button>
  </div>
);

export default Button_jet;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_jet = () => (
         <div>
          <button type="button" className="btn cube cube-hover">
  <div className="bg-top">
  <div className="bg-inner"></div>
  </div>
  <div className="bg-right">
  <div className="bg-inner"></div>
  </div>
  <div className="bg">
  <div className="bg-inner"></div>
  </div>
  <div className="text">Hover Me</div>
</button>
        </div>
        );

        export default Button_jet;
        
        
         */
}
