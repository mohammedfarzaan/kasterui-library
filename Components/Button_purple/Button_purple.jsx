import React from "react";
import styles from "./Button_purple.module.css";

const Button_purple = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["circle"]}></div>
      <span>Button</span>
    </button>
  </div>
);

export default Button_purple;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_purple = () => (
         <div>
          <button className="button">
  <div className="circle"></div>
  <span>Button</span>
</button>
        </div>
        );

        export default Button_purple;
        
        
         */
}
