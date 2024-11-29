import React from "react";
import styles from "./Input_five.module.css";

const Input_five = () => (
  <div>
    <div className={styles["input-group"]}>
      <input
        required=""
        type="text"
        name="text"
        autocomplete="off"
        className={styles["input"]}
      />
      <label className={styles["user-label"]}>First Name</label>
    </div>
  </div>
);

export default Input_five;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_five = () => (
         <div>
          <div className="input-group">
  <input required="" type="text" name="text" autocomplete="off" className="input" />
  <label className="user-label">First Name</label>
</div>
        </div>
        );

        export default Input_five;
        
        
         */
}
