import React from "react";
import styles from "./Button_green.module.css";

const Button_green = () => (
  <div>
    <button role="button" className={styles["golden-button"]}>
      <span className={styles["golden-text"]}>Golden Button</span>
    </button>
  </div>
);

export default Button_green;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_green = () => (
         <div>
          <button role="button" className="golden-button">
  <span className="golden-text">Golden Button</span>
</button>
        </div>
        );

        export default Button_green;
        
        
         */
}
