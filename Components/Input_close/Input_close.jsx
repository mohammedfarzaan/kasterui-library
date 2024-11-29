import React from "react";
import styles from "./Input_close.module.css";

const Input_close = () => (
  <div>
    <div className={styles["input-group"]}>
      <label className={styles["label"]}>Email address</label>
      <input
        autocomplete="off"
        name="Email"
        id="Email"
        className={styles["input"]}
        type="email"
      />
      <div></div>
    </div>
  </div>
);

export default Input_close;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_close = () => (
         <div>
          <div className="input-group">
    <label className="label">Email address</label>
    <input autocomplete="off" name="Email" id="Email" className="input" type="email" />
    <div></div></div>
        </div>
        );

        export default Input_close;
        
        
         */
}
