import React from "react";
import styles from "./Button_happen.module.css";

const Button_happen = () => (
  <div>
    <button className={styles["send-button"]}>Send Message</button>
  </div>
);

export default Button_happen;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_happen = () => (
         <div>
          <button className="send-button">Send Message</button>
        </div>
        );

        export default Button_happen;
        
        
         */
}
