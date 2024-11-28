import React from "react";
import styles from "./Loader_speed.module.css";

const Loader_speed = () => (
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

export default Loader_speed;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_speed = () => (
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

        export default Loader_speed;
        
        
         */
}
