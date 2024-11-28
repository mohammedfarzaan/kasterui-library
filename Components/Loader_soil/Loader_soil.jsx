import React from "react";
import styles from "./Loader_soil.module.css";

const Loader_soil = () => (
  <div>
    <svg className="loader" viewBox="0 0 100 100">
      <circle className="moon moon-back"></circle>
      <circle className="planet"></circle>
      <circle className="moon moon-front"></circle>
    </svg>
  </div>
);

export default Loader_soil;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_soil = () => (
         <div>
          <svg className="loader" viewBox="0 0 100 100">
    <circle className="moon moon-back"></circle>
    <circle className="planet"></circle>
    <circle className="moon moon-front"></circle>
</svg>
        </div>
        );

        export default Loader_soil;
        
        
         */
}
