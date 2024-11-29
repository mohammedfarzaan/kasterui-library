import React from "react";
import styles from "./Radio_easily.module.css";

const Radio_easily = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["tabs"]}>
        <input type="radio" id="radio-1" name="tabs" checked="" />
        <label className={styles["tab"]} for="radio-1">
          Hello<span className={styles["notification"]}>2</span>
        </label>
        <input type="radio" id="radio-2" name="tabs" />
        <label className={styles["tab"]} for="radio-2">
          UI
        </label>
        <input type="radio" id="radio-3" name="tabs" />
        <label className={styles["tab"]} for="radio-3">
          World
        </label>
        <span className={styles["glider"]}></span>
      </div>
    </div>
  </div>
);

export default Radio_easily;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_easily = () => (
         <div>
          <div className="container">
	<div className="tabs">
		<input type="radio" id="radio-1" name="tabs" checked="" />
		<label className="tab" for="radio-1">Hello<span className="notification">2</span></label>
		<input type="radio" id="radio-2" name="tabs" />
		<label className="tab" for="radio-2">UI</label>
		<input type="radio" id="radio-3" name="tabs" />
		<label className="tab" for="radio-3">World</label>
		<span className="glider"></span>
	</div>
</div>
        </div>
        );

        export default Radio_easily;
        
        
         */
}
