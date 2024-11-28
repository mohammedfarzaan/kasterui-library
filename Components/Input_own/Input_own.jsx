import React from "react";
import styles from "./Input_own.module.css";

const Input_own = () => (
  <div>
    <form className={styles["container"]} action="">
      <div className={styles["input-container"]}>
        <div className={styles["input-content"]}>
          <div className={styles["input-dist"]}>
            <div className={styles["input-type"]}>
              <input
                className={styles["input-is"]}
                type="text"
                required=""
                placeholder="User"
              />
              <input
                className={styles["input-is"]}
                type="password"
                required=""
                placeholder="Password"
              />
            </div>
          </div>
        </div>
      </div>
      <button className={styles["submit-button"]}>Log in</button>
    </form>
  </div>
);

export default Input_own;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_own = () => (
         <div>
          <form className="container" action="">
  <div className="input-container">
    <div className="input-content">
      <div className="input-dist">
        <div className="input-type">
          <input className="input-is" type="text" required="" placeholder="User" />
          <input
            className="input-is"
            type="password"
            required=""
            placeholder="Password"
          />
        </div>
      </div>
    </div>
  </div>
  <button className="submit-button">Log in</button>
</form>
        </div>
        );

        export default Input_own;
        
        
         */
}
