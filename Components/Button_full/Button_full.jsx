import React from "react";
import styles from "./Button_full.module.css";

const Button_full = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["one"]}>Download 0%</span>
      <span className={styles["two"]}>100%</span>
    </button>
  </div>
);

export default Button_full;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_full = () => (
         <div>
          <button className="button">
  <span className="one">Download 0%</span>
  <span className="two">100%</span>
</button>
        </div>
        );

        export default Button_full;
        
        
         */
}
