import React from "react";
import styles from "./Button_mark.module.css";

const Button_mark = () => (
  <div>
    <button>
      <span className={styles["button_top"]}> Button</span>
    </button>
  </div>
);

export default Button_mark;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_mark = () => (
         <div>
          <button>
  <span className="button_top"> Button
  </span>
</button>
        </div>
        );

        export default Button_mark;
        
        
         */
}
