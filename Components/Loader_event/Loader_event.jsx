import React from "react";
import styles from "./Loader_event.module.css";

const Loader_event = () => (
  <div>
    <div className={styles["loader"]}>
      <li className={styles["orb"]}></li>
      <li className={styles["orb"]}></li>
      <li className={styles["orb"]}></li>
      <li className={styles["orb"]}></li>
      <li className={styles["orb"]}></li>
      <li className={styles["orb"]}></li>
      <li className={styles["orb"]}></li>
      <li className={styles["orb"]}></li>
      <li className={styles["orb"]}></li>
    </div>
  </div>
);

export default Loader_event;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_event = () => (
         <div>
          <div className="loader">
  <li className="orb"></li>
  <li className="orb"></li>
  <li className="orb"></li>
  <li className="orb"></li>
  <li className="orb"></li>
  <li className="orb"></li>
  <li className="orb"></li>
  <li className="orb"></li>
  <li className="orb"></li>
</div>
        </div>
        );

        export default Loader_event;
        
        
         */
}
