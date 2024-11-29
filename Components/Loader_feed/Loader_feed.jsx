import React from "react";
import styles from "./Loader_feed.module.css";

const Loader_feed = () => (
  <div>
    <div className={styles["newtons-cradle"]}>
      <div className={styles["newtons-cradle__dot"]}></div>
      <div className={styles["newtons-cradle__dot"]}></div>
      <div className={styles["newtons-cradle__dot"]}></div>
      <div className={styles["newtons-cradle__dot"]}></div>
    </div>
  </div>
);

export default Loader_feed;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_feed = () => (
         <div>
          <div className="newtons-cradle">
<div className="newtons-cradle__dot"></div>
<div className="newtons-cradle__dot"></div>
<div className="newtons-cradle__dot"></div>
<div className="newtons-cradle__dot"></div>
</div>
        </div>
        );

        export default Loader_feed;
        
        
         */
}
