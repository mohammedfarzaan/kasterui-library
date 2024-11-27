import React from "react";
import styles from "./Loader_able.module.css";

const Loader_able = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["modelViewPort"]}>
        <div className={styles["eva"]}>
          <div className={styles["head"]}>
            <div className={styles["eyeChamber"]}>
              <div className={styles["eye"]}></div>
              <div className={styles["eye"]}></div>
            </div>
          </div>
          <div className={styles["body"]}>
            <div className={styles["hand"]}></div>
            <div className={styles["hand"]}></div>
            <div className={styles["scannerThing"]}></div>
            <div className={styles["scannerOrigin"]}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_able;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_able = () => (
         <div>
          <div className="loader">
  <div className="modelViewPort">
    <div className="eva">
      <div className="head">
        <div className="eyeChamber">
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
      </div>
      <div className="body">
        <div className="hand"></div>
        <div className="hand"></div>
        <div className="scannerThing"></div>
        <div className="scannerOrigin"></div>
      </div>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_able;
        
        
         */
}
