import React from "react";
import styles from "./Loader_well.module.css";

const Loader_well = () => (
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

export default Loader_well;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_well = () => (
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

        export default Loader_well;
        
        
         */
}
