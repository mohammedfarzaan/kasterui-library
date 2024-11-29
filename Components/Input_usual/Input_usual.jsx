import React from "react";
import styles from "./Input_usual.module.css";

const Input_usual = () => (
  <div>
    <input
      className={styles["input"]}
      name="text"
      type="text"
      placeholder="Name"
    />
  </div>
);

export default Input_usual;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_usual = () => (
         <div>
          <input className="input" name="text" type="text" placeholder="Name" />
        </div>
        );

        export default Input_usual;
        
        
         */
}
