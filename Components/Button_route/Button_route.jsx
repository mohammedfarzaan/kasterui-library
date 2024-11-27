import React from "react";
import styles from "./Button_route.module.css";

const Button_route = () => (
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

export default Button_route;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_route = () => (
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

        export default Button_route;
        
        
         */
}
