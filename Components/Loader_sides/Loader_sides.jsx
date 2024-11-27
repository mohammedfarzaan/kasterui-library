import React from "react";
import styles from "./Loader_sides.module.css";

const Loader_sides = () => (
  <div>
    <div className={styles["cssload-main"]}>
      <div className={styles["cssload-heart"]}>
        <span className={styles["cssload-heartL"]}></span>
        <span className={styles["cssload-heartR"]}></span>
        <span className={styles["cssload-square"]}></span>
      </div>
      <div className={styles["cssload-shadow"]}></div>
    </div>
  </div>
);

export default Loader_sides;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_sides = () => (
         <div>
          <div className="cssload-main">
	<div className="cssload-heart">
		<span className="cssload-heartL"></span>
		<span className="cssload-heartR"></span>
		<span className="cssload-square"></span>
	</div>
	<div className="cssload-shadow"></div>
</div>
        </div>
        );

        export default Loader_sides;
        
        
         */
}
