import React from "react";
import styles from "./Input_point.module.css";

const Input_point = () => (
  <div>
    <div className={styles["input-group"]}>
      <input
        type="email"
        className={styles["input"]}
        id="Email"
        name="Email"
        placeholder="uiverse@verse.io"
        autocomplete="off"
      />
      <input
        className={styles["button--submit"]}
        value="Subscribe"
        type="submit"
      />
    </div>
  </div>
);

export default Input_point;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_point = () => (
         <div>
          <div className="input-group">
    <input type="email" className="input" id="Email" name="Email" placeholder="uiverse@verse.io" autocomplete="off" />
    <input className="button--submit" value="Subscribe" type="submit" />
</div>
        </div>
        );

        export default Input_point;
        
        
         */
}
