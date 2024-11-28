import React from "react";
import styles from "./Button_stand.module.css";

const Button_stand = () => (
  <div>
    <a className={styles["custom-btn"] + styles["secondary-color"]} href="#">
      <span>hover me</span>
    </a>
  </div>
);

export default Button_stand;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_stand = () => (
         <div>
          <a className="custom-btn secondary-color" href="#">
  <span>
    hover me
  </span>
</a>
        </div>
        );

        export default Button_stand;
        
        
         */
}
