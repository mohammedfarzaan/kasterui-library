import React from "react";
import styles from "./Button_pilot.module.css";

const Button_pilot = () => (
  <div>
    <div className={styles["btn-wrapper"]}>
      <button className={styles["btn"]}> button </button>
    </div>
  </div>
);

export default Button_pilot;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_pilot = () => (
         <div>
          <div className="btn-wrapper">
  <button className="btn"> button </button>
</div>
        </div>
        );

        export default Button_pilot;
        
        
         */
}