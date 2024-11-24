import React from "react";
import styles from "./Button_farm.module.css";

const Button_farm = () => (
  <div>
    <button className={styles["arc-btn-retro"]}>Submit</button>
  </div>
);

export default Button_farm;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_farm = () => (
         <div>
          <button className="arc-btn-retro">
  Submit
</button>
        </div>
        );

        export default Button_farm;
        
        
         */
}