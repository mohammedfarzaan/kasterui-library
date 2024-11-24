import React from "react";
import styles from "./Button_nearer.module.css";

const Button_nearer = () => (
  <div>
    <div className={styles["box"]}>
      <div className={styles["container"]}>
        <button className={styles["button"]}>
          <span>A</span>
        </button>
        <button className={styles["button"]}>
          <span>B</span>
        </button>
        <button className={styles["button"]}>
          <span>C</span>
        </button>
        <button className={styles["button"]}>
          <span>D</span>
        </button>
      </div>
    </div>
  </div>
);

export default Button_nearer;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_nearer = () => (
         <div>
          <div className="box">
  <div className="container">
    <button className="button"><span>A</span></button>
    <button className="button"><span>B</span></button>
    <button className="button"><span>C</span></button>
    <button className="button"><span>D</span></button>
  </div>
</div>
        </div>
        );

        export default Button_nearer;
        
        
         */
}
