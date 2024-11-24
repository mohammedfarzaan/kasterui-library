import React from "react";
import styles from "./Button_pair.module.css";

const Button_pair = () => (
  <div>
    <button className={styles["send-message-button"]}>
      <span className={styles["icon"]}>✈️</span>{" "}
      <span className={styles["text"]}>Send Message</span>
    </button>
  </div>
);

export default Button_pair;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_pair = () => (
         <div>
          <button className="send-message-button">
  <span className="icon">✈️</span> <span className="text">Send Message</span>
</button>
        </div>
        );

        export default Button_pair;
        
        
         */
}
