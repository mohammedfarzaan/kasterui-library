import React from "react";
import styles from "./Loader_shut.module.css";

const Loader_shut = () => (
  <div>
    <div className={styles["leap-frog"]}>
      <div className={styles["leap-frog__dot"]}></div>
      <div className={styles["leap-frog__dot"]}></div>
      <div className={styles["leap-frog__dot"]}></div>
    </div>
  </div>
);

export default Loader_shut;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_shut = () => (
         <div>
          <div className="leap-frog">
<div className="leap-frog__dot"></div>
<div className="leap-frog__dot"></div>
<div className="leap-frog__dot"></div>
</div>
        </div>
        );

        export default Loader_shut;
        
        
         */
}
