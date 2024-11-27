import React from "react";
import styles from "./Loader_rope.module.css";

const Loader_rope = () => (
  <div>
    <div className={styles["sharingon"]}>
      <div className={styles["ring"]}>
        <div className={styles["to"]}></div>
        <div className={styles["to"]}></div>
        <div className={styles["to"]}></div>
        <div className={styles["circle"]}></div>
      </div>
    </div>
  </div>
);

export default Loader_rope;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_rope = () => (
         <div>
          <div className="sharingon">
  <div className="ring">
  <div className="to"></div>
<div className="to"></div>
<div className="to"></div>
<div className="circle"></div>
</div>
</div>
        </div>
        );

        export default Loader_rope;
        
        
         */
}
