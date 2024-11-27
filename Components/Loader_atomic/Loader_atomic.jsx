import React from "react";
import styles from "./Loader_atomic.module.css";

const Loader_atomic = () => (
  <div>
    <div className={styles["newtons-cradle"]}>
      <div className={styles["newtons-cradle__dot"]}></div>
      <div className={styles["newtons-cradle__dot"]}></div>
      <div className={styles["newtons-cradle__dot"]}></div>
      <div className={styles["newtons-cradle__dot"]}></div>
    </div>
  </div>
);

export default Loader_atomic;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_atomic = () => (
         <div>
          <div className="newtons-cradle">
<div className="newtons-cradle__dot"></div>
<div className="newtons-cradle__dot"></div>
<div className="newtons-cradle__dot"></div>
<div className="newtons-cradle__dot"></div>
</div>
        </div>
        );

        export default Loader_atomic;
        
        
         */
}
