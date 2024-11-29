import React from "react";
import styles from "./Radio_been.module.css";

const Radio_been = () => (
  <div>
    <div className={styles["cont"]}>
      <input name="radio" type="radio" id="r1" />
      <label for="r1"></label>
      <input name="radio" type="radio" id="r2" />
      <label for="r2"></label>
      <input checked="true" name="radio" type="radio" id="r3" />
      <label for="r3"></label>
      <div className={styles["slider"]}>
        <div className={styles["line1"]}></div>
        <div className={styles["line2"]}></div>
        <div className={styles["dot2"]}></div>
        <div className={styles["dot"]}></div>
      </div>
    </div>
    <div className={styles["cont"]}>
      <input name="radio2" type="radio" id="r4" />
      <label for="r4"></label>
      <input name="radio2" type="radio" id="r5" />
      <label for="r5"></label>
      <input checked="true" name="radio2" type="radio" id="r6" />
      <label for="r6"></label>
      <div className={styles["slider"]}>
        <div className={styles["line1"]}></div>
        <div className={styles["line2"]}></div>
        <div className={styles["dot2"]}></div>
        <div className={styles["dot"]}></div>
      </div>
    </div>
  </div>
);

export default Radio_been;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_been = () => (
         <div>
          <div className="cont">
  <input name="radio" type="radio" id="r1" />
  <label for="r1"></label>
  <input name="radio" type="radio" id="r2" />
  <label for="r2"></label>
  <input checked="true" name="radio" type="radio" id="r3" />
  <label for="r3"></label>
  <div className="slider">
    <div className="line1"></div>
    <div className="line2"></div>
    <div className="dot2"></div>
    <div className="dot"></div>
  </div>
</div>
<div className="cont">
  <input name="radio2" type="radio" id="r4" />
  <label for="r4"></label>
  <input name="radio2" type="radio" id="r5" />
  <label for="r5"></label>
  <input checked="true" name="radio2" type="radio" id="r6" />
  <label for="r6"></label>
  <div className="slider">
    <div className="line1"></div>
    <div className="line2"></div>
    <div className="dot2"></div>
    <div className="dot"></div>
  </div>
</div>
        </div>
        );

        export default Radio_been;
        
        
         */
}
