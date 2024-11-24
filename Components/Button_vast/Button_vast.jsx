import React from "react";
import styles from "./Button_vast.module.css";

const Button_vast = () => (
  <div>
    <button data-text="Awesome" className={styles["button"]}>
      <span className={styles["actual-text"]}>&nbsp;uiverse&nbsp;</span>
      <span className={styles["hover-text"]} aria-hidden="true">
        &nbsp;uiverse&nbsp;
      </span>
    </button>
  </div>
);

export default Button_vast;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_vast = () => (
         <div>
          <button data-text="Awesome" className="button">
    <span className="actual-text">&nbsp;uiverse&nbsp;</span>
    <span className="hover-text" aria-hidden="true">&nbsp;uiverse&nbsp;</span>
</button>
        </div>
        );

        export default Button_vast;
        
        
         */
}
