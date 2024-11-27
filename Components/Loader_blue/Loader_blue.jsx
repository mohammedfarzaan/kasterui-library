import React from "react";
import styles from "./Loader_blue.module.css";

const Loader_blue = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["plate"]}>
        <div className={styles["black"]}>
          <div className={styles["border"]}>
            <div className={styles["white"]}>
              <div className={styles["center"]}></div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["player"]}>
        <div className={styles["rect"]}></div>
        <div className={styles["circ"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_blue;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_blue = () => (
         <div>
          <div className="container">
    <div className="plate">
        <div className="black">
            <div className="border">
                <div className="white">
                    <div className="center"></div>
                </div>
            </div>
        </div>
    </div>

    <div className="player">
        <div className="rect"></div>
        <div className="circ"></div>
    </div>
</div>
        </div>
        );

        export default Loader_blue;
        
        
         */
}
