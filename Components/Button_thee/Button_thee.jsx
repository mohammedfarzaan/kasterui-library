import React from "react";
import styles from "./Button_thee.module.css";

const Button_thee = () => (
  <div>
    <button>
      <span className={styles["text"]}>Hover me</span>
      <span>Thanks!</span>
    </button>
  </div>
);

export default Button_thee;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_thee = () => (
         <div>
          <button><span className="text">Hover me</span><span>Thanks!</span></button>
        </div>
        );

        export default Button_thee;
        
        
         */
}
