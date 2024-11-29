import React from "react";
import styles from "./Button_label.module.css";

const Button_label = () => (
  <div>
    <button type="button" className={styles["btn"]}>
      <div className={styles["smoke"]}>
        <div className={styles["cloud"]}></div>
        <div className={styles["cloud"]}></div>
        <div className={styles["cloud"]}></div>
        <div className={styles["cloud"]}></div>
        <div className={styles["cloud"]}></div>
        <div className={styles["cloud"]}></div>
        <div className={styles["cloud"]}></div>
        <div className={styles["cloud"]}></div>
        <div className={styles["cloud"]}></div>
        <div className={styles["cloud"]}></div>
        <div className={styles["cloud"]}></div>
        <div className={styles["cloud"]}></div>
        <div className={styles["cloud"]}></div>
        <div className={styles["cloud"]}></div>
      </div>
      <div className={styles["title"]}>
        <span className={styles["thunder"]}>⚡</span>
        <strong className={styles["description"]}>Join now</strong>
      </div>
      <div className={styles["glass"]}>
        <div className={styles["inner-glass"]}></div>
      </div>
    </button>
  </div>
);

export default Button_label;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_label = () => (
         <div>
          <button type="button" className="btn">
  <div className="smoke">
    <div className="cloud"></div>
    <div className="cloud"></div>
    <div className="cloud"></div>
    <div className="cloud"></div>
    <div className="cloud"></div>
    <div className="cloud"></div>
    <div className="cloud"></div>
    <div className="cloud"></div>
    <div className="cloud"></div>
    <div className="cloud"></div>
    <div className="cloud"></div>
    <div className="cloud"></div>
    <div className="cloud"></div>
    <div className="cloud"></div>
  </div>
  <div className="title">
    <span className="thunder">⚡</span>
    <strong className="description">Join now</strong>
  </div>
  <div className="glass">
    <div className="inner-glass"></div>
  </div>
</button>
        </div>
        );

        export default Button_label;
        
        
         */
}
