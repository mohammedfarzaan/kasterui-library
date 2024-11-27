import React from "react";
import styles from "./Loader_pencil.module.css";

const Loader_pencil = () => (
  <div>
    <div className={styles["lava-lamp"]}>
      <div className={styles["bubble"]}></div>
      <div className={styles["bubble1"]}></div>
      <div className={styles["bubble2"]}></div>
      <div className={styles["bubble3"]}></div>
    </div>
  </div>
);

export default Loader_pencil;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_pencil = () => (
         <div>
          <div className="lava-lamp">
  <div className="bubble"></div>
  <div className="bubble1"></div>
  <div className="bubble2"></div>
  <div className="bubble3"></div>
</div>
        </div>
        );

        export default Loader_pencil;
        
        
         */
}
