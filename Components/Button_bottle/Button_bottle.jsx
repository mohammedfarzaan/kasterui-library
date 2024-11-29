import React from "react";
import styles from "./Button_bottle.module.css";

const Button_bottle = () => (
  <div>
    <div className={styles["button-borders"]}>
      <button className={styles["primary-button"]}> BUTTON</button>
    </div>
  </div>
);

export default Button_bottle;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_bottle = () => (
         <div>
          <div className="button-borders">
  <button className="primary-button"> BUTTON
  </button>
</div>
        </div>
        );

        export default Button_bottle;
        
        
         */
}
