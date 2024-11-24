import React from "react";
import styles from "./Button_ride.module.css";

const Button_ride = () => (
  <div>
    <button className={styles["btn-5"]}>
      <span>Button</span>
    </button>
  </div>
);

export default Button_ride;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_ride = () => (
         <div>
          <button className="btn-5"><span>Button</span></button>
        </div>
        );

        export default Button_ride;
        
        
         */
}
