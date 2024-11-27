import React from "react";
import styles from "./Loader_teach.module.css";

const Loader_teach = () => (
  <div>
    <div id="loader">
      <div className={styles["ls-particles"] + styles["ls-part-1"]}></div>
      <div className={styles["ls-particles"] + styles["ls-part-2"]}></div>
      <div className={styles["ls-particles"] + styles["ls-part-3"]}></div>
      <div className={styles["ls-particles"] + styles["ls-part-4"]}></div>
      <div className={styles["ls-particles"] + styles["ls-part-5"]}></div>
      <div
        className={
          styles["lightsaber"] + styles["ls-left"] + styles["ls-green"]
        }
      ></div>
      <div
        className={styles["lightsaber"] + styles["ls-right"] + styles["ls-red"]}
      ></div>
    </div>
  </div>
);

export default Loader_teach;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_teach = () => (
         <div>
          <div id="loader">
  <div className="ls-particles ls-part-1"></div>
  <div className="ls-particles ls-part-2"></div>
  <div className="ls-particles ls-part-3"></div>
  <div className="ls-particles ls-part-4"></div>
  <div className="ls-particles ls-part-5"></div>
  <div className="lightsaber ls-left ls-green"></div>
  <div className="lightsaber ls-right ls-red"></div>
</div>
        </div>
        );

        export default Loader_teach;
        
        
         */
}
