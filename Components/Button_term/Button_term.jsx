import React from "react";
import styles from "./Button_term.module.css";

const Button_term = () => (
  <div>
    <button className={styles["btn-31"]}>
      <span className={styles["text-container"]}>
        <span className={styles["text"]}>Button</span>
      </span>
    </button>
  </div>
);

export default Button_term;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_term = () => (
         <div>
          <button className="btn-31">
  <span className="text-container">
    <span className="text">Button</span>
  </span>
</button>
        </div>
        );

        export default Button_term;
        
        
         */
}
