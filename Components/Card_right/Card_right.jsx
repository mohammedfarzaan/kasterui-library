import React from "react";
import styles from "./Card_right.module.css";

const Card_right = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["btn1"]}></div>
      <div className={styles["btn2"]}></div>
      <div className={styles["btn3"]}></div>
      <div className={styles["btn4"]}></div>
      <div className={styles["card-int"]}>
        <div className={styles["hello"]}>
          Hello
          <span className={styles["hidden"]}>uiverse</span>
        </div>
      </div>
      <div className={styles["top"]}>
        <div className={styles["camera"]}>
          <div className={styles["int"]}></div>
        </div>
        <div className={styles["speaker"]}></div>
      </div>
    </div>
  </div>
);

export default Card_right;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_right = () => (
         <div>
          <div className="card">
  
  <div className="btn1"></div>
  <div className="btn2"></div>
  <div className="btn3"></div>
  <div className="btn4"></div>
  <div className="card-int">
    <div className="hello">Hello
      <span className="hidden">uiverse</span>
    </div>
  </div>
  <div className="top">
    <div className="camera">
      <div className="int"></div>
    </div>
    <div className="speaker"></div>
  </div>
</div>
        </div>
        );

        export default Card_right;
        
        
         */
}
