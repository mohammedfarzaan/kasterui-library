import React from "react";
import styles from "./Button_eight.module.css";

const Button_eight = () => (
  <div>
    <button>
      <span className={styles["span-mother"]}>
        <span>B</span>
        <span>u</span>
        <span>t</span>
        <span>t</span>
        <span>o</span>
        <span>n</span>
      </span>
      <span className={styles["span-mother2"]}>
        <span>B</span>
        <span>u</span>
        <span>t</span>
        <span>t</span>
        <span>o</span>
        <span>n</span>
      </span>
    </button>
  </div>
);

export default Button_eight;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_eight = () => (
         <div>
          <button>
  <span className="span-mother">
      <span>B</span>
      <span>u</span>
      <span>t</span>
      <span>t</span>
      <span>o</span>
      <span>n</span>
  </span>
  <span className="span-mother2">
      <span>B</span>
      <span>u</span>
      <span>t</span>
      <span>t</span>
      <span>o</span>
      <span>n</span>
  </span>
</button>
        </div>
        );

        export default Button_eight;
        
        
         */
}
