import React from "react";
import styles from "./Button_touch.module.css";

const Button_touch = () => (
  <div>
    <button className={styles["arc-btn-retro"]}>Submit</button>
  </div>
);

export default Button_touch;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_touch = () => (
         <div>
          <button className="arc-btn-retro">
  Submit
</button>
        </div>
        );

        export default Button_touch;
        
        
         */
}
