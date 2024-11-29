import React from "react";
import styles from "./Input_map.module.css";

const Input_map = () => (
  <div>
    <input
      placeholder="Enter your email"
      className={styles["input"]}
      name="email"
      type="email"
    />
    <button className={styles["button"]}>Subscribe</button>
  </div>
);

export default Input_map;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_map = () => (
         <div>
          <input placeholder="Enter your email" className="input" name="email" type="email" />
   <button className="button">Subscribe</button>
        </div>
        );

        export default Input_map;
        
        
         */
}
