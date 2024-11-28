import React from "react";
import styles from "./Button_public.module.css";

const Button_public = () => (
  <div>
    <button className={styles["btn-23"]}>
      <span className={styles["text"]}>Button</span>
      <span aria-hidden="" className={styles["marquee"]}>
        Button
      </span>
    </button>
  </div>
);

export default Button_public;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_public = () => (
         <div>
          <button className="btn-23">
  <span className="text">Button</span>
  <span aria-hidden="" className="marquee">Button</span>
</button>
        </div>
        );

        export default Button_public;
        
        
         */
}
