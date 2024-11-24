import React from "react";
import styles from "./Button_phrase.module.css";

const Button_phrase = () => (
  <div>
    <button className={styles["animated-button"]}>Button</button>
  </div>
);

export default Button_phrase;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_phrase = () => (
         <div>
          <button className="animated-button">Button</button>
        </div>
        );

        export default Button_phrase;
        
        
         */
}
