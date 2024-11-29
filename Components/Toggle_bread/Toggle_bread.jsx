import React from "react";
import styles from "./Toggle_bread.module.css";

const Toggle_bread = () => (
  <div>
    <div className={styles["checkbox-wrapper-35"]}>
      <input
        value="private"
        name="switch"
        id="switch"
        type="checkbox"
        className={styles["switch"]}
      />
      <label for="switch">
        <span className={styles["switch-x-text"]}>This is </span>
        <span className={styles["switch-x-toggletext"]}>
          <span className={styles["switch-x-unchecked"]}>
            <span className={styles["switch-x-hiddenlabel"]}>Unchecked: </span>
            Off
          </span>
          <span className={styles["switch-x-checked"]}>
            <span className={styles["switch-x-hiddenlabel"]}>Checked: </span>On
          </span>
        </span>
      </label>
    </div>
  </div>
);

export default Toggle_bread;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_bread = () => (
         <div>
          <div className="checkbox-wrapper-35">
  <input value="private" name="switch" id="switch" type="checkbox" className="switch" />
  <label for="switch">
    <span className="switch-x-text">This is </span>
    <span className="switch-x-toggletext">
      <span className="switch-x-unchecked"><span className="switch-x-hiddenlabel">Unchecked: </span>Off</span>
      <span className="switch-x-checked"><span className="switch-x-hiddenlabel">Checked: </span>On</span>
    </span>
  </label>
</div>
        </div>
        );

        export default Toggle_bread;
        
        
         */
}
