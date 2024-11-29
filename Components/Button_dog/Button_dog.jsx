import React from "react";
import styles from "./Button_dog.module.css";

const Button_dog = () => (
  <div>
    <button data-label="Register" className={styles["rainbow-hover"]}>
      <span className={styles["sp"]}>Register</span>
    </button>
  </div>
);

export default Button_dog;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_dog = () => (
         <div>
          <button data-label="Register" className="rainbow-hover">
  <span className="sp">Register</span>
</button>
        </div>
        );

        export default Button_dog;
        
        
         */
}
