import React from "react";
import styles from "./Button_voyage.module.css";

const Button_voyage = () => (
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

export default Button_voyage;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_voyage = () => (
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

        export default Button_voyage;
        
        
         */
}
