import React from "react";
import styles from "./Button_wild.module.css";

const Button_wild = () => (
  <div>
    <button className={styles["send-button"]}>Send Message</button>
  </div>
);

export default Button_wild;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_wild = () => (
         <div>
          <button className="send-button">Send Message</button>
        </div>
        );

        export default Button_wild;
        
        
         */
}
