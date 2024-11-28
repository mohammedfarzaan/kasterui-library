import React from "react";
import styles from "./Button_built.module.css";

const Button_built = () => (
  <div>
    <button className={styles["btn-white"]} href="#">
      Discover
    </button>
  </div>
);

export default Button_built;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_built = () => (
         <div>
          <button className="btn-white" href="#">
  Discover
</button>
        </div>
        );

        export default Button_built;
        
        
         */
}
