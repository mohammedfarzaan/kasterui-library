import React from "react";
import styles from "./Button_loud.module.css";

const Button_loud = () => (
  <div>
    <button className={styles["BTN-style"]}>
      <span className={styles["BTN-text"]}>Hover me</span>
    </button>
  </div>
);

export default Button_loud;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_loud = () => (
         <div>
          <button className="BTN-style">
  <span className="BTN-text">Hover me</span>
</button>
        </div>
        );

        export default Button_loud;
        
        
         */
}
