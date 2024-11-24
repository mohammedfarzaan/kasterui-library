import React from "react";
import styles from "./Button_dozen.module.css";

const Button_dozen = () => (
  <div>
    <a href="#" className={styles["button"]}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Button
    </a>
  </div>
);

export default Button_dozen;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_dozen = () => (
         <div>
          <a href="#" className="button">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  Button
</a>
        </div>
        );

        export default Button_dozen;
        
        
         */
}
