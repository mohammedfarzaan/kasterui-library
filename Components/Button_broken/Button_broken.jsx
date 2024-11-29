import React from "react";
import styles from "./Button_broken.module.css";

const Button_broken = () => (
  <div>
    <div className={styles["buttons"]}>
      <button className={styles["btn"]}>
        <span></span>
        <p data-start="good luck!" data-text="start!" data-title="new game"></p>
      </button>
    </div>
  </div>
);

export default Button_broken;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_broken = () => (
         <div>
          <div className="buttons">
   <button className="btn"><span></span><p data-start="good luck!" data-text="start!" data-title="new game"></p></button>
</div>
        </div>
        );

        export default Button_broken;
        
        
         */
}
