import React from "react";
import styles from "./Button_bat.module.css";

const Button_bat = () => (
  <div>
    <button id="br__btn">
      <i id="br__gradient"></i>
      <i className={styles["star"]} style="--order: 1;"></i>
      <i className={styles["star"]} style="--order: 2;"></i>
      <i className={styles["star"]} style="--order: 3;"></i>
      <i className={styles["star"]} style="--order: 4;"></i>
      <i className={styles["star"]} style="--order: 5;"></i>
      <i className={styles["star"]} style="--order: 6;"></i>
      <i className={styles["star"]} style="--order: 7;"></i>
      <i className={styles["star"]} style="--order: 8;"></i>
      <i className={styles["star"]} style="--order: 9;"></i>
      <span className={styles["txt"]}>Explore</span>
    </button>
  </div>
);

export default Button_bat;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_bat = () => (
         <div>
          <button id="br__btn">
  <i id="br__gradient"></i>
  <i className="star" style="--order: 1;"></i>
  <i className="star" style="--order: 2;"></i>
  <i className="star" style="--order: 3;"></i>
  <i className="star" style="--order: 4;"></i>
  <i className="star" style="--order: 5;"></i>
  <i className="star" style="--order: 6;"></i>
  <i className="star" style="--order: 7;"></i>
  <i className="star" style="--order: 8;"></i>
  <i className="star" style="--order: 9;"></i>
  <span className="txt">Explore</span>
</button>
        </div>
        );

        export default Button_bat;
        
        
         */
}
