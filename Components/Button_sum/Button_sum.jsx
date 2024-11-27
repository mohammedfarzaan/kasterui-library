import React from "react";
import styles from "./Button_sum.module.css";

const Button_sum = () => (
  <div>
    <button className={styles["btn"]} data-text="HELLO">
      <span className={styles["hover"]}>HOVER</span>
    </button>
  </div>
);

export default Button_sum;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_sum = () => (
         <div>
          <button className="btn" data-text="HELLO">
  <span className="hover">HOVER</span>
</button>
        </div>
        );

        export default Button_sum;
        
        
         */
}
