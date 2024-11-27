import React from "react";
import styles from "./Button_belt.module.css";

const Button_belt = () => (
  <div>
    <button className={styles["btn"]}> Hover me</button>
  </div>
);

export default Button_belt;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_belt = () => (
         <div>
          <button className="btn"> Hover me
</button>
        </div>
        );

        export default Button_belt;
        
        
         */
}
