import React from "react";
import styles from "./Loader_every.module.css";

const Loader_every = () => (
  <div>
    <div className={styles["wrapper"]}>
      <div className={styles["blue"] + styles["ball"]}></div>
      <div className={styles["red"] + styles["ball"]}></div>
      <div className={styles["yellow"] + styles["ball"]}></div>
      <div className={styles["green"] + styles["ball"]}></div>
    </div>
  </div>
);

export default Loader_every;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_every = () => (
         <div>
          <div className="wrapper">
  <div className="blue ball"></div>
  <div className="red ball"></div>
  <div className="yellow ball"></div>
  <div className="green ball"></div>
</div>
        </div>
        );

        export default Loader_every;
        
        
         */
}
