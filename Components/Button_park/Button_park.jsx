import React from "react";
import styles from "./Button_park.module.css";

const Button_park = () => (
  <div>
    <button className={styles["btn"]}>
      <span className={styles["btn-text-one"]}>Hover me</span>
      <span className={styles["btn-text-two"]}>Great!</span>
    </button>
  </div>
);

export default Button_park;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_park = () => (
         <div>
          <button className="btn">
    <span className="btn-text-one">Hover me</span>
    <span className="btn-text-two">Great!</span>
</button>
        </div>
        );

        export default Button_park;
        
        
         */
}
