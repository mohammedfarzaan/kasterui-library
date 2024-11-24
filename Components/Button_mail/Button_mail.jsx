import React from "react";
import styles from "./Button_mail.module.css";

const Button_mail = () => (
  <div>
    <button className={styles["ring-futuristic-button"]}>Click Me</button>
  </div>
);

export default Button_mail;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_mail = () => (
         <div>
          <button className="ring-futuristic-button">Click Me</button>
        </div>
        );

        export default Button_mail;
        
        
         */
}