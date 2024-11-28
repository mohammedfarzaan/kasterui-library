import React from "react";
import styles from "./Button_chief.module.css";

const Button_chief = () => (
  <div>
    <button className={styles["boton-elegante"]}>Explorar</button>
  </div>
);

export default Button_chief;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_chief = () => (
         <div>
          <button className="boton-elegante">Explorar</button>
        </div>
        );

        export default Button_chief;
        
        
         */
}
