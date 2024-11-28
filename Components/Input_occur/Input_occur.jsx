import React from "react";
import styles from "./Input_occur.module.css";

const Input_occur = () => (
  <div>
    <input
      placeholder="NAME"
      type="text"
      name="text"
      className={styles["custom-input"]}
    />
  </div>
);

export default Input_occur;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_occur = () => (
         <div>
          <input placeholder="NAME" type="text" name="text" className="custom-input" />
        </div>
        );

        export default Input_occur;
        
        
         */
}
