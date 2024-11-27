import React from "react";
import styles from "./Loader_above.module.css";

const Loader_above = () => (
  <div>
    <svg
      xmlns="://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      height="24"
      width="24"
    >
      <g id="a">
        <g style="--c1: 120; --c2: 0; --delay: -0.5s">
          <path id="b"></path>
          <path id="c"></path>
        </g>
        <g style="--c1: 210; --c2: 60" transform="rotate(180 12 12)">
          <path id="b"></path>
          <path id="c"></path>
        </g>
      </g>
    </svg>
  </div>
);

export default Loader_above;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_above = () => (
         <div>
          <svg xmlns="://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="24" width="24">
  <g id="a">
    <g style="--c1: 120; --c2: 0; --delay: -0.5s">
      <path id="b">
      </path>
      <path id="c">
      </path>
    </g>
    <g style="--c1: 210; --c2: 60" transform="rotate(180 12 12)">
      <path id="b">
      </path>
      <path id="c">
      </path>
    </g>
  </g>
</svg>
        </div>
        );

        export default Loader_above;
        
        
         */
}
