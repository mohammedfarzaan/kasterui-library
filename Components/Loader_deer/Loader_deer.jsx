import React from "react";
import styles from "./Loader_deer.module.css";

const Loader_deer = () => (
  <div>
    <div className={styles["glowing-cube"]}>
      <div className={styles["top"]}>❤</div>
      <div>
        <span style="--i:0;"></span>
        <span style="--i:1;"></span>
        <span style="--i:2;"></span>
        <span style="--i:3;"></span>
      </div>
    </div>
  </div>
);

export default Loader_deer;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_deer = () => (
         <div>
          <div className="glowing-cube">
  <div className="top">❤</div>
  <div>
    <span style="--i:0;"></span>
    <span style="--i:1;"></span>
    <span style="--i:2;"></span>
    <span style="--i:3;"></span>
  </div>
</div>
        </div>
        );

        export default Loader_deer;
        
        
         */
}
