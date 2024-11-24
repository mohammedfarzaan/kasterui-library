import React from "react";
import styles from "./Button_horn.module.css";

const Button_horn = () => (
  <div>
    <button className={styles["btn"]}>
      Button
      <span className={styles["icon-right"]}></span>
      <span className={styles["icon-right"] + styles["after"]}></span>
    </button>
  </div>
);

export default Button_horn;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_horn = () => (
         <div>
          <button className="btn">Button 
  <span className="icon-right"></span>
  <span className="icon-right after"></span>
</button>
        </div>
        );

        export default Button_horn;
        
        
         */
}
