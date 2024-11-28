import React from "react";
import styles from "./Input_pine.module.css";

const Input_pine = () => (
  <div>
    <label
      for="usernameField"
      className={styles["usernamelabel"] + styles["label"]}
    >
      Username
    </label>
    <input type="text" placeholder="@" id="usernameField" required="required" />
  </div>
);

export default Input_pine;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_pine = () => (
         <div>
          <label for="usernameField" className="usernamelabel label">Username</label>
    <input type="text" placeholder="@" id="usernameField" required="required" />
        </div>
        );

        export default Input_pine;
        
        
         */
}
