import React from "react";
import styles from "./Input_prove.module.css";

const Input_prove = () => (
  <div>
    <div className={styles["input-container"]}>
      <label for="name" className={styles["name"]}>
        Name:
      </label>
      <input
        placeholder="Enter your name"
        type="text"
        className={styles["input"]}
      />
      <div className={styles["underline"]}></div>
    </div>
  </div>
);

export default Input_prove;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_prove = () => (
         <div>
          <div className="input-container">
    <label for="name" className="name">Name:</label>
    <input placeholder="Enter your name" type="text" className="input" />
    <div className="underline"></div>
  </div>
        </div>
        );

        export default Input_prove;
        
        
         */
}
