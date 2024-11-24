import React from "react";
import styles from "./Button_hung.module.css";

const Button_hung = () => (
  <div>
    <button>
      <span>Hey! Siri</span>
      <div className={styles["line"]}></div>
      <div className={styles["line-2"]}></div>
      <div className={styles["speak"]}></div>
      <div className={styles["speak"] + styles["one"]}></div>
      <div className={styles["speak"] + styles["two"]}></div>
      <div className={styles["speak"] + styles["three"]}></div>
    </button>
  </div>
);

export default Button_hung;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_hung = () => (
         <div>
          <button>
  <span>Hey! Siri</span>
  <div className="line"></div>
  <div className="line-2"></div>
  <div className="speak"></div>
  <div className="speak one"></div>
  <div className="speak two"></div>
  <div className="speak three"></div>
</button>
        </div>
        );

        export default Button_hung;
        
        
         */
}
