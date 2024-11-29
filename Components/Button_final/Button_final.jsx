import React from "react";
import styles from "./Button_final.module.css";

const Button_final = () => (
  <div>
    <button>
      <span className={styles["TxtEffect"]}>BUTTON</span>
    </button>
  </div>
);

export default Button_final;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_final = () => (
         <div>
          <button>
    <span className="TxtEffect">BUTTON</span>
</button>
        </div>
        );

        export default Button_final;
        
        
         */
}
