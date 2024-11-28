import React from "react";
import styles from "./Input_equal.module.css";

const Input_equal = () => (
  <div>
    <div className={styles["input-container"]}>
      <input
        className={styles["input"]}
        name="text"
        type="text"
        placeholder="Search the internet..."
      />
    </div>
  </div>
);

export default Input_equal;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_equal = () => (
         <div>
          <div className="input-container">
  <input
    className="input"
    name="text"
    type="text"
    placeholder="Search the internet..."
  />
</div>
        </div>
        );

        export default Input_equal;
        
        
         */
}
