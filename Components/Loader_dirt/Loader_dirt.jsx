import React from "react";
import styles from "./Loader_dirt.module.css";

const Loader_dirt = () => (
  <div>
    <div className={styles["three-body"]}>
      <div className={styles["three-body__dot"]}></div>
      <div className={styles["three-body__dot"]}></div>
      <div className={styles["three-body__dot"]}></div>
    </div>
  </div>
);

export default Loader_dirt;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_dirt = () => (
         <div>
          <div className="three-body">
<div className="three-body__dot"></div>
<div className="three-body__dot"></div>
<div className="three-body__dot"></div>
</div>
        </div>
        );

        export default Loader_dirt;
        
        
         */
}
