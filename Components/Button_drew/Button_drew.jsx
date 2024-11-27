import React from "react";
import styles from "./Button_drew.module.css";

const Button_drew = () => (
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

export default Button_drew;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_drew = () => (
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

        export default Button_drew;
        
        
         */
}
