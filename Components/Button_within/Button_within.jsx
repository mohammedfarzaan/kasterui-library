import React from "react";
import styles from "./Button_within.module.css";

const Button_within = () => (
  <div>
    <div className={styles["btn"] + styles["btn--huge"]}>
      <div className={styles["btn--huge__text"]}>
        <div>
          Explore More
          <span>Explore More</span>
        </div>
      </div>
    </div>
  </div>
);

export default Button_within;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_within = () => (
         <div>
          <div className="btn btn--huge">
  <div className="btn--huge__text">
    <div>
      Explore More
      <span>Explore More</span>
    </div>
  </div>
</div>
        </div>
        );

        export default Button_within;
        
        
         */
}
