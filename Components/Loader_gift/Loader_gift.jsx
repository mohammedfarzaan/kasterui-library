import React from "react";
import styles from "./Loader_gift.module.css";

const Loader_gift = () => (
  <div>
    <div id="div1">
      <div id="l" style="margin: 33px">
        <div className={styles["pupil"]}>
          <div className={styles["p5"]}>
            <div className={styles["pupl2"]}>
              <div className={styles["pupil3"]}></div>
              <div className={styles["pupil4"]}></div>
            </div>
          </div>
        </div>
      </div>
      <div id="m" style="margin: 33px">
        <div className={styles["pupil"]}>
          <div className={styles["p5"]}>
            <div className={styles["pupl2"]}>
              <div className={styles["pupil3"]}></div>
              <div className={styles["pupil4"]}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_gift;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_gift = () => (
         <div>
          <div id="div1">
  <div id="l" style="margin: 33px">
    <div className="pupil">
      <div className="p5">
        <div className="pupl2">
          <div className="pupil3"></div>
          <div className="pupil4"></div>
        </div>
      </div>
    </div>
  </div>
  <div id="m" style="margin: 33px">
    <div className="pupil">
      <div className="p5">
        <div className="pupl2">
          <div className="pupil3"></div>
          <div className="pupil4"></div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_gift;
        
        
         */
}
