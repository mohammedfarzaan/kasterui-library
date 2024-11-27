import React from "react";
import styles from "./Loader_angle.module.css";

const Loader_angle = () => (
  <div>
    <div className={styles["bar"]}>
      <div className={styles["ball"]}></div>
    </div>
  </div>
);

export default Loader_angle;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_angle = () => (
         <div>
          <div className="bar">
    <div className="ball"></div>
</div>
        </div>
        );

        export default Loader_angle;
        
        
         */
}
