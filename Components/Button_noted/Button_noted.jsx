import React from "react";
import styles from "./Button_noted.module.css";

const Button_noted = () => (
  <div>
    <button className={styles["space-adventure-button"]}>
      Join the Adventure
    </button>
  </div>
);

export default Button_noted;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_noted = () => (
         <div>
          <button className="space-adventure-button">Join the Adventure</button>
        </div>
        );

        export default Button_noted;
        
        
         */
}
