import React from "react";
import styles from "./Button_change.module.css";

const Button_change = () => (
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

export default Button_change;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_change = () => (
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

        export default Button_change;
        
        
         */
}
