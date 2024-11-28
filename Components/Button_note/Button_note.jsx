import React from "react";
import styles from "./Button_note.module.css";

const Button_note = () => (
  <div>
    <button className={styles["button"]}>Duolingo Button</button>
  </div>
);

export default Button_note;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_note = () => (
         <div>
          <button className="button">
  Duolingo Button
</button>
        </div>
        );

        export default Button_note;
        
        
         */
}
