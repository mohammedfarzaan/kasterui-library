import React from "react";
import styles from "./Toggle_wooden.module.css";

const Toggle_wooden = () => (
  <div>
    <div className={styles["btn-container"]}>
      <label className={styles["switch"] + styles["btn-color-mode-switch"]}>
        <input value="1" id="color_mode" name="color_mode" type="checkbox" />
        <label
          className={styles["btn-color-mode-switch-inner"]}
          data-off="AM"
          data-on="PM"
          for="color_mode"
        ></label>
      </label>
    </div>
  </div>
);

export default Toggle_wooden;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_wooden = () => (
         <div>
          <div className="btn-container">
	
			<label className="switch btn-color-mode-switch">
		        <input value="1" id="color_mode" name="color_mode" type="checkbox" />
		        <label className="btn-color-mode-switch-inner" data-off="AM" data-on="PM" for="color_mode"></label>
		    </label>
        
	</div>
        </div>
        );

        export default Toggle_wooden;
        
        
         */
}
