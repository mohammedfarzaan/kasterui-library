import React from "react";
import styles from "./Button_noun.module.css";

const Button_noun = () => (
  <div>
    <button className={styles["button"]}>Hover me :)</button>
  </div>
);

export default Button_noun;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_noun = () => (
         <div>
          <button className="button">
    Hover me :)
</button>
        </div>
        );

        export default Button_noun;
        
        
         */
}
