import React from "react";
import styles from "./Input_twice.module.css";

const Input_twice = () => (
  <div>
    <div className={styles["container"]}>
      <input required="" type="text" name="text" className={styles["input"]} />
      <label className={styles["label"]}>Username</label>
    </div>
  </div>
);

export default Input_twice;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_twice = () => (
         <div>
          <div className="container">
  <input required="" type="text" name="text" className="input" />
  <label className="label">Username</label>
</div>
        </div>
        );

        export default Input_twice;
        
        
         */
}
