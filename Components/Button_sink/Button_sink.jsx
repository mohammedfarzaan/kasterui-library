import React from "react";
import styles from "./Button_sink.module.css";

const Button_sink = () => (
  <div>
    <button className={styles["button"]}>
      Join Now<span className={styles["arrow"]}>&gt;</span>
    </button>
  </div>
);

export default Button_sink;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_sink = () => (
         <div>
          <button className="button">Join Now<span className="arrow">&gt;</span></button>
        </div>
        );

        export default Button_sink;
        
        
         */
}
