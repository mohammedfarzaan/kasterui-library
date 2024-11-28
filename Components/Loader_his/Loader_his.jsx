import React from "react";
import styles from "./Loader_his.module.css";

const Loader_his = () => (
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

export default Loader_his;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_his = () => (
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

        export default Loader_his;
        
        
         */
}
