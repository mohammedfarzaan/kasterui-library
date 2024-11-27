import React from "react";
import styles from "./Loader_rather.module.css";

const Loader_rather = () => (
  <div>
    <div className={styles["typewriter"]}>
      <div className={styles["slide"]}>
        <i></i>
      </div>
      <div className={styles["paper"]}></div>
      <div className={styles["keyboard"]}></div>
    </div>
  </div>
);

export default Loader_rather;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_rather = () => (
         <div>
          <div className="typewriter">
    <div className="slide"><i></i></div>
    <div className="paper"></div>
    <div className="keyboard"></div>
</div>
        </div>
        );

        export default Loader_rather;
        
        
         */
}
