import React from "react";
import styles from "./Button_live.module.css";

const Button_live = () => (
  <div>
    <div className={styles["back"]}>
      <div className={styles["button_base"] + styles["b_3d"]}>
        <div>button</div>
        <div>button</div>
        <div>button</div>
        <div>button</div>
      </div>
    </div>
  </div>
);

export default Button_live;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_live = () => (
         <div>
          <div className="back">
  <div className="button_base b_3d">
    <div>button</div>
    <div>button</div>
    <div>button</div>
    <div>button</div>
  </div>
</div>
        </div>
        );

        export default Button_live;
        
        
         */
}
