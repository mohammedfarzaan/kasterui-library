import React from "react";
import styles from "./Input_each.module.css";

const Input_each = () => (
  <div>
    <div className={styles["form"]}>
      <input
        className={styles["input"]}
        placeholder="Type your text"
        required=""
        type="text"
      />
      <span className={styles["input-border"]}></span>
    </div>
  </div>
);

export default Input_each;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_each = () => (
         <div>
          <div className="form">
  <input className="input" placeholder="Type your text" required="" type="text" />
  <span className="input-border"></span>
</div>
        </div>
        );

        export default Input_each;
        
        
         */
}
