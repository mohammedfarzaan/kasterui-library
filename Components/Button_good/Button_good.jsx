import React from "react";
import styles from "./Button_good.module.css";

const Button_good = () => (
  <div>
    <button>
      <div>Space</div>
      <div className={styles["liquid"]}></div>
    </button>
  </div>
);

export default Button_good;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_good = () => (
         <div>
          <button>
    <div>Space</div>
    <div className="liquid"></div>
</button>
        </div>
        );

        export default Button_good;
        
        
         */
}
