import React from "react";
import styles from "./Button_speech.module.css";

const Button_speech = () => (
  <div>
    <button className={styles["btn"]}>
      <span>Modern Button</span>
    </button>
  </div>
);

export default Button_speech;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_speech = () => (
         <div>
          <button className="btn">
  <span>Modern Button</span>
</button>
        </div>
        );

        export default Button_speech;
        
        
         */
}
