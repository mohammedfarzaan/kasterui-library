import React from "react";
import styles from "./Radio_window.module.css";

const Radio_window = () => (
  <div>
    <div className={styles["wrapper"]}>
      <div className={styles["option"]}>
        <input
          className={styles["input"]}
          type="radio"
          name="btn"
          value="option1"
          checked=""
        />
        <div className={styles["btn"]}>
          <span className={styles["span"]}>Option</span>
        </div>
      </div>
      <div className={styles["option"]}>
        <input
          className={styles["input"]}
          type="radio"
          name="btn"
          value="option2"
        />
        <div className={styles["btn"]}>
          <span className={styles["span"]}>Option</span>
        </div>{" "}
      </div>
      <div className={styles["option"]}>
        <input
          className={styles["input"]}
          type="radio"
          name="btn"
          value="option3"
        />
        <div className={styles["btn"]}>
          <span className={styles["span"]}>Option</span>
        </div>
      </div>
    </div>
  </div>
);

export default Radio_window;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_window = () => (
         <div>
          <div className="wrapper">
  <div className="option">
    <input className="input" type="radio" name="btn" value="option1" checked="" />
    <div className="btn">
      <span className="span">Option</span>
    </div>
  </div>
  <div className="option">
    <input className="input" type="radio" name="btn" value="option2" />
    <div className="btn">
      <span className="span">Option</span>
    </div>  </div>
  <div className="option">
    <input className="input" type="radio" name="btn" value="option3" />
    <div className="btn">
      <span className="span">Option</span>
    </div>  
  </div>
</div>
        </div>
        );

        export default Radio_window;
        
        
         */
}
