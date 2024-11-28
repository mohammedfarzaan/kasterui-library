import React from "react";
import styles from "./Button_tie.module.css";

const Button_tie = () => (
  <div>
    <button className={styles["send-message-button"]}>
      <span className={styles["icon"]}>✈️</span>{" "}
      <span className={styles["text"]}>Send Message</span>
    </button>
  </div>
);

export default Button_tie;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_tie = () => (
         <div>
          <button className="send-message-button">
  <span className="icon">✈️</span> <span className="text">Send Message</span>
</button>
        </div>
        );

        export default Button_tie;
        
        
         */
}
