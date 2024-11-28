import React from "react";
import styles from "./Button_wire.module.css";

const Button_wire = () => (
  <div>
    <button className={styles["button"]}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Hover Me
    </button>
  </div>
);

export default Button_wire;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_wire = () => (
         <div>
          <button className="button">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  Hover Me
</button>
        </div>
        );

        export default Button_wire;
        
        
         */
}
