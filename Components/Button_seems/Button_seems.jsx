import React from "react";
import styles from "./Button_seems.module.css";

const Button_seems = () => (
  <div>
    <button>
      <div className={styles["arrow-up"]}></div>
    </button>
  </div>
);

export default Button_seems;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_seems = () => (
         <div>
          <button>
    <div className="arrow-up"></div>
</button>
        </div>
        );

        export default Button_seems;
        
        
         */
}
