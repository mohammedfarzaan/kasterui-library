import React from "react";
import styles from "./Button_store.module.css";

const Button_store = () => (
  <div>
    <button className={styles["button"]} role="button">
      Hover Me
    </button>
  </div>
);

export default Button_store;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_store = () => (
         <div>
          <button className="button" role="button">Hover Me</button>
        </div>
        );

        export default Button_store;
        
        
         */
}
