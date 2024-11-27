import React from "react";
import styles from "./Loader_scene.module.css";

const Loader_scene = () => (
  <div>
    <div className={styles["loader"]}>
      <span></span>
    </div>
  </div>
);

export default Loader_scene;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_scene = () => (
         <div>
          <div className="loader">
        <span></span>
</div>
        </div>
        );

        export default Loader_scene;
        
        
         */
}
