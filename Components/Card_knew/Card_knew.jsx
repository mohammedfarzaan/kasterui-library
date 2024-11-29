import React from "react";
import styles from "./Card_knew.module.css";

const Card_knew = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["container-inner"]}>
        <div className={styles["content"]}>
          <p>Do you want to Continue?</p>
        </div>
        <div className={styles["buttons"]}>
          <button className={styles["confirm"]} type="button">
            Confirm
          </button>
          <button className={styles["cancel"]} type="button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Card_knew;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_knew = () => (
         <div>
          <div className="container">
  <div className="container-inner">
    <div className="content">
      <p>Do you want to Continue?</p>
    </div>
    <div className="buttons">
      <button className="confirm" type="button">Confirm</button>
      <button className="cancel" type="button">Cancel</button>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_knew;
        
        
         */
}
