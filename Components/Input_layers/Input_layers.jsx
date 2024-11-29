import React from "react";
import styles from "./Input_layers.module.css";

const Input_layers = () => (
  <div>
    <input
      placeholder="Searth the internet..."
      type="text"
      name="text"
      className={styles["input"]}
    />
  </div>
);

export default Input_layers;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_layers = () => (
         <div>
          <input placeholder="Searth the internet..." type="text" name="text" className="input" />
        </div>
        );

        export default Input_layers;
        
        
         */
}
