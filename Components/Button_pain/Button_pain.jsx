import React from "react";
import styles from "./Button_pain.module.css";

const Button_pain = () => (
  <div>
    <a>
      <div className={styles["buuton"]}>HOVER ME</div>
      <div className={styles["back"]}></div>
    </a>
  </div>
);

export default Button_pain;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_pain = () => (
         <div>
          <a>
  <div className="buuton">HOVER ME</div>
  <div className="back"></div>
</a>
        </div>
        );

        export default Button_pain;
        
        
         */
}
