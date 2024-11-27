import React from "react";
import styles from "./Loader_field.module.css";

const Loader_field = () => (
  <div>
    <div className={styles["spinner"]}>
      <div className={styles["outer"]}>
        <div className={styles["inner"] + styles["tl"]}></div>
        <div className={styles["inner"] + styles["tr"]}></div>
        <div className={styles["inner"] + styles["br"]}></div>
        <div className={styles["inner"] + styles["bl"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_field;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_field = () => (
         <div>
          <div className="spinner">
  <div className="outer">
    <div className="inner tl"></div>
    <div className="inner tr"></div>
    <div className="inner br"></div>
    <div className="inner bl"></div>
  </div>
</div>
        </div>
        );

        export default Loader_field;
        
        
         */
}
