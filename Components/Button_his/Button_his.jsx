import React from "react";
import styles from "./Button_his.module.css";

const Button_his = () => (
  <div>
    <a className={styles["fancy"]} href="#">
      <span className={styles["top-key"]}></span>
      <span className={styles["text"]}>Buy Tickets</span>
      <span className={styles["bottom-key-1"]}></span>
      <span className={styles["bottom-key-2"]}></span>
    </a>
  </div>
);

export default Button_his;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_his = () => (
         <div>
          <a className="fancy" href="#">
  <span className="top-key"></span>
  <span className="text">Buy Tickets</span>
  <span className="bottom-key-1"></span>
  <span className="bottom-key-2"></span>
</a>
        </div>
        );

        export default Button_his;
        
        
         */
}
