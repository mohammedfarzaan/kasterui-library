import React from "react";
import styles from "./Button_eat.module.css";

const Button_eat = () => (
  <div>
    <div className={styles["container-button"]}>
      <div className={styles["hover"] + styles["bt-1"]}></div>
      <div className={styles["hover"] + styles["bt-2"]}></div>
      <div className={styles["hover"] + styles["bt-3"]}></div>
      <div className={styles["hover"] + styles["bt-4"]}></div>
      <div className={styles["hover"] + styles["bt-5"]}></div>
      <div className={styles["hover"] + styles["bt-6"]}></div>
      <button></button>
    </div>
  </div>
);

export default Button_eat;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_eat = () => (
         <div>
          <div className="container-button">
  <div className="hover bt-1"></div>
  <div className="hover bt-2"></div>
  <div className="hover bt-3"></div>
  <div className="hover bt-4"></div>
  <div className="hover bt-5"></div>
  <div className="hover bt-6"></div>
  <button></button>
</div>
        </div>
        );

        export default Button_eat;
        
        
         */
}
