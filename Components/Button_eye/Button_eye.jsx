import React from "react";
import styles from "./Button_eye.module.css";

const Button_eye = () => (
  <div>
    <a className={styles["btn"]} href="#">
      I am a button
    </a>
  </div>
);

export default Button_eye;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_eye = () => (
         <div>
          <a className="btn" href="#">I am a button</a>
        </div>
        );

        export default Button_eye;
        
        
         */
}
