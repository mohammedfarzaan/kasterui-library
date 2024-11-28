import React from "react";
import styles from "./Input_did.module.css";

const Input_did = () => (
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

export default Input_did;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_did = () => (
         <div>
          <div className="input-group">
  <input required="" type="text" name="text" autocomplete="off" className="input" />
  <label className="user-label">First Name</label>
</div>
        </div>
        );

        export default Input_did;
        
        
         */
}
