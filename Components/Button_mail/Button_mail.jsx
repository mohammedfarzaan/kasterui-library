import React from "react";
import styles from "./Button_mail.module.css";

const Button_mail = () => (
  <div>
    <button className={styles["btn"] + styles["btn-1"]}>Hover Me!</button>
  </div>
);

export default Button_mail;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_mail = () => (
         <div>
          <button className="btn btn-1">Hover Me!</button>
        </div>
        );

        export default Button_mail;
        
        
         */
}