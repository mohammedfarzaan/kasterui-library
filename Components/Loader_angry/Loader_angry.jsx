import React from "react";
import styles from "./Loader_angry.module.css";

const Loader_angry = () => (
  <div>
    <div className={styles["spinner"]}>
      <svg viewBox="25 25 50 50" className="circular">
        <circle
          stroke-miterlimit="10"
          strokeWidth="3"
          fill="none"
          r="20"
          cy="50"
          cx="50"
          className="path"
        ></circle>
      </svg>
    </div>
  </div>
);

export default Loader_angry;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_angry = () => (
         <div>
          <div className="spinner">
    <svg viewBox="25 25 50 50" className="circular">
        <circle stroke-miterlimit="10" strokeWidth="3" fill="none" r="20" cy="50" cx="50" className="path"></circle>
    </svg>
</div>
        </div>
        );

        export default Loader_angry;
        
        
         */
}
