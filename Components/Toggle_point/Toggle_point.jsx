import React from "react";
import styles from "./Toggle_point.module.css";

const Toggle_point = () => (
  <div>
    <label className={styles["switch"]}>
      <input type="checkbox" className={styles["chbox"]} />
      <div className={styles["slider"] + styles["slider--0"]}>ON</div>
      <div className={styles["slider"] + styles["slider--1"]}>
        <div></div>
        <div></div>
      </div>
      <div className={styles["slider"] + styles["slider--2"]}></div>
      <div className={styles["slider"] + styles["slider--3"]}>OFF</div>
    </label>
  </div>
);

export default Toggle_point;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_point = () => (
         <div>
          <label className="switch">
	<input type="checkbox" className="chbox" />
	<div className="slider slider--0">ON</div>
	<div className="slider slider--1">
		<div></div>
		<div></div>
	</div>
	<div className="slider slider--2"></div>
	<div className="slider slider--3">OFF</div>
</label>
        </div>
        );

        export default Toggle_point;
        
        
         */
}
