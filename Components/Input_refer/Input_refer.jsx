import React from "react";
import styles from "./Input_refer.module.css";

const Input_refer = () => (
  <div>
    <div className={styles["input-field"]}>
      <input required="" name="text" type="text" />
      <label>Enter your email</label>
    </div>
  </div>
);

export default Input_refer;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_refer = () => (
         <div>
          <div className="input-field">
  <input required="" name="text" type="text" />
  <label>Enter your email</label>
</div>
        </div>
        );

        export default Input_refer;
        
        
         */
}
