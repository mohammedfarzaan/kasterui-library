import React from "react";
import styles from "./Button_than.module.css";

const Button_than = () => (
  <div>
    <button className={styles["icon-btn"] + styles["add-btn"]}>
      <div className={styles["add-icon"]}></div>
      <div className={styles["btn-txt"]}>Add Photo</div>
    </button>
  </div>
);

export default Button_than;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_than = () => (
         <div>
          <button className="icon-btn add-btn">
    <div className="add-icon"></div>
    <div className="btn-txt">Add Photo</div>
</button>
        </div>
        );

        export default Button_than;
        
        
         */
}
