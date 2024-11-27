import React from "react";
import styles from "./Loader_great.module.css";

const Loader_great = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["dash"] + styles["first"]}></div>
      <div className={styles["dash"] + styles["seconde"]}></div>
      <div className={styles["dash"] + styles["third"]}></div>
      <div className={styles["dash"] + styles["fourth"]}></div>
    </div>
  </div>
);

export default Loader_great;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_great = () => (
         <div>
          <div className="container">
  <div className="dash first"></div>
  <div className="dash seconde"></div>
  <div className="dash third"></div>
  <div className="dash fourth"></div>
</div>
        </div>
        );

        export default Loader_great;
        
        
         */
}
