import React from "react";
import styles from "./Button_partly.module.css";

const Button_partly = () => (
  <div>
    <button>
      <span className={styles["inner"]}>Button</span>
    </button>
  </div>
);

export default Button_partly;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_partly = () => (
         <div>
          <button>
    <span className="inner">Button</span>
</button>
        </div>
        );

        export default Button_partly;
        
        
         */
}