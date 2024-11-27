import React from "react";
import styles from "./Loader_hot.module.css";

const Loader_hot = () => (
  <div>
    <div className={styles["loading"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="124"
        height="124"
        viewBox="0 0 124 124"
      >
        <circle
          className="circle-loading"
          cx="62"
          cy="62"
          r="59"
          fill="none"
          stroke="hsl(271, 76%, 74%)"
          strokeWidth="6px"
        ></circle>
        <circle
          className="circle"
          cx="62"
          cy="62"
          r="59"
          fill="none"
          stroke="hsl(271, 76%, 53%)"
          strokeWidth="6px"
          strokeLinecap="round"
        ></circle>
        <polyline
          className="check"
          points="73.56 48.63 57.88 72.69 49.38 62"
          fill="none"
          stroke="hsl(271, 76%, 53%)"
          strokeWidth="6px"
          strokeLinecap="round"
        ></polyline>
      </svg>
    </div>
  </div>
);

export default Loader_hot;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_hot = () => (
         <div>
          <div className="loading">
  <svg xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 124 124">
    <circle className="circle-loading" cx="62" cy="62" r="59" fill="none" stroke="hsl(271, 76%, 74%)" strokeWidth="6px"></circle>
    <circle className="circle" cx="62" cy="62" r="59" fill="none" stroke="hsl(271, 76%, 53%)" strokeWidth="6px" strokeLinecap="round"></circle>
    <polyline className="check" points="73.56 48.63 57.88 72.69 49.38 62" fill="none" stroke="hsl(271, 76%, 53%)" strokeWidth="6px" strokeLinecap="round"></polyline>
  </svg>
</div>
        </div>
        );

        export default Loader_hot;
        
        
         */
}
