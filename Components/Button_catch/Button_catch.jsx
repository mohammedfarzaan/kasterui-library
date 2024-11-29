import React from "react";
import styles from "./Button_catch.module.css";

const Button_catch = () => (
  <div>
    <button className={styles["btn"]} type="button">
      <strong>SPACE</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div className={styles["circle"]}></div>
        <div className={styles["circle"]}></div>
      </div>
    </button>
  </div>
);

export default Button_catch;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_catch = () => (
         <div>
          <button className="btn" type="button">
  <strong>SPACE</strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div className="circle"></div>
    <div className="circle"></div>
  </div>
</button>
        </div>
        );

        export default Button_catch;
        
        
         */
}
