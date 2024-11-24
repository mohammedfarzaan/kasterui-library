import React from "react";
import styles from "./Button_sat.module.css";

const Button_sat = () => (
  <div>
    <button className={styles["button-3d"] + styles["button-3d-red"]}>
      {" "}
      Button
    </button>
  </div>
);

export default Button_sat;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_sat = () => (
         <div>
          <button className="button-3d button-3d-red"> Button
</button>
        </div>
        );

        export default Button_sat;
        
        
         */
}