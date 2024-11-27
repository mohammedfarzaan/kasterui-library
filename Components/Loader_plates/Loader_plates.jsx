import React from "react";
import styles from "./Loader_plates.module.css";

const Loader_plates = () => (
  <div>
    <div className={styles["loader2"]}>
      <div className={styles["load21"]}></div>
      <div className={styles["load22"]}></div>
      <div className={styles["load23"]}></div>
      <div className={styles["load24"]}></div>
      <div className={styles["load25"]}></div>
    </div>
  </div>
);

export default Loader_plates;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_plates = () => (
         <div>
          <div className="loader2">
  <div className="load21"></div>
  <div className="load22"></div>
  <div className="load23"></div>
  <div className="load24"></div>
  <div className="load25"></div>
</div>
        </div>
        );

        export default Loader_plates;
        
        
         */
}
