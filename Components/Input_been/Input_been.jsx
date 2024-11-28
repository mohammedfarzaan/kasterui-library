import React from "react";
import styles from "./Input_been.module.css";

const Input_been = () => (
  <div>
    <p className={styles["input-container"]}>
      <input
        type="text"
        placeholder="Enter your name"
        name="text"
        id="text"
        className={styles["input-field"]}
        autocomplete="name"
      />
      <label className={styles["input-label"]} for="text">
        Name
      </label>
    </p>
  </div>
);

export default Input_been;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_been = () => (
         <div>
          <p className="input-container">
    <input type="text" placeholder="Enter your name" name="text" id="text" className="input-field" autocomplete="name" />
    <label className="input-label" for="text">Name</label>
</p>
        </div>
        );

        export default Input_been;
        
        
         */
}
