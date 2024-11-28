import React from "react";
import styles from "./Button_land.module.css";

const Button_land = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["blob1"]}></div>
      <div className={styles["blob2"]}></div>
      <div className={styles["inner"]}>Realism</div>
    </button>
  </div>
);

export default Button_land;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_land = () => (
         <div>
          <button className="button">
  <div className="blob1"></div>
  <div className="blob2"></div>
  <div className="inner">Realism</div>
</button>
        </div>
        );

        export default Button_land;
        
        
         */
}
