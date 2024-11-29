import React from "react";
import styles from "./Button_layers.module.css";

const Button_layers = () => (
  <div>
    <div>
      <button className={styles["button"]}>Hover Me!</button>
      <span className={styles["backdrop"]}></span>
    </div>
  </div>
);

export default Button_layers;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_layers = () => (
         <div>
          <div>
<button className="button">
  Hover Me!
</button>
<span className="backdrop"></span>
</div>
        </div>
        );

        export default Button_layers;
        
        
         */
}
