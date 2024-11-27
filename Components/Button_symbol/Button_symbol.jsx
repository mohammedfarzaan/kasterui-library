import React from "react";
import styles from "./Button_symbol.module.css";

const Button_symbol = () => (
  <div>
    <div className={styles["button-container"]}>
      <span className={styles["text"]}>
        <span className={styles["button-lines"]}>
          <span className={styles["button-line-1"]}></span>
          <span className={styles["button-line-2"]}></span>
        </span>
      </span>
    </div>
  </div>
);

export default Button_symbol;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_symbol = () => (
         <div>
          <div className="button-container">
  <span className="text">
    <span className="button-lines">
      <span className="button-line-1"></span>
      <span className="button-line-2"></span>
    </span>
  </span>
</div>
        </div>
        );

        export default Button_symbol;
        
        
         */
}
