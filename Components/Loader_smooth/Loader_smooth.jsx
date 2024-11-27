import React from "react";
import styles from "./Loader_smooth.module.css";

const Loader_smooth = () => (
  <div>
    <svg className="container">
      <rect className="boxes"></rect>
    </svg>
  </div>
);

export default Loader_smooth;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_smooth = () => (
         <div>
          <svg className="container"><rect className="boxes"></rect></svg>
        </div>
        );

        export default Loader_smooth;
        
        
         */
}
