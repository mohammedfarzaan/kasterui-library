import React from "react";
import styles from "./Input_motion.module.css";

const Input_motion = () => (
  <div>
    <input
      type="text"
      name="text"
      className={styles["input"]}
      placeholder="Username"
    />
  </div>
);

export default Input_motion;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_motion = () => (
         <div>
          <input type="text" name="text" className="input" placeholder="Username" />
        </div>
        );

        export default Input_motion;
        
        
         */
}
