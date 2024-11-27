import React from "react";
import styles from "./Loader_ready.module.css";

const Loader_ready = () => (
  <div>
    <div className={styles["loader"]}>
      <svg
        className="svg-wrap"
        viewBox="0 0 100 50"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <circle
          strokeLinecap="round"
          strokeWidth="2"
          className="svg-stroke"
          cy="25"
          cx="50"
          r="15"
        ></circle>
        <circle className="circle circle-one" cy="25" cx="35" r="1"></circle>
        <circle className="circle circle-two" cy="25" cx="45" r="1"></circle>
        <circle className="circle circle-three" cy="25" cx="55" r="1"></circle>
      </svg>
    </div>
  </div>
);

export default Loader_ready;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_ready = () => (
         <div>
          <div className="loader">
  <svg className="svg-wrap" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <circle strokeLinecap="round" strokeWidth="2" className="svg-stroke" cy="25" cx="50" r="15"></circle>
    <circle className="circle circle-one" cy="25" cx="35" r="1"></circle>
    <circle className="circle circle-two" cy="25" cx="45" r="1"></circle>
    <circle className="circle circle-three" cy="25" cx="55" r="1"></circle>
  </svg>  
</div>
        </div>
        );

        export default Loader_ready;
        
        
         */
}
