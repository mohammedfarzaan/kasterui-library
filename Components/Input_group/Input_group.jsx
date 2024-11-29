import React from "react";
import styles from "./Input_group.module.css";

const Input_group = () => (
  <div>
    <div className={styles["input-group"]}>
      <input placeholder="Enter new item here" type="text" id="input-field" />
      <button className={styles["submit-button"]}>
        <span>ADD</span>
      </button>
    </div>
  </div>
);

export default Input_group;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_group = () => (
         <div>
          <div className="input-group">
		<input placeholder="Enter new item here" type="text" id="input-field" />
		<button className="submit-button"><span>ADD</span></button>
	</div>
        </div>
        );

        export default Input_group;
        
        
         */
}
