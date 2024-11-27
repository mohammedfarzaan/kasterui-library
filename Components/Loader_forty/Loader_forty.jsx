import React from "react";
import styles from "./Loader_forty.module.css";

const Loader_forty = () => (
  <div>
    <svg
      className="loader"
      viewBox="0 0 384 384"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="active"
        pathLength="360"
        fill="transparent"
        strokeWidth="32"
        cx="192"
        cy="192"
        r="176"
      ></circle>
      <circle
        className="track"
        pathLength="360"
        fill="transparent"
        strokeWidth="32"
        cx="192"
        cy="192"
        r="176"
      ></circle>
    </svg>
  </div>
);

export default Loader_forty;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_forty = () => (
         <div>
          <svg className="loader" viewBox="0 0 384 384" xmlns="http://www.w3.org/2000/svg">
  <circle
    className="active"
    pathLength="360"
    fill="transparent"
    strokeWidth="32"
    cx="192"
    cy="192"
    r="176"
  ></circle>
  <circle
    className="track"
    pathLength="360"
    fill="transparent"
    strokeWidth="32"
    cx="192"
    cy="192"
    r="176"
  ></circle>
</svg>
        </div>
        );

        export default Loader_forty;
        
        
         */
}
