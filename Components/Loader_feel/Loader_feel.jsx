import React from "react";
import styles from "./Loader_feel.module.css";

const Loader_feel = () => (
  <div>
    <svg className="loader" viewBox="0 0 100 100">
      <circle className="moon moon-back"></circle>
      <circle className="planet"></circle>
      <circle className="moon moon-front"></circle>
    </svg>
  </div>
);

export default Loader_feel;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_feel = () => (
         <div>
          <svg className="loader" viewBox="0 0 100 100">
    <circle className="moon moon-back"></circle>
    <circle className="planet"></circle>
    <circle className="moon moon-front"></circle>
</svg>
        </div>
        );

        export default Loader_feel;
        
        
         */
}
