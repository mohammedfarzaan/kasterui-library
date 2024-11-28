import React from "react";
import styles from "./Button_behind.module.css";

const Button_behind = () => (
  <div>
    <button>
      <span className={styles["text"]}>FIRE !!!</span>
      <span className={styles["bullet"]}></span>
    </button>
  </div>
);

export default Button_behind;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_behind = () => (
         <div>
          <button>
  <span className="text">FIRE !!!</span>
  <span className="bullet"></span>
</button>
        </div>
        );

        export default Button_behind;
        
        
         */
}
