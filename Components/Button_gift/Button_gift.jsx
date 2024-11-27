import React from "react";
import styles from "./Button_gift.module.css";

const Button_gift = () => (
  <div>
    <button className={styles["btn"] + styles["btn-primary"]}>
      <span className={styles["btn-txt"]}>Get started</span>
      <kbd className={styles["btn-kbd"]}>G</kbd>
    </button>
  </div>
);

export default Button_gift;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_gift = () => (
         <div>
          <button className="btn btn-primary">
  <span className="btn-txt">Get started</span>
  <kbd className="btn-kbd">G</kbd>
</button>
        </div>
        );

        export default Button_gift;
        
        
         */
}
