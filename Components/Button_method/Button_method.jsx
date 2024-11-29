import React from "react";
import styles from "./Button_method.module.css";

const Button_method = () => (
  <div>
    <div className={styles["paste-button"]}>
      <button className={styles["button"]}>Paste &nbsp; ▼</button>
      <div className={styles["dropdown-content"]}>
        <a id="top" href="#">
          Keep source formatting
        </a>
        <a id="middle" href="#">
          Merge formatting
        </a>
        <a id="bottom" href="#">
          Keep text only
        </a>
      </div>
    </div>
  </div>
);

export default Button_method;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_method = () => (
         <div>
          <div className="paste-button">
  <button className="button">Paste &nbsp; ▼</button>
  <div className="dropdown-content">
    <a id="top" href="#">Keep source formatting</a>
    <a id="middle" href="#">Merge formatting</a>
    <a id="bottom" href="#">Keep text only</a>
  </div>
</div>
        </div>
        );

        export default Button_method;
        
        
         */
}
