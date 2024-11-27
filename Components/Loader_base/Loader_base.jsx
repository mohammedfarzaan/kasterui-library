import React from "react";
import styles from "./Loader_base.module.css";

const Loader_base = () => (
  <div>
    <div className={styles["follow-the-leader-line"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader_base;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_base = () => (
         <div>
          <div className="follow-the-leader-line">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
        </div>
        );

        export default Loader_base;
        
        
         */
}
