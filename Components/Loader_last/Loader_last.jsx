import React from "react";
import styles from "./Loader_last.module.css";

const Loader_last = () => (
  <div>
    <div className={styles["content"]}>
      <div className={styles["planet"]}>
        <div className={styles["ring"]}></div>
        <div className={styles["cover-ring"]}></div>
        <div className={styles["spots"]}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <p>loading</p>
    </div>
  </div>
);

export default Loader_last;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_last = () => (
         <div>
          <div className="content">
   <div className="planet">
      <div className="ring"></div>
         <div className="cover-ring"></div>
      <div className="spots">
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>
         <span></span>

      </div>
   </div>
   <p>loading</p>
</div>
        </div>
        );

        export default Loader_last;
        
        
         */
}
