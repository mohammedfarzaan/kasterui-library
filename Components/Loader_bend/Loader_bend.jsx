import React from "react";
import styles from "./Loader_bend.module.css";

const Loader_bend = () => (
  <div>
    <div className={styles["loader"] + styles["l1"]}></div>
    <div className={styles["loader"] + styles["l2"]}></div>
    <div className={styles["loader"] + styles["l3"]}></div>
    <div className={styles["loader"] + styles["l4"]}></div>
    <div className={styles["loader"] + styles["l5"]}></div>
    <div className={styles["loader"] + styles["l6"]}></div>
    <div className={styles["loader"] + styles["l7"]}></div>
  </div>
);

export default Loader_bend;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_bend = () => (
         <div>
          <div className="loader l1"></div>
<div className="loader l2"></div>
<div className="loader l3"></div>
<div className="loader l4"></div>
<div className="loader l5"></div>
<div className="loader l6"></div>
<div className="loader l7"></div>
        </div>
        );

        export default Loader_bend;
        
        
         */
}
