import React from "react";
import styles from "./Button_order.module.css";

const Button_order = () => (
  <div>
    <button className={styles["btn-white"]} href="#">
      Discover
    </button>
  </div>
);

export default Button_order;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_order = () => (
         <div>
          <button className="btn-white" href="#">
  Discover
</button>
        </div>
        );

        export default Button_order;
        
        
         */
}
