import React from "react";
import styles from "./Button_wrong.module.css";

const Button_wrong = () => (
  <div>
    <div className={styles["wrap"]}>
      <button className={styles["btn"]}>
        <span className={styles["text"]}>Volume</span>
      </button>
    </div>
  </div>
);

export default Button_wrong;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_wrong = () => (
         <div>
          <div className="wrap">
    <button className="btn">
        <span className="text">Volume</span>
    </button>
</div>
        </div>
        );

        export default Button_wrong;
        
        
         */
}
