import React from "react";
import styles from "./Loader_room.module.css";

const Loader_room = () => (
  <div>
    <div className={styles["loader"]}>
      <span className={styles["ball"] + styles["ball1"]}></span>
      <span className={styles["ball"]}></span>
      <span className={styles["ball"]}></span>
      <span className={styles["ball"]}></span>
      <span className={styles["ball"]}></span>
    </div>
  </div>
);

export default Loader_room;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_room = () => (
         <div>
          <div className="loader">
  <span className="ball ball1"></span>
  <span className="ball"></span>
  <span className="ball"></span>
  <span className="ball"></span>
  <span className="ball"></span>
</div>
        </div>
        );

        export default Loader_room;
        
        
         */
}
