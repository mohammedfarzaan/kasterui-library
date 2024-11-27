import React from "react";
import styles from "./Loader_club.module.css";

const Loader_club = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["bar1"]}></div>
      <div className={styles["bar2"]}></div>
      <div className={styles["bar3"]}></div>
      <div className={styles["bar4"]}></div>
      <div className={styles["bar5"]}></div>
      <div className={styles["bar6"]}></div>
      <div className={styles["bar7"]}></div>
      <div className={styles["bar8"]}></div>
      <div className={styles["bar9"]}></div>
    </div>
  </div>
);

export default Loader_club;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_club = () => (
         <div>
          <div className="loader">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                <div className="bar4"></div>
                <div className="bar5"></div>
                <div className="bar6"></div>
                <div className="bar7"></div>
                <div className="bar8"></div>
                <div className="bar9"></div>
            </div>
        </div>
        );

        export default Loader_club;
        
        
         */
}
