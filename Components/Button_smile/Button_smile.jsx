import React from "react";
import styles from "./Button_smile.module.css";

const Button_smile = () => (
  <div>
    <button className={styles["shadow__btn"]}>uiverse</button>
  </div>
);

export default Button_smile;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_smile = () => (
         <div>
          <button className="shadow__btn">
    uiverse
</button>
        </div>
        );

        export default Button_smile;
        
        
         */
}
