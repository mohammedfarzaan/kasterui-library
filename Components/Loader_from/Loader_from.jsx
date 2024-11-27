import React from "react";
import styles from "./Loader_from.module.css";

const Loader_from = () => (
  <div>
    <div className={styles["center-body"]}>
      <div className={styles["loader-spanne-20"]}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
);

export default Loader_from;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_from = () => (
         <div>
          <div className="center-body">
  <div className="loader-spanne-20">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>
        </div>
        );

        export default Loader_from;
        
        
         */
}
