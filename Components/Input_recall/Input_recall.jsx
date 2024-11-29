import React from "react";
import styles from "./Input_recall.module.css";

const Input_recall = () => (
  <div>
    <input
      placeholder="Enter  password..."
      name="text"
      type="password"
      className={styles["password"]}
    />
  </div>
);

export default Input_recall;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_recall = () => (
         <div>
          <input placeholder="Enter  password..." name="text" type="password" className="password" />
        </div>
        );

        export default Input_recall;
        
        
         */
}
