import React from "react";
import styles from "./Input_wind.module.css";

const Input_wind = () => (
  <div>
    <div className={styles["input-container"]}>
      <input
        className={styles["input"]}
        name="text"
        type="text"
        placeholder="Search the internet..."
      />
    </div>
  </div>
);

export default Input_wind;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_wind = () => (
         <div>
          <div className="input-container">
  <input
    className="input"
    name="text"
    type="text"
    placeholder="Search the internet..."
  />
</div>
        </div>
        );

        export default Input_wind;
        
        
         */
}
