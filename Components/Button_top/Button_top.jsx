import React from "react";
import styles from "./Button_top.module.css";

const Button_top = () => (
  <div>
    <div className={styles["container"]}>
      <button>
        <span id="u">u</span>
        <span id="n">n</span>
        <span id="i">i</span>
        <span id="v">v</span>
        <span id="e">e</span>
        <span id="r">r</span>
        <span id="s">s</span>
        <span id="ee">e</span>
      </button>
      <div className={styles["moon"]}></div>
    </div>
  </div>
);

export default Button_top;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_top = () => (
         <div>
          <div className="container">
    <button>
      <span id="u">u</span><span id="n">n</span><span id="i">i</span><span id="v">v</span><span id="e">e</span><span id="r">r</span><span id="s">s</span><span id="ee">e</span>
    </button>
      <div className="moon"></div>
  </div>
        </div>
        );

        export default Button_top;
        
        
         */
}
