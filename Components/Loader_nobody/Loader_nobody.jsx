import React from "react";
import styles from "./Loader_nobody.module.css";

const Loader_nobody = () => (
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

export default Loader_nobody;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_nobody = () => (
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

        export default Loader_nobody;
        
        
         */
}
