import React from "react";
import styles from "./Button_talk.module.css";

const Button_talk = () => (
  <div>
    <button role="button" className={styles["button-name"]}>
      Button-name
    </button>
  </div>
);

export default Button_talk;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_talk = () => (
         <div>
          <button role="button" className="button-name">Button-name</button>
        </div>
        );

        export default Button_talk;
        
        
         */
}
