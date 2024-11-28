import React from "react";
import styles from "./Button_done.module.css";

const Button_done = () => (
  <div>
    <button className={styles["send-button"]}>Send Message</button>
  </div>
);

export default Button_done;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_done = () => (
         <div>
          <button className="send-button">Send Message</button>
        </div>
        );

        export default Button_done;
        
        
         */
}
