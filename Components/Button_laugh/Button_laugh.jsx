import React from "react";
import styles from "./Button_laugh.module.css";

const Button_laugh = () => (
  <div>
    <button className={styles["button"]}>Play it</button>
  </div>
);

export default Button_laugh;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_laugh = () => (
         <div>
          <button className="button">Play it</button>
        </div>
        );

        export default Button_laugh;
        
        
         */
}
