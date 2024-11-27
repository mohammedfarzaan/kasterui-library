import React from "react";
import styles from "./Button_grew.module.css";

const Button_grew = () => (
  <div>
    <label className={styles["menuButton"]} for="check">
      <input type="checkbox" id="check" />
      <span className={styles["top"]}></span>
      <span className={styles["mid"]}></span>
      <span className={styles["bot"]}></span>
    </label>
  </div>
);

export default Button_grew;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_grew = () => (
         <div>
          <label className="menuButton" for="check">
    <input type="checkbox" id="check" />
    <span className="top"></span>
    <span className="mid"></span>
    <span className="bot"></span>
</label>
        </div>
        );

        export default Button_grew;
        
        
         */
}
