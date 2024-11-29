import React from "react";
import styles from "./Input_around.module.css";

const Input_around = () => (
  <div>
    <div className={styles["inputContainer"]}>
      <input required="" className={styles["customInput"]} type="text" />
      <label className={styles["inputLabel"]}>Your Name</label>
      <div className={styles["inputUnderline"]}></div>
    </div>
  </div>
);

export default Input_around;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_around = () => (
         <div>
          <div className="inputContainer">
  <input required="" className="customInput" type="text" />
  <label className="inputLabel">Your Name</label>
  <div className="inputUnderline"></div>
</div>
        </div>
        );

        export default Input_around;
        
        
         */
}
