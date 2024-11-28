import React from "react";
import styles from "./Button_softly.module.css";

const Button_softly = () => (
  <div>
    <div className={styles["btn-wrapper"]}>
      <button className={styles["btn"]}> button </button>
    </div>
  </div>
);

export default Button_softly;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_softly = () => (
         <div>
          <div className="btn-wrapper">
  <button className="btn"> button </button>
</div>
        </div>
        );

        export default Button_softly;
        
        
         */
}
