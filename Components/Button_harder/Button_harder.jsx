import React from "react";
import styles from "./Button_harder.module.css";

const Button_harder = () => (
  <div>
    <button className={styles["like-button"]}></button>
  </div>
);

export default Button_harder;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_harder = () => (
         <div>
          <button className="like-button"></button>
        </div>
        );

        export default Button_harder;
        
        
         */
}
