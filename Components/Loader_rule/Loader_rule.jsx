import React from "react";
import styles from "./Loader_rule.module.css";

const Loader_rule = () => (
  <div>
    <svg
      width="240"
      height="240"
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles["loader"]}
    >
      <defs>
        <path
          id="move-path"
          d="M102.546 83.5C109.859 70.8333 128.141 70.8333 135.454 83.5L157.971 122.5C165.284 135.167 156.143 151 141.517 151H96.4833C81.8571 151 72.7158 135.167 80.0289 122.5L102.546 83.5Z"
          fill="#D9D9D9"
        ></path>
        <filter id="goo">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="5"
            result="blur"
          ></feGaussianBlur>
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -32"
          ></feColorMatrix>
        </filter>
      </defs>
      <g filter="url(#goo)">
        <circle
          cx="119"
          cy="74"
          r="20"
          stroke="#6f8191"
          strokeWidth="8"
        ></circle>
        <circle
          cx="79"
          cy="141"
          r="20"
          stroke="#6f8191"
          strokeWidth="8"
        ></circle>
        <circle
          cx="157"
          cy="141"
          r="20"
          stroke="#6f8191"
          strokeWidth="8"
        ></circle>
        <circle cx="0" cy="0" r="14" fill="#6f8191">
          <animateMotion
            path="M102.546 83.5C109.859 70.8333 128.141 70.8333 135.454 83.5L157.971 122.5C165.284 135.167 156.143 151 141.517 151H96.4833C81.8571 151 72.7158 135.167 80.0289 122.5L102.546 83.5Z"
            dur="2s"
            repeatCount="indefinite"
          ></animateMotion>
        </circle>
      </g>
    </svg>
  </div>
);

export default Loader_rule;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_rule = () => (
         <div>
          <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="loader">
<defs>
    <path id="move-path" d="M102.546 83.5C109.859 70.8333 128.141 70.8333 135.454 83.5L157.971 122.5C165.284 135.167 156.143 151 141.517 151H96.4833C81.8571 151 72.7158 135.167 80.0289 122.5L102.546 83.5Z" fill="#D9D9D9"></path>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 60 -32"></feColorMatrix>
    </filter>
</defs>
<g filter="url(#goo)">
    <circle cx="119" cy="74" r="20" stroke="#6f8191" strokeWidth="8"></circle>
    <circle cx="79" cy="141" r="20" stroke="#6f8191" strokeWidth="8"></circle>
    <circle cx="157" cy="141" r="20" stroke="#6f8191" strokeWidth="8"></circle>
    <circle cx="0" cy="0" r="14" fill="#6f8191">
        <animateMotion path="M102.546 83.5C109.859 70.8333 128.141 70.8333 135.454 83.5L157.971 122.5C165.284 135.167 156.143 151 141.517 151H96.4833C81.8571 151 72.7158 135.167 80.0289 122.5L102.546 83.5Z" dur="2s" repeatCount="indefinite"></animateMotion>
    </circle> 
</g>
</svg>
        </div>
        );

        export default Loader_rule;
        
        
         */
}
