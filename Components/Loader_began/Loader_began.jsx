import React from "react";
import styles from "./Loader_began.module.css";

const Loader_began = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["square"]} id="sq1"></div>
      <div className={styles["square"]} id="sq2"></div>
      <div className={styles["square"]} id="sq3"></div>
      <div className={styles["square"]} id="sq4"></div>
      <div className={styles["square"]} id="sq5"></div>
      <div className={styles["square"]} id="sq6"></div>
      <div className={styles["square"]} id="sq7"></div>
      <div className={styles["square"]} id="sq8"></div>
      <div className={styles["square"]} id="sq9"></div>
    </div>
  </div>
);

export default Loader_began;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_began = () => (
         <div>
          <div className="loader">
  <div className="square" id="sq1"></div>
  <div className="square" id="sq2"></div>
  <div className="square" id="sq3"></div>
  <div className="square" id="sq4"></div>
  <div className="square" id="sq5"></div>
  <div className="square" id="sq6"></div>
  <div className="square" id="sq7"></div>
  <div className="square" id="sq8"></div>
  <div className="square" id="sq9"></div>
</div>
        </div>
        );

        export default Loader_began;
        
        
         */
}
