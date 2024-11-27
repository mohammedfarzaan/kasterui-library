import React from "react";
import styles from "./Loader_tales.module.css";

const Loader_tales = () => (
  <div>
    <div className={styles["planet"]}></div>
  </div>
);

export default Loader_tales;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_tales = () => (
         <div>
          <div className="planet">
</div>
        </div>
        );

        export default Loader_tales;
        
        
         */
}
