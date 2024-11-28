import React from "react";
import styles from "./Input_being.module.css";

const Input_being = () => (
  <div>
    <div className={styles["container"]}>
      <input required="required" className={styles["inp"]} />
      <span className={styles["content"]}>Content</span>
    </div>
  </div>
);

export default Input_being;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_being = () => (
         <div>
          <div className="container">
  <input required="required" className="inp" />
  <span className="content">Content</span>
</div>
        </div>
        );

        export default Input_being;
        
        
         */
}
