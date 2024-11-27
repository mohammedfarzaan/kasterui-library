import React from "react";
import styles from "./Loader_land.module.css";

const Loader_land = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["book"]}>
        <div className={styles["page"]}></div>
        <div className={styles["page"] + styles["page2"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_land;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_land = () => (
         <div>
          <div className="loader">
  <div className="book">
    <div className="page"></div>
    <div className="page page2"></div>
  </div>
</div>
        </div>
        );

        export default Loader_land;
        
        
         */
}
