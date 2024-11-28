import React from "react";
import styles from "./Input_near.module.css";

const Input_near = () => (
  <div>
    <div className={styles["input-field"]}>
      <input required="" name="text" type="text" />
      <label>Enter your email</label>
    </div>
  </div>
);

export default Input_near;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_near = () => (
         <div>
          <div className="input-field">
  <input required="" name="text" type="text" />
  <label>Enter your email</label>
</div>
        </div>
        );

        export default Input_near;
        
        
         */
}
