import React from "react";
import styles from "./Loader_hair.module.css";

const Loader_hair = () => (
  <div>
    <div className={styles["loader"]}>
      <div className={styles["bar"]} id="red"></div>
      <div className={styles["bar"]} id="mint"></div>
      <div className={styles["bar"]} id="grey"></div>
      <div className={styles["bar"]} id="purple"></div>
    </div>
  </div>
);

export default Loader_hair;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_hair = () => (
         <div>
          <div className="loader">
<div className="bar" id="red"></div>
<div className="bar" id="mint"></div>
<div className="bar" id="grey"></div>
<div className="bar" id="purple"></div>
</div>
        </div>
        );

        export default Loader_hair;
        
        
         */
}
