import React from "react";
import styles from "./Loader_tube.module.css";

const Loader_tube = () => (
  <div>
    <div className={styles["cube"]}>
      <div className={styles["cube_item"] + styles["cube_x"]}></div>
      <div className={styles["cube_item"] + styles["cube_y"]}></div>
      <div className={styles["cube_item"] + styles["cube_y"]}></div>
      <div className={styles["cube_item"] + styles["cube_x"]}></div>
    </div>
  </div>
);

export default Loader_tube;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_tube = () => (
         <div>
          <div className="cube">
  <div className="cube_item cube_x"></div>
  <div className="cube_item cube_y"></div>
  <div className="cube_item cube_y"></div>
  <div className="cube_item cube_x"></div>
</div>
        </div>
        );

        export default Loader_tube;
        
        
         */
}
