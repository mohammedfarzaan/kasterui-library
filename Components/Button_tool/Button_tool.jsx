import React from "react";
import styles from "./Button_tool.module.css";

const Button_tool = () => (
  <div>
    <div className={styles["installer"]}>
      <label for="progressLinux">
        <input id="progressLinux" type="radio" />
        <span></span>
      </label>
    </div>
  </div>
);

export default Button_tool;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_tool = () => (
         <div>
          <div className="installer">
	<label for="progressLinux"><input id="progressLinux" type="radio" /><span></span></label>
</div>
        </div>
        );

        export default Button_tool;
        
        
         */
}
