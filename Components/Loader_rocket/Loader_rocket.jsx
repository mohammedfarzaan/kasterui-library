import React from "react";
import styles from "./Loader_rocket.module.css";

const Loader_rocket = () => (
  <div>
    <div className={styles["loader"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 66 66"
        height="100px"
        width="100px"
        className="spinner"
      >
        <circle
          stroke="url(#gradient)"
          r="20"
          cy="33"
          cx="33"
          strokeWidth="1"
          fill="transparent"
          className="path"
        ></circle>
        <linearGradient id="gradient">
          <stop stop-opacity="1" stop-color="#fe0000" offset="0%"></stop>
          <stop stop-opacity="0" stop-color="#af3dff" offset="100%"></stop>
        </linearGradient>
      </svg>
    </div>
  </div>
);

export default Loader_rocket;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_rocket = () => (
         <div>
          <div className="loader">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66" height="100px" width="100px" className="spinner">
    <circle stroke="url(#gradient)" r="20" cy="33" cx="33" strokeWidth="1" fill="transparent" className="path"></circle>
      <linearGradient id="gradient">
        <stop stop-opacity="1" stop-color="#fe0000" offset="0%"></stop>
        <stop stop-opacity="0" stop-color="#af3dff" offset="100%"></stop>
      </linearGradient>
    
  </svg> 
</div>
        </div>
        );

        export default Loader_rocket;
        
        
         */
}
