import React from "react";
import styles from "./Button_dinner.module.css";

const Button_dinner = () => (
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

export default Button_dinner;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_dinner = () => (
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

        export default Button_dinner;
        
        
         */
}
