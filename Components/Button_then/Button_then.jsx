import React from "react";
import styles from "./Button_then.module.css";

const Button_then = () => (
  <div>
    <button className={styles["btn"]}>
      <span className={styles["text"]}>Play</span>
    </button>
  </div>
);

export default Button_then;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_then = () => (
         <div>
          <button className="btn">
  <span className="text">Play</span>
</button>
        </div>
        );

        export default Button_then;
        
        
         */
}
