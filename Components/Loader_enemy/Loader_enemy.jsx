import React from "react";
import styles from "./Loader_enemy.module.css";

const Loader_enemy = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["ball"]}></div>
      <div className={styles["ball"]}></div>
      <div className={styles["ball"]}></div>
    </div>
  </div>
);

export default Loader_enemy;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_enemy = () => (
         <div>
          <div className="loader">
    <div className="ball"></div>
    <div className="ball"></div>
    <div className="ball"></div>
</div>
        </div>
        );

        export default Loader_enemy;
        
        
         */
}
