import React from "react";
import styles from "./Button_short.module.css";

const Button_short = () => (
  <div>
    <button>
      <a href="#" className={styles["btn2"]}>
        <span className={styles["spn2"]}>HELLO !</span>
      </a>
    </button>
  </div>
);

export default Button_short;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_short = () => (
         <div>
          <button>
  <a href="#" className="btn2"><span className="spn2">HELLO !</span></a>
</button>
        </div>
        );

        export default Button_short;
        
        
         */
}
