import React from "react";
import styles from "./Button_stream.module.css";

const Button_stream = () => (
  <div>
    <button role="button" className={styles["golden-button"]}>
      <span className={styles["golden-text"]}>Golden Button</span>
    </button>
  </div>
);

export default Button_stream;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_stream = () => (
         <div>
          <button role="button" className="golden-button">
  <span className="golden-text">Golden Button</span>
</button>
        </div>
        );

        export default Button_stream;
        
        
         */
}
