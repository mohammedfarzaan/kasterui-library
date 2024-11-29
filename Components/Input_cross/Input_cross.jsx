import React from "react";
import styles from "./Input_cross.module.css";

const Input_cross = () => (
  <div>
    <div className={styles["input"]}>
      <input type="text" required="" autocomplete="off" />
      <label for="name">Username</label>
    </div>
  </div>
);

export default Input_cross;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_cross = () => (
         <div>
          <div className="input">
    <input type="text" required="" autocomplete="off" />
    <label for="name">Username</label>
</div>
        </div>
        );

        export default Input_cross;
        
        
         */
}
