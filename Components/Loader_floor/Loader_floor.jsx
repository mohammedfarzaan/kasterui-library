import React from "react";
import styles from "./Loader_floor.module.css";

const Loader_floor = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["loader"]}></div>
    </div>
  </div>
);

export default Loader_floor;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_floor = () => (
         <div>
          <div className="container">
  <div className="loader"></div>
</div>
        </div>
        );

        export default Loader_floor;
        
        
         */
}
