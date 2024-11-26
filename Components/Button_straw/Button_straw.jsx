import React from "react";
import styles from "./Button_straw.module.css";

const Button_straw = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["inner-circle"]}></span>
      <span className={styles["text"]}>Button</span>
    </button>
  </div>
);

export default Button_straw;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_straw = () => (
         <div>
          <button className="button">
  <span className="inner-circle"></span>
  <span className="text">Button</span>
</button>
        </div>
        );

        export default Button_straw;
        
        
         */
}
