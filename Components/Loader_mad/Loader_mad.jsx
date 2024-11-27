import React from "react";
import styles from "./Loader_mad.module.css";

const Loader_mad = () => (
  <div>
    <div className={styles["loaderRectangle"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader_mad;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_mad = () => (
         <div>
          <div className="loaderRectangle">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
        </div>
        );

        export default Loader_mad;
        
        
         */
}
