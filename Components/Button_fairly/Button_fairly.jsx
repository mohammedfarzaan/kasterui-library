import React from "react";
import styles from "./Button_fairly.module.css";

const Button_fairly = () => (
  <div>
    <button className={styles["button"]}> Get in touch</button>
  </div>
);

export default Button_fairly;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_fairly = () => (
         <div>
          <button className="button"> Get in touch
</button>
        </div>
        );

        export default Button_fairly;
        
        
         */
}