import React from "react";
import styles from "./Input_zipper.module.css";

const Input_zipper = () => (
  <div>
    <input
      type="password"
      name="text"
      className={styles["input"]}
      pattern="\d+"
      placeholder="Numbers only or shake"
    />
  </div>
);

export default Input_zipper;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_zipper = () => (
         <div>
          <input type="password" name="text" className="input" pattern="\d+" placeholder="Numbers only or shake" />
        </div>
        );

        export default Input_zipper;
        
        
         */
}
