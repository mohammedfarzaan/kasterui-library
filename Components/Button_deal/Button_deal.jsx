import React from "react";
import styles from "./Button_deal.module.css";

const Button_deal = () => (
  <div>
    <div className={styles["button"]}>
      <div className={styles["button-wrapper"]}>
        <div className={styles["text"]}>Download</div>
        <span className={styles["icon"]}>For Free!</span>
      </div>
    </div>
  </div>
);

export default Button_deal;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_deal = () => (
         <div>
          <div className="button">
    <div className="button-wrapper">
        <div className="text">Download</div>
        <span className="icon">
            For Free!
        </span>
    </div>
</div>
        </div>
        );

        export default Button_deal;
        
        
         */
}
