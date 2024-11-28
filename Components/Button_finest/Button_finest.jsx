import React from "react";
import styles from "./Button_finest.module.css";

const Button_finest = () => (
  <div>
    <a className={styles["bck-grnd"]}>
      <span className={styles["style"]}></span>Hover me{" "}
    </a>
  </div>
);

export default Button_finest;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_finest = () => (
         <div>
          <a className="bck-grnd"><span className="style"></span>Hover me </a>
        </div>
        );

        export default Button_finest;
        
        
         */
}
