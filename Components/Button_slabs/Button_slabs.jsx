import React from "react";
import styles from "./Button_slabs.module.css";

const Button_slabs = () => (
  <div>
    <div className={styles["button"]}>
      <span className={styles["text"]}>hover me</span>
      <span className={styles["arrow"]}></span>
    </div>
  </div>
);

export default Button_slabs;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_slabs = () => (
         <div>
          <div className="button">
  <span className="text">hover me</span>
  <span className="arrow"></span>
</div>
        </div>
        );

        export default Button_slabs;
        
        
         */
}
