import React from "react";
import styles from "./Loader_drive.module.css";

const Loader_drive = () => (
  <div>
    <section className={styles["loader"]}>
      <div className={styles["slider"]} style="--i:0"></div>
      <div className={styles["slider"]} style="--i:1"></div>
      <div className={styles["slider"]} style="--i:2"></div>
      <div className={styles["slider"]} style="--i:3"></div>
      <div className={styles["slider"]} style="--i:4"></div>
    </section>
  </div>
);

export default Loader_drive;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_drive = () => (
         <div>
          <section className="loader">

    <div className="slider" style="--i:0">
    </div>
    <div className="slider" style="--i:1">
    </div>
    <div className="slider" style="--i:2">
    </div>
    <div className="slider" style="--i:3">
    </div>
    <div className="slider" style="--i:4">
    </div>
  </section>
        </div>
        );

        export default Loader_drive;
        
        
         */
}
