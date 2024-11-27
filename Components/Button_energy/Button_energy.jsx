import React from "react";
import styles from "./Button_energy.module.css";

const Button_energy = () => (
  <div>
    <button className={styles["ui-btn"]}>Delete</button>
  </div>
);

export default Button_energy;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_energy = () => (
         <div>
          <button className="ui-btn">Delete</button>
        </div>
        );

        export default Button_energy;
        
        
         */
}
