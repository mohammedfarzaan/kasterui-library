import React from "react";
import styles from "./Loader_army.module.css";

const Loader_army = () => (
  <div>
    <div className={styles["loading-box"]}>
      <div
        className={styles["WH"] + styles["animation"] + styles["color"]}
      ></div>
      <div
        className={styles["WH"] + styles["animation"] + styles["color"]}
      ></div>
      <div
        className={styles["WH"] + styles["animation"] + styles["color"]}
      ></div>
    </div>
  </div>
);

export default Loader_army;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_army = () => (
         <div>
          <div className="loading-box">
  <div className="WH animation color"></div>
  <div className="WH animation color"></div>
  <div className="WH animation color"></div>
</div>
        </div>
        );

        export default Loader_army;
        
        
         */
}
