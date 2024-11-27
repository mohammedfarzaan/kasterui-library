import React from "react";
import styles from "./Loader_course.module.css";

const Loader_course = () => (
  <div>
    <div className={styles["loading"]}>
      <div className={styles["diamond"]}></div>
      <div className={styles["diamond"] + styles["middle"]}></div>
      <div className={styles["diamond"]}></div>
    </div>
  </div>
);

export default Loader_course;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_course = () => (
         <div>
          <div className="loading">
  <div className="diamond"></div>
  <div className="diamond middle"></div>
  <div className="diamond"></div>
</div>
        </div>
        );

        export default Loader_course;
        
        
         */
}
