import React from "react";
import styles from "./Loader_fire.module.css";

const Loader_fire = () => (
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

export default Loader_fire;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_fire = () => (
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

        export default Loader_fire;
        
        
         */
}
