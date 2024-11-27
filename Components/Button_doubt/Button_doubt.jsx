import React from "react";
import styles from "./Button_doubt.module.css";

const Button_doubt = () => (
  <div>
    <button className={styles["button"]}>
      <span className={styles["front"]}> ⚡Join Now </span>
    </button>
  </div>
);

export default Button_doubt;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_doubt = () => (
         <div>
          <button className="button">
  <span className="front"> ⚡Join Now </span>
</button>
        </div>
        );

        export default Button_doubt;
        
        
         */
}
