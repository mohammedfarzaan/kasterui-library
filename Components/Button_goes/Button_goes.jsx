import React from "react";
import styles from "./Button_goes.module.css";

const Button_goes = () => (
  <div>
    <button>
      <span className={styles["main-text"]}>
        Next Step
        <span>
          {" "}
          <span>→</span>{" "}
        </span>
      </span>
    </button>
  </div>
);

export default Button_goes;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_goes = () => (
         <div>
          <button><span className="main-text">Next Step<span> <span>→</span> </span></span></button>
        </div>
        );

        export default Button_goes;
        
        
         */
}
