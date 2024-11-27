import React from "react";
import styles from "./Loader_five.module.css";

const Loader_five = () => (
  <div>
    <div id="col">
      <div id="img-wrap">
        <span className={styles["loader"]}></span>
      </div>
    </div>
  </div>
);

export default Loader_five;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_five = () => (
         <div>
          <div id="col">
  <div id="img-wrap">
    <span className="loader"></span>
</div></div>
        </div>
        );

        export default Loader_five;
        
        
         */
}
