import React from "react";
import styles from "./Loader_maybe.module.css";

const Loader_maybe = () => (
  <div>
    <div className={styles["loading"]}>
      <div className={styles["i"]}></div>
      <div className={styles["a"]}></div>
      <div className={styles["u"]}></div>
    </div>
  </div>
);

export default Loader_maybe;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_maybe = () => (
         <div>
          <div className="loading">
    <div className="i"></div>
    <div className="a"></div>
    <div className="u"></div>
</div>
        </div>
        );

        export default Loader_maybe;
        
        
         */
}
