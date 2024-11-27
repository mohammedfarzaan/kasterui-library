import React from "react";
import styles from "./Loader_market.module.css";

const Loader_market = () => (
  <div>
    <div className={styles["loader"]}>
      <span>&lt;</span>
      <span>LOADING</span>
      <span>/&gt;</span>
    </div>
  </div>
);

export default Loader_market;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_market = () => (
         <div>
          <div className="loader">
  <span>&lt;</span>
  <span>LOADING</span>
  <span>/&gt;</span>
</div>
        </div>
        );

        export default Loader_market;
        
        
         */
}
