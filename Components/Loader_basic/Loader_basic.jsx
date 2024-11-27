import React from "react";
import styles from "./Loader_basic.module.css";

const Loader_basic = () => (
  <div>
    <div className={styles["loader3"]}>
      <div className={styles["circle1"]}></div>
      <div className={styles["circle1"]}></div>
      <div className={styles["circle1"]}></div>
      <div className={styles["circle1"]}></div>
      <div className={styles["circle1"]}></div>
    </div>
  </div>
);

export default Loader_basic;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_basic = () => (
         <div>
          <div className="loader3">
  <div className="circle1"></div>
  <div className="circle1"></div>
  <div className="circle1"></div>
  <div className="circle1"></div>
  <div className="circle1"></div>
</div>
        </div>
        );

        export default Loader_basic;
        
        
         */
}
