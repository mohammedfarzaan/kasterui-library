import React from "react";
import styles from "./Input_yes.module.css";

const Input_yes = () => (
  <div>
    <input
      id="myRange"
      className={styles["slider"]}
      value="50"
      max="100"
      min="0"
      type="range"
    />
  </div>
);

export default Input_yes;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_yes = () => (
         <div>
          <input id="myRange" className="slider" value="50" max="100" min="0" type="range" />
        </div>
        );

        export default Input_yes;
        
        
         */
}
