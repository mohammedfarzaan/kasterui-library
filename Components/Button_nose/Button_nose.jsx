import React from "react";
import styles from "./Button_nose.module.css";

const Button_nose = () => (
  <div>
    <button className={styles["button"]}>
      Get started
      <span className={styles["button-span"]}> ─ it's free</span>
    </button>
  </div>
);

export default Button_nose;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_nose = () => (
         <div>
          <button className="button">
  Get started
  <span className="button-span"> ─ it's free</span>
</button>
        </div>
        );

        export default Button_nose;
        
        
         */
}
