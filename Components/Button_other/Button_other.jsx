import React from "react";
import styles from "./Button_other.module.css";

const Button_other = () => (
  <div>
    <button className={styles["button"]}>
      Button
      <span></span>
      <span></span>
    </button>
  </div>
);

export default Button_other;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_other = () => (
         <div>
          <button className="button">
  Button
  <span></span>
  <span></span>
</button>
        </div>
        );

        export default Button_other;
        
        
         */
}
