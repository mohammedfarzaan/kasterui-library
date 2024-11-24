import React from "react";
import styles from "./Button_dinner.module.css";

const Button_dinner = () => (
  <div>
    <div className={styles["svg-wrapper"]}>
      <svg height="60" width="190" xmlns="http://www.w3.org/2000/svg">
        <rect className={styles["shape"]} height="60" width="190"></rect>
      </svg>
      <div className={styles["text"]}>Subscribe</div>
    </div>
  </div>
);

export default Button_dinner;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_dinner = () => (
         <div>
          <div className="svg-wrapper">
  <svg height="60" width="190" xmlns="http://www.w3.org/2000/svg">
    <rect className="shape" height="60" width="190"></rect>
    </svg>
    <div className="text">Subscribe</div>
</div>
        </div>
        );

        export default Button_dinner;
        
        
         */
}
