import React from "react";
import styles from "./Button_gentle.module.css";

const Button_gentle = () => (
  <div>
    <label className={styles["menuButton"]} for="check">
      <input type="checkbox" id="check" />
      <span className={styles["top"]}></span>
      <span className={styles["mid"]}></span>
      <span className={styles["bot"]}></span>
    </label>
  </div>
);

export default Button_gentle;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_gentle = () => (
         <div>
          <label className="menuButton" for="check">
    <input type="checkbox" id="check" />
    <span className="top"></span>
    <span className="mid"></span>
    <span className="bot"></span>
</label>
        </div>
        );

        export default Button_gentle;
        
        
         */
}
