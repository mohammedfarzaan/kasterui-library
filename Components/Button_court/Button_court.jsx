import React from "react";
import styles from "./Button_court.module.css";

const Button_court = () => (
  <div>
    <button className={styles["vlrt"]}>
      <span className={styles["green"]}></span>Hover effect
    </button>
  </div>
);

export default Button_court;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_court = () => (
         <div>
          <button className="vlrt"><span className="green"></span>Hover effect</button>
        </div>
        );

        export default Button_court;
        
        
         */
}
