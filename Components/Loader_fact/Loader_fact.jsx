import React from "react";
import styles from "./Loader_fact.module.css";

const Loader_fact = () => (
  <div>
    <div className={styles["easter-animation"]}>
      <div className={styles["egg"]}>
        <div className={styles["eyes"]}></div>
      </div>
      <div className={styles["shadow"]}></div>
      <div className={styles["clouds"]}>
        <div className={styles["cloud1"]}></div>
        <div className={styles["cloud2"]}></div>
        <div className={styles["cloud3"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_fact;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_fact = () => (
         <div>
          <div className="easter-animation">
  <div className="egg">
    <div className="eyes"></div>
  </div>
  <div className="shadow"></div>
  <div className="clouds">
    <div className="cloud1"></div>
    <div className="cloud2"></div>
    <div className="cloud3"></div>
  </div>
</div>
        </div>
        );

        export default Loader_fact;
        
        
         */
}
