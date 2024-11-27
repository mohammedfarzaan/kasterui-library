import React from "react";
import styles from "./Button_yes.module.css";

const Button_yes = () => (
  <div>
    <button className={styles["button-3d"] + styles["button-3d-red"]}>
      {" "}
      Button
    </button>
  </div>
);

export default Button_yes;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_yes = () => (
         <div>
          <button className="button-3d button-3d-red"> Button
</button>
        </div>
        );

        export default Button_yes;
        
        
         */
}
