import React from "react";
import styles from "./Input_wild.module.css";

const Input_wild = () => (
  <div>
    <div className={styles["group"]}>
      <input required="" type="text" className={styles["input"]} />
      <span className={styles["highlight"]}></span>
      <span className={styles["bar"]}></span>
      <label>Name</label>
    </div>
  </div>
);

export default Input_wild;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_wild = () => (
         <div>
          <div className="group">
  <input required="" type="text" className="input" />
  <span className="highlight"></span>
  <span className="bar"></span>
  <label>Name</label>
</div>
        </div>
        );

        export default Input_wild;
        
        
         */
}
