import React from "react";
import styles from "./Button_mouth.module.css";

const Button_mouth = () => (
  <div>
    <button>
      <span className={styles["text"]}>Button</span>
    </button>
  </div>
);

export default Button_mouth;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_mouth = () => (
         <div>
          <button>
  <span className="text">Button</span>
</button>
        </div>
        );

        export default Button_mouth;
        
        
         */
}
