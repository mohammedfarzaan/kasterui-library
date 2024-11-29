import React from "react";
import styles from "./Input_dark.module.css";

const Input_dark = () => (
  <div>
    <div className={styles["inputGroup"]}>
      <input type="text" required="" autocomplete="off" />
      <label for="name">Name</label>
    </div>
  </div>
);

export default Input_dark;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_dark = () => (
         <div>
          <div className="inputGroup">
    <input type="text" required="" autocomplete="off" />
    <label for="name">Name</label>
</div>
        </div>
        );

        export default Input_dark;
        
        
         */
}
