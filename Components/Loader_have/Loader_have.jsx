import React from "react";
import styles from "./Loader_have.module.css";

const Loader_have = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["dot-one"]}></div>
      <div className={styles["dot-two"]}>- -</div>
      <div className={styles["dot-three"]}></div>
    </div>
  </div>
);

export default Loader_have;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_have = () => (
         <div>
          <div className="loader">
 <div className="dot-one"></div> 
 <div className="dot-two">-  -</div> 
 <div className="dot-three"></div> 
</div>
        </div>
        );

        export default Loader_have;
        
        
         */
}
