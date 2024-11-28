import React from "react";
import styles from "./Input_brick.module.css";

const Input_brick = () => (
  <div>
    <div className={styles["input-container"]}>
      <input required="" placeholder="Email Address" type="email" />
      <button className={styles["invite-btn"]} type="button">
        Invite
      </button>
    </div>
  </div>
);

export default Input_brick;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_brick = () => (
         <div>
          <div className="input-container">
  <input required="" placeholder="Email Address" type="email" />
  <button className="invite-btn" type="button">
    Invite
  </button>
 
</div>
        </div>
        );

        export default Input_brick;
        
        
         */
}
