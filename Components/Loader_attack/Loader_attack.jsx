import React from "react";
import styles from "./Loader_attack.module.css";

const Loader_attack = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["loader-bar"]}></div>
      <div className={styles["loader-bar"]}></div>
      <div className={styles["loader-bar"]}></div>
      <div className={styles["loader-bar"]}></div>
    </div>
  </div>
);

export default Loader_attack;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_attack = () => (
         <div>
          <div className="loader">
  <div className="loader-bar"></div>
  <div className="loader-bar"></div>
  <div className="loader-bar"></div>
  <div className="loader-bar"></div>
</div>
        </div>
        );

        export default Loader_attack;
        
        
         */
}
