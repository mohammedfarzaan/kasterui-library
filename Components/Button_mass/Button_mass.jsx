import React from "react";
import styles from "./Button_mass.module.css";

const Button_mass = () => (
  <div>
    <button className={styles["button"]}>Join now</button>
  </div>
);

export default Button_mass;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_mass = () => (
         <div>
          <button className="button">Join now</button>
        </div>
        );

        export default Button_mass;
        
        
         */
}
