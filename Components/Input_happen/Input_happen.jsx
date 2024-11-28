import React from "react";
import styles from "./Input_happen.module.css";

const Input_happen = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["title"]}>Title</div>
      <input className={styles["input"]} name="text" type="text" />
    </div>
  </div>
);

export default Input_happen;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_happen = () => (
         <div>
          <div className="container">

  <div className="title">Title</div>
  <input className="input" name="text" type="text" />
  
</div>
        </div>
        );

        export default Input_happen;
        
        
         */
}
