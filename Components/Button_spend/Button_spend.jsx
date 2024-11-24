import React from "react";
import styles from "./Button_spend.module.css";

const Button_spend = () => (
  <div>
    <div className={styles["container"]}>
      <input name="power" id="power" type="checkbox" />
      <label className={styles["power"]} for="power">
        <span className={styles["icon-off"]}></span>
        <span className={styles["light"]}></span>
      </label>
    </div>
  </div>
);

export default Button_spend;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_spend = () => (
         <div>
          <div className="container">
  <input name="power" id="power" type="checkbox" />
  <label className="power" for="power">
    <span className="icon-off"></span>
    <span className="light"></span>
  </label>
</div>
        </div>
        );

        export default Button_spend;
        
        
         */
}
