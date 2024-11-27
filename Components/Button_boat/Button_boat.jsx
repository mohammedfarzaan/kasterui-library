import React from "react";
import styles from "./Button_boat.module.css";

const Button_boat = () => (
  <div>
    <button className={styles["button"]}>
      <div id="ui">UI</div>VERSE
    </button>
  </div>
);

export default Button_boat;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_boat = () => (
         <div>
          <button className="button">
<div id="ui">UI</div>VERSE</button>
        </div>
        );

        export default Button_boat;
        
        
         */
}
