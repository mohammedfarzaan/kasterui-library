import React from "react";
import styles from "./Loader_ago.module.css";

const Loader_ago = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["item1"]}></div>
      <div className={styles["item2"]}></div>
      <div className={styles["item3"]}></div>
    </div>
  </div>
);

export default Loader_ago;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_ago = () => (
         <div>
          <div className="loader">
  <div className="item1"></div>
  <div className="item2"></div>
  <div className="item3"></div>
</div>
        </div>
        );

        export default Loader_ago;
        
        
         */
}
