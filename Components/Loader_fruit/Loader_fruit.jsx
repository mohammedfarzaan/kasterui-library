import React from "react";
import styles from "./Loader_fruit.module.css";

const Loader_fruit = () => (
  <div>
    <div className={styles["boxes"]}>
      <div className={styles["box"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles["box"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles["box"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles["box"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
);

export default Loader_fruit;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_fruit = () => (
         <div>
          <div className="boxes">
    <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
        </div>
        );

        export default Loader_fruit;
        
        
         */
}
