import React from "react";
import styles from "./Input_outer.module.css";

const Input_outer = () => (
  <div>
    <div className={styles["input-box"]}>
      <label className={styles["input-label"]}>Email</label>
      <input
        placeholder="user@mail.com"
        className={styles["input"]}
        name="email"
        type="email"
      />
      <span className={styles["input-helper"]}>enter a valid email</span>
    </div>
  </div>
);

export default Input_outer;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_outer = () => (
         <div>
          <div className="input-box">
  <label className="input-label">Email</label>
  <input placeholder="user@mail.com" className="input" name="email" type="email" />
  <span className="input-helper">enter a valid email</span>
</div>
        </div>
        );

        export default Input_outer;
        
        
         */
}
