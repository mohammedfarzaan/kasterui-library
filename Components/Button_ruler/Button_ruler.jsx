import React from "react";
import styles from "./Button_ruler.module.css";

const Button_ruler = () => (
  <div>
    <button className={styles["Btn"]}>Jelly Button</button>
  </div>
);

export default Button_ruler;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_ruler = () => (
         <div>
          <button className="Btn">
  Jelly Button
</button>
        </div>
        );

        export default Button_ruler;
        
        
         */
}
