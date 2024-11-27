import React from "react";
import styles from "./Button_nodded.module.css";

const Button_nodded = () => (
  <div>
    <button className={styles["button"]}>
      <span></span>Bouton
    </button>
  </div>
);

export default Button_nodded;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_nodded = () => (
         <div>
          <button className="button"><span></span>Bouton</button>
        </div>
        );

        export default Button_nodded;
        
        
         */
}
