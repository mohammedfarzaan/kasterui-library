import React from "react";
import styles from "./Button_extra.module.css";

const Button_extra = () => (
  <div>
    <button className={styles["arc-btn-retro"]}>Submit</button>
  </div>
);

export default Button_extra;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_extra = () => (
         <div>
          <button className="arc-btn-retro">
  Submit
</button>
        </div>
        );

        export default Button_extra;
        
        
         */
}
