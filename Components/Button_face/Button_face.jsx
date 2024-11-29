import React from "react";
import styles from "./Button_face.module.css";

const Button_face = () => (
  <div>
    <button className={styles["button"]}>
      <div id="ui">UI</div>VERSE
    </button>
  </div>
);

export default Button_face;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_face = () => (
         <div>
          <button className="button">
<div id="ui">UI</div>VERSE</button>
        </div>
        );

        export default Button_face;
        
        
         */
}
