import React from "react";
import styles from "./Button_image.module.css";

const Button_image = () => (
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

export default Button_image;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_image = () => (
         <div>
          <div className="container">
    <button>
      <span id="u">u</span><span id="n">n</span><span id="i">i</span><span id="v">v</span><span id="e">e</span><span id="r">r</span><span id="s">s</span><span id="ee">e</span>
    </button>
      <div className="moon"></div>
  </div>
        </div>
        );

        export default Button_image;
        
        
         */
}
