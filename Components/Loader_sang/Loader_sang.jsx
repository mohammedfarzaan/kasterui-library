import React from "react";
import styles from "./Loader_sang.module.css";

const Loader_sang = () => (
  <div>
    <div className={styles["centered"]}>
      <div className={styles["blob-1"]}></div>
      <div className={styles["blob-2"]}></div>
    </div>
  </div>
);

export default Loader_sang;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_sang = () => (
         <div>
          <div className="centered">
	<div className="blob-1"></div>
	<div className="blob-2"></div>
</div>
        </div>
        );

        export default Loader_sang;
        
        
         */
}
