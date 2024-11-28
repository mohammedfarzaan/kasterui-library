import React from "react";
import styles from "./Loader_symbol.module.css";

const Loader_symbol = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["clockLoader"]}>
        <div className={styles["clockHand"] + styles["minuteHand"]}></div>
        <div className={styles["clockHand"] + styles["hourHand"]}></div>
      </div>
      <div className={styles["decorativeElementContainer"]}>
        <div
          className={styles["decorativeElement"] + styles["decorativeElement1"]}
        ></div>
        <div
          className={styles["decorativeElement"] + styles["decorativeElement2"]}
        ></div>
      </div>
    </div>
  </div>
);

export default Loader_symbol;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_symbol = () => (
         <div>
          <div className="loader">
  <div className="clockLoader">
    <div className="clockHand minuteHand"></div>
    <div className="clockHand hourHand"></div>
  </div>
  <div className="decorativeElementContainer">
    <div className="decorativeElement decorativeElement1"></div>
    <div className="decorativeElement decorativeElement2"></div>
  </div>
</div>
        </div>
        );

        export default Loader_symbol;
        
        
         */
}
