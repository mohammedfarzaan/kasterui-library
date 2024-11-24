import React from "react";
import styles from "./Button_garage.module.css";

const Button_garage = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["line"] + styles["one"]}>
        <div className={styles["round"]}></div>
        <div className={styles["round"]}></div>
        <div className={styles["round"]}></div>
        <div className={styles["round"]}></div>
      </div>
      <div className={styles["line"] + styles["two"]}>
        <div className={styles["round"]}></div>
        <div className={styles["round"]}></div>
        <div className={styles["round"]}></div>
        <div className={styles["round"]}></div>
      </div>
      <div className={styles["line"] + styles["three"]}>
        <div className={styles["round"]}></div>
        <div className={styles["round"]}></div>
        <div className={styles["round"]}></div>
        <div className={styles["round"]}></div>
      </div>
      <div className={styles["line"] + styles["four"]}>
        <div className={styles["round"]}></div>
        <div className={styles["round"]}></div>
        <div className={styles["round"]}></div>
        <div className={styles["round"]}></div>
      </div>

      <div className={styles["line"] + styles["five"]}>
        <div className={styles["round"]}></div>
        <div className={styles["round"]}></div>
        <div className={styles["round"]}></div>
        <div className={styles["round"]}></div>
      </div>

      <div className={styles["line"] + styles["six"]}>
        <div className={styles["round"]}></div>
        <div className={styles["round"]}></div>
        <div className={styles["round"]}></div>
        <div className={styles["round"]}></div>
      </div>

      <div className={styles["line"] + styles["seven"]}>
        <div className={styles["round"]}></div>
        <div className={styles["round"]}></div>
        <div className={styles["round"]}></div>
        <div className={styles["round"]}></div>
      </div>
    </button>
  </div>
);

export default Button_garage;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_garage = () => (
         <div>
          <button className="button">
  <div className="line one">
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>

  </div>
  <div className="line two">
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>

  </div>
  <div className="line three">
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>

  </div>
    <div className="line four">
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>

  </div>
    
    <div className="line five">
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>

  </div>
    
    <div className="line six">
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>

  </div>
    
    <div className="line seven">
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>

  </div>
</button>
        </div>
        );

        export default Button_garage;
        
        
         */
}
