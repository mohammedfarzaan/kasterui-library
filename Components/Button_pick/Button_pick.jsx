import React from "react";
import styles from "./Button_pick.module.css";

const Button_pick = () => (
  <div>
    <input id="c" type="checkbox" />
    <label id="upload_app" for="c">
      <div id="app">
        <div id="arrow"></div>
        <div id="success">
          <i className={styles["fas"] + styles["fa-check-circle"]}></i>
        </div>
      </div>
    </label>
  </div>
);

export default Button_pick;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_pick = () => (
         <div>
          <input id="c" type="checkbox" />
<label id="upload_app" for="c">
  <div id="app">
    <div id="arrow"></div>
    <div id="success">
      <i className="fas fa-check-circle"></i>
    </div>
  </div>
</label>
        </div>
        );

        export default Button_pick;
        
        
         */
}
