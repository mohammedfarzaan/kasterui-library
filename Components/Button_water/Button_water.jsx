import React from "react";
import styles from "./Button_water.module.css";

const Button_water = () => (
  <div>
    <div className={styles["frame"]}>
      <div className={styles["center"]}>
        <button>Hover me</button>
      </div>
    </div>
  </div>
);

export default Button_water;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_water = () => (
         <div>
          <div className="frame">
  <div className="center">
		<button>Hover me</button>
  </div>
</div>
        </div>
        );

        export default Button_water;
        
        
         */
}
