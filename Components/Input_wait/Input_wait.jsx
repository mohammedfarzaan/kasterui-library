import React from "react";
import styles from "./Input_wait.module.css";

const Input_wait = () => (
  <div>
    <div className={styles["input__container"]}>
      <label className={styles["input__label"]}>Username</label>
      <input
        placeholder="Enter your username"
        className={styles["input"]}
        name="text"
        type="text"
      />
      <p className={styles["input__description"]}>
        What do you want to call yourself?
      </p>
    </div>
  </div>
);

export default Input_wait;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_wait = () => (
         <div>
          <div className="input__container">
  <label className="input__label">Username</label>
  <input placeholder="Enter your username" className="input" name="text" type="text" />
  <p className="input__description">What do you want to call yourself?</p>
</div>
        </div>
        );

        export default Input_wait;
        
        
         */
}
