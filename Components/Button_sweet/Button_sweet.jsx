import React from "react";
import styles from "./Button_sweet.module.css";

const Button_sweet = () => (
  <div>
    <button className={styles["button"]}>
      <p className={styles["text-inside"]}>HOVER ME</p>
    </button>
  </div>
);

export default Button_sweet;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_sweet = () => (
         <div>
          <button className="button">
  <p className="text-inside">HOVER ME</p>
</button>
        </div>
        );

        export default Button_sweet;
        
        
         */
}
