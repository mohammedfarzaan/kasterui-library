import React from "react";
import styles from "./Button_brick.module.css";

const Button_brick = () => (
  <div>
    <div className={styles["div"]}>
      <button className={styles["button"]}>
        <span className={styles["span"]}> HOVER ME </span>
      </button>
    </div>
  </div>
);

export default Button_brick;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_brick = () => (
         <div>
          <div className="div">
  <button className="button">
    <span className="span"> HOVER ME </span>
  </button>
</div>
        </div>
        );

        export default Button_brick;
        
        
         */
}
