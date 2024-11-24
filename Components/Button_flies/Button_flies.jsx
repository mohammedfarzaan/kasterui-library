import React from "react";
import styles from "./Button_flies.module.css";

const Button_flies = () => (
  <div>
    <div className={styles["container"]}>
      <button id="spacebar" className={styles["button"]}>
        <li> space </li> <div id="bump"></div>
      </button>{" "}
      <p>
        space-themed button.
        <br /> literally.
      </p>
    </div>
  </div>
);

export default Button_flies;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_flies = () => (
         <div>
          <div className="container">
  <button id="spacebar" className="button">
    <li> space </li> <div id="bump"></div>
  </button> <p>space-themed button.
  <br /> literally.</p>
</div>
        </div>
        );

        export default Button_flies;
        
        
         */
}
