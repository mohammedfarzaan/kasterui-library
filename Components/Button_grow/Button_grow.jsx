import React from "react";
import styles from "./Button_grow.module.css";

const Button_grow = () => (
  <div>
    <a href="#" className={styles["ov-btn-slide-left"]}>
      Izquierda
    </a>
  </div>
);

export default Button_grow;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_grow = () => (
         <div>
          <a href="#" className="ov-btn-slide-left">Izquierda
</a>
        </div>
        );

        export default Button_grow;
        
        
         */
}
