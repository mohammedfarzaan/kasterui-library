import React from "react";
import styles from "./Button_want.module.css";

const Button_want = () => (
  <div>
    <button className={styles["button"]}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Hover Me
    </button>
  </div>
);

export default Button_want;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_want = () => (
         <div>
          <button className="button">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  Hover Me
</button>
        </div>
        );

        export default Button_want;
        
        
         */
}
