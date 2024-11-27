import React from "react";
import styles from "./Loader_known.module.css";

const Loader_known = () => (
  <div>
    <svg viewBox="0 0 100 100" className="loader">
      <g className="points">
        <circle fill="#fff" r="50" cy="50" cx="50" className="ciw"></circle>
        <circle r="4" cy="50" cx="5" className="ci2"></circle>
        <circle r="4" cy="50" cx="95" className="ci1"></circle>
      </g>
    </svg>
  </div>
);

export default Loader_known;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_known = () => (
         <div>
          <svg viewBox="0 0 100 100" className="loader">
<g className="points"> 
  <circle fill="#fff" r="50" cy="50" cx="50" className="ciw"></circle>
<circle r="4" cy="50" cx="5" className="ci2"></circle>
<circle r="4" cy="50" cx="95" className="ci1"></circle>
</g>
</svg>
        </div>
        );

        export default Loader_known;
        
        
         */
}
