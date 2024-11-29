import React from "react";
import styles from "./Toggle_pine.module.css";

const Toggle_pine = () => (
  <div>
    <div className={styles["checkbox-wrap"]}>
      <input name="slide" id="slide" type="checkbox" />
      <label for="slide">
        <div id="pinkliquid">
          <div id="shine-one" className={styles["shine"]}></div>
          <div id="shine-two" className={styles["shine"]}></div>
          <div id="bubbles"></div>
        </div>
        <div id="circle">
          <div id="inner-circle"></div>
          <div id="inner-circle-two"></div>
        </div>
      </label>
    </div>
  </div>
);

export default Toggle_pine;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_pine = () => (
         <div>
          <div className="checkbox-wrap">
  <input name="slide" id="slide" type="checkbox" />
  <label for="slide">
    <div id="pinkliquid">
      <div id="shine-one" className="shine"></div>
      <div id="shine-two" className="shine"></div>
      <div id="bubbles"></div>
    </div>
    <div id="circle">
      <div id="inner-circle"></div>
      <div id="inner-circle-two"></div>
    </div>
  </label>
</div>
        </div>
        );

        export default Toggle_pine;
        
        
         */
}
