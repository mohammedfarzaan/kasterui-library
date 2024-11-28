import React from "react";
import styles from "./Button_pony.module.css";

const Button_pony = () => (
  <div>
    <button className={styles["btn"]}>DOWNLOAD</button>
  </div>
);

export default Button_pony;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_pony = () => (
         <div>
          <button className="btn">
  DOWNLOAD
</button>
        </div>
        );

        export default Button_pony;
        
        
         */
}
