import React from "react";
import styles from "./Button_hill.module.css";

const Button_hill = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["button-overlay"]}></div>
      <span>Gradient Button</span>
    </button>
  </div>
);

export default Button_hill;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_hill = () => (
         <div>
          <button className="button">
  <div className="button-overlay"></div>
  <span>Gradient Button</span>  
</button>
        </div>
        );

        export default Button_hill;
        
        
         */
}
