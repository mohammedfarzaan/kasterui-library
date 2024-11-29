import React from "react";
import styles from "./Button_route.module.css";

const Button_route = () => (
  <div>
    <div className={styles["btnContainer"]}>
      <button className={styles["button"]}>Hover Me</button>
    </div>
  </div>
);

export default Button_route;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_route = () => (
         <div>
          <div className="btnContainer">
  <button className="button">
  Hover Me
</button>
</div>
        </div>
        );

        export default Button_route;
        
        
         */
}
