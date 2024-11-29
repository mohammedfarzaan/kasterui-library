import React from "react";
import styles from "./Button_trail.module.css";

const Button_trail = () => (
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

export default Button_trail;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_trail = () => (
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

        export default Button_trail;
        
        
         */
}
