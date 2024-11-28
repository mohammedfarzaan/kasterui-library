import React from "react";
import styles from "./Toggle_spider.module.css";

const Toggle_spider = () => (
  <div>
    <div className={styles["switch"]}>
      <input className={styles["switch-check"]} id="switch1" type="checkbox" />
      <label className={styles["switch-label"]} for="switch1">
        Check
        <span></span>
      </label>
    </div>
  </div>
);

export default Toggle_spider;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_spider = () => (
         <div>
          <div className="switch">
	<input className="switch-check" id="switch1" type="checkbox" />
	<label className="switch-label" for="switch1">
		Check
		<span></span>
	</label>
</div>
        </div>
        );

        export default Toggle_spider;
        
        
         */
}
