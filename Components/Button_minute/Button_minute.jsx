import React from "react";
import styles from "./Button_minute.module.css";

const Button_minute = () => (
  <div>
    <button className={styles["btn"]}>
      <div className={styles["wrapper"]}>
        <p className={styles["text"]}>Flowers </p>

        <div className={styles["flower"] + styles["flower1"]}>
          <div className={styles["petal"] + styles["one"]}></div>
          <div className={styles["petal"] + styles["two"]}></div>
          <div className={styles["petal"] + styles["three"]}></div>
          <div className={styles["petal"] + styles["four"]}></div>
        </div>
        <div className={styles["flower"] + styles["flower2"]}>
          <div className={styles["petal"] + styles["one"]}></div>
          <div className={styles["petal"] + styles["two"]}></div>
          <div className={styles["petal"] + styles["three"]}></div>
          <div className={styles["petal"] + styles["four"]}></div>
        </div>
        <div className={styles["flower"] + styles["flower3"]}>
          <div className={styles["petal"] + styles["one"]}></div>
          <div className={styles["petal"] + styles["two"]}></div>
          <div className={styles["petal"] + styles["three"]}></div>
          <div className={styles["petal"] + styles["four"]}></div>
        </div>
        <div className={styles["flower"] + styles["flower4"]}>
          <div className={styles["petal"] + styles["one"]}></div>
          <div className={styles["petal"] + styles["two"]}></div>
          <div className={styles["petal"] + styles["three"]}></div>
          <div className={styles["petal"] + styles["four"]}></div>
        </div>
        <div className={styles["flower"] + styles["flower5"]}>
          <div className={styles["petal"] + styles["one"]}></div>
          <div className={styles["petal"] + styles["two"]}></div>
          <div className={styles["petal"] + styles["three"]}></div>
          <div className={styles["petal"] + styles["four"]}></div>
        </div>
        <div className={styles["flower"] + styles["flower6"]}>
          <div className={styles["petal"] + styles["one"]}></div>
          <div className={styles["petal"] + styles["two"]}></div>
          <div className={styles["petal"] + styles["three"]}></div>
          <div className={styles["petal"] + styles["four"]}></div>
        </div>
      </div>
    </button>
  </div>
);

export default Button_minute;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_minute = () => (
         <div>
          <button className="btn">
    <div className="wrapper">
        <p className="text">Flowers </p>

        <div className="flower flower1">
            <div className="petal one"></div>
            <div className="petal two"></div>
            <div className="petal three"></div>
            <div className="petal four"></div>
        </div>
        <div className="flower flower2">
            <div className="petal one"></div>
            <div className="petal two"></div>
            <div className="petal three"></div>
            <div className="petal four"></div>
        </div>
        <div className="flower flower3">
            <div className="petal one"></div>
            <div className="petal two"></div>
            <div className="petal three"></div>
            <div className="petal four"></div>
        </div>
        <div className="flower flower4">
            <div className="petal one"></div>
            <div className="petal two"></div>
            <div className="petal three"></div>
            <div className="petal four"></div>
        </div>
        <div className="flower flower5">
            <div className="petal one"></div>
            <div className="petal two"></div>
            <div className="petal three"></div>
            <div className="petal four"></div>
        </div>
        <div className="flower flower6">
            <div className="petal one"></div>
            <div className="petal two"></div>
            <div className="petal three"></div>
            <div className="petal four"></div>
        </div>
    </div>
</button>
        </div>
        );

        export default Button_minute;
        
        
         */
}
