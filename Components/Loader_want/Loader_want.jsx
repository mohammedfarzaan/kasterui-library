import React from "react";
import styles from "./Loader_want.module.css";

const Loader_want = () => (
  <div>
    <div>
      <svg
        height="108px"
        width="108px"
        viewBox="0 0 128 128"
        className="loader"
      >
        <defs>
          <clipPath id="loader-eyes">
            <circle
              transform="rotate(-40,64,64) translate(0,-56)"
              r="8"
              cy="64"
              cx="64"
              className="loader__eye1"
            ></circle>
            <circle
              transform="rotate(40,64,64) translate(0,-56)"
              r="8"
              cy="64"
              cx="64"
              className="loader__eye2"
            ></circle>
          </clipPath>
          <linearGradient y2="1" x2="0" y1="0" x1="0" id="loader-grad">
            <stop stop-color="#000" offset="0%"></stop>
            <stop stop-color="#fff" offset="100%"></stop>
          </linearGradient>
          <mask id="loader-mask">
            <rect
              fill="url(#loader-grad)"
              height="128"
              width="128"
              y="0"
              x="0"
            ></rect>
          </mask>
        </defs>
        <g
          stroke-dasharray="175.93 351.86"
          strokeWidth="12"
          strokeLinecap="round"
        >
          <g>
            <rect
              clip-path="url(#loader-eyes)"
              height="64"
              width="128"
              fill="hsl(193,90%,50%)"
            ></rect>
            <g stroke="hsl(193,90%,50%)" fill="none">
              <circle
                transform="rotate(180,64,64)"
                r="56"
                cy="64"
                cx="64"
                className="loader__mouth1"
              ></circle>
              <circle
                transform="rotate(0,64,64)"
                r="56"
                cy="64"
                cx="64"
                className="loader__mouth2"
              ></circle>
            </g>
          </g>
          <g mask="url(#loader-mask)">
            <rect
              clip-path="url(#loader-eyes)"
              height="64"
              width="128"
              fill="hsl(223,90%,50%)"
            ></rect>
            <g stroke="hsl(223,90%,50%)" fill="none">
              <circle
                transform="rotate(180,64,64)"
                r="56"
                cy="64"
                cx="64"
                className="loader__mouth1"
              ></circle>
              <circle
                transform="rotate(0,64,64)"
                r="56"
                cy="64"
                cx="64"
                className="loader__mouth2"
              ></circle>
            </g>
          </g>
        </g>
      </svg>
    </div>
  </div>
);

export default Loader_want;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_want = () => (
         <div>
          <div>
  <svg height="108px" width="108px" viewBox="0 0 128 128" className="loader">
    <defs>
      <clipPath id="loader-eyes">
        <circle transform="rotate(-40,64,64) translate(0,-56)" r="8" cy="64" cx="64" className="loader__eye1"></circle>
        <circle transform="rotate(40,64,64) translate(0,-56)" r="8" cy="64" cx="64" className="loader__eye2"></circle>
      </clipPath>
      <linearGradient y2="1" x2="0" y1="0" x1="0" id="loader-grad">
        <stop stop-color="#000" offset="0%"></stop>
        <stop stop-color="#fff" offset="100%"></stop>
      </linearGradient>
      <mask id="loader-mask">
        <rect fill="url(#loader-grad)" height="128" width="128" y="0" x="0"></rect>
      </mask>
    </defs>
    <g stroke-dasharray="175.93 351.86" strokeWidth="12" strokeLinecap="round">
      <g>
        <rect clip-path="url(#loader-eyes)" height="64" width="128" fill="hsl(193,90%,50%)"></rect>
        <g stroke="hsl(193,90%,50%)" fill="none">
          <circle transform="rotate(180,64,64)" r="56" cy="64" cx="64" className="loader__mouth1"></circle>
          <circle transform="rotate(0,64,64)" r="56" cy="64" cx="64" className="loader__mouth2"></circle>
        </g>
      </g>
      <g mask="url(#loader-mask)">
        <rect clip-path="url(#loader-eyes)" height="64" width="128" fill="hsl(223,90%,50%)"></rect>
        <g stroke="hsl(223,90%,50%)" fill="none">
          <circle transform="rotate(180,64,64)" r="56" cy="64" cx="64" className="loader__mouth1"></circle>
          <circle transform="rotate(0,64,64)" r="56" cy="64" cx="64" className="loader__mouth2"></circle>
        </g>
      </g>
    </g>
  </svg>
</div>
        </div>
        );

        export default Loader_want;
        
        
         */
}
