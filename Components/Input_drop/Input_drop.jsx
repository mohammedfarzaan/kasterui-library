import React from "react";
import styles from "./Input_drop.module.css";

const Input_drop = () => (
  <div>
    <div className={styles["formContainer"]}>
      <input placeholder="example@email.com" type="text" />
      <label>Email</label>
    </div>
  </div>
);

export default Input_drop;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_drop = () => (
         <div>
          <div className="formContainer">
  <input placeholder="example@email.com" type="text" />
  <label>Email</label>
</div>
        </div>
        );

        export default Input_drop;
        
        
         */
}
