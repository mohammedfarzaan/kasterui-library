import React from "react";
import styles from "./Button_fact.module.css";

const Button_fact = () => (
  <div>
    <div className={styles["container_mouse"]}>
      <span className={styles["mouse-btn"]}>
        <span className={styles["mouse-scroll"]}></span>
      </span>
      <span>Scroll Down</span>
    </div>
  </div>
);

export default Button_fact;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_fact = () => (
         <div>
          <div className="container_mouse">
    <span className="mouse-btn">
        <span className="mouse-scroll"></span>
    </span>
    <span>Scroll Down</span>
</div>
        </div>
        );

        export default Button_fact;
        
        
         */
}
