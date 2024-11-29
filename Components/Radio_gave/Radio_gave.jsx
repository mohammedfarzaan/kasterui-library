import React from "react";
import styles from "./Radio_gave.module.css";

const Radio_gave = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["line"]}></div>
      <label className={styles["label"]} for="alien">
        <input id="alien" type="radio" name="future-is-here" checked="" />
        <div className={styles["button"]}>
          <span className={styles["shadow"]}></span>
          <span className={styles["edge"]}></span>
          <span className={styles["front"] + styles["text"]}></span>
        </div>
      </label>
      <label className={styles["label"]} for="bear">
        <input id="bear" type="radio" name="future-is-here" />
        <div className={styles["button"]}>
          <span className={styles["shadow"]}></span>
          <span className={styles["edge"]}></span>
          <span className={styles["front"] + styles["text"]}></span>
        </div>
      </label>
      <label className={styles["label"]} for="mickey">
        <input id="mickey" type="radio" name="future-is-here" />
        <div className={styles["button"]}>
          <span className={styles["shadow"]}></span>
          <span className={styles["edge"]}></span>
          <span className={styles["front"] + styles["text"]}></span>
        </div>
      </label>
    </div>
  </div>
);

export default Radio_gave;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_gave = () => (
         <div>
          <div className="container">
  <div className="line"></div>
  <label className="label" for="alien">
    <input id="alien" type="radio" name="future-is-here" checked="" />
    <div className="button">
      <span className="shadow"></span>
  <span className="edge"></span>
  <span className="front text">
  </span>
    </div>
  </label>
  <label className="label" for="bear">
    <input id="bear" type="radio" name="future-is-here" />
    <div className="button">
      <span className="shadow"></span>
  <span className="edge"></span>
  <span className="front text">
  </span>
    </div>
  </label>
  <label className="label" for="mickey">
    <input id="mickey" type="radio" name="future-is-here" />
    <div className="button">
      <span className="shadow"></span>
  <span className="edge"></span>
  <span className="front text">
  </span>
    </div>
  </label>
</div>
        </div>
        );

        export default Radio_gave;
        
        
         */
}
