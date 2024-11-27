import React from "react";
import styles from "./Loader_sight.module.css";

const Loader_sight = () => (
  <div>
    <div className={styles["🤚"]}>
      <div className={styles["👉"]}></div>
      <div className={styles["👉"]}></div>
      <div className={styles["👉"]}></div>
      <div className={styles["👉"]}></div>
      <div className={styles["🌴"]}></div>
      <div className={styles["👍"]}></div>
    </div>
  </div>
);

export default Loader_sight;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_sight = () => (
         <div>
          <div className="🤚">
	<div className="👉"></div>
	<div className="👉"></div>
	<div className="👉"></div>
	<div className="👉"></div>
	<div className="🌴"></div>		
	<div className="👍"></div>
</div>
        </div>
        );

        export default Loader_sight;
        
        
         */
}
