import React from "react";
import styles from "./Button_famous.module.css";

const Button_famous = () => (
  <div>
    <button>
      <span className={styles["transition"]}></span>
      <span className={styles["gradient"]}></span>
      <span className={styles["label"]}>Button</span>
    </button>
  </div>
);

export default Button_famous;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_famous = () => (
         <div>
          <button>
  <span className="transition"></span>
  <span className="gradient"></span>
  <span className="label">Button</span>
</button>
        </div>
        );

        export default Button_famous;
        
        
         */
}
