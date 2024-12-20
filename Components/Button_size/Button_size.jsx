import React from "react";
import styles from "./Button_size.module.css";

const Button_size = () => (
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

export default Button_size;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_size = () => (
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

        export default Button_size;
        
        
         */
}
