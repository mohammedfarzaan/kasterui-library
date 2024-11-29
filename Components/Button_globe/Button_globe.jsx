import React from "react";
import styles from "./Button_globe.module.css";

const Button_globe = () => (
  <div>
    <button>
      <span className={styles["shadow"]}></span>
      <span className={styles["edge"]}></span>
      <span className={styles["front"] + styles["text"]}> Click me</span>
    </button>
  </div>
);

export default Button_globe;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_globe = () => (
         <div>
          <button>
  <span className="shadow"></span>
  <span className="edge"></span>
  <span className="front text"> Click me
  </span>
</button>
        </div>
        );

        export default Button_globe;
        
        
         */
}
