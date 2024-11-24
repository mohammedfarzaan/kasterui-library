import React from "react";
import styles from "./Button_trip.module.css";

const Button_trip = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["button-overlay"]}></div>
      <span>Gradient Button</span>
    </button>
  </div>
);

export default Button_trip;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_trip = () => (
         <div>
          <button className="button">
  <div className="button-overlay"></div>
  <span>Gradient Button</span>  
</button>
        </div>
        );

        export default Button_trip;
        
        
         */
}
