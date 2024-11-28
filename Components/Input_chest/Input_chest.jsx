import React from "react";
import styles from "./Input_chest.module.css";

const Input_chest = () => (
  <div>
    <div className={styles["input-container"]}>
      <p className={styles["bash-text"]}>
        <span className={styles["user"]}>user</span>
        <span className={styles["vm"]}>@ui-verse</span>:
        <span className={styles["char"]}>~</span>$
      </p>
      <input
        className={styles["input"]}
        placeholder="sudo rm -rf css/"
        type="text"
      />
    </div>
  </div>
);

export default Input_chest;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_chest = () => (
         <div>
          <div className="input-container">
  <p className="bash-text">
    <span className="user">user</span><span className="vm">@ui-verse</span>:<span className="char">~</span>$
  </p>
  <input className="input" placeholder="sudo rm -rf css/" type="text" />
</div>
        </div>
        );

        export default Input_chest;
        
        
         */
}
