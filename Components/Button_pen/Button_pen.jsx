import React from "react";
import styles from "./Button_pen.module.css";

const Button_pen = () => (
  <div>
    <div className={styles["button"]}>
      <a href="#" className={styles["anchor"]}>
        <span>Download CV</span>
      </a>
    </div>
  </div>
);

export default Button_pen;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_pen = () => (
         <div>
          <div className="button">
  <a href="#" className="anchor">
    <span>Download CV</span>
  </a>
</div>
        </div>
        );

        export default Button_pen;
        
        
         */
}
