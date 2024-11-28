import React from "react";
import styles from "./Button_cowboy.module.css";

const Button_cowboy = () => (
  <div>
    <button>
      <svg
        id="rocket"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        viewBox="0 0 416.449 416.449"
        xml:space="preserve"
      >
        <g id="tip">
          <path d="M399.76,16.699c10.12,37.84,8.67,78.13-4.34,115.28h-0.01L284.48,21.049v-0.01      C321.63,8.029,361.92,6.579,399.76,16.699z"></path>
        </g>
        <g id="rocket-body">
          <path d="M90.21,207.929l87.14-101.42h0.01l33.71-39.24c21.43-21.43,46.6-36.84,73.41-46.23v0.01      l110.93,110.93h0.01c-9.39,26.81-24.8,51.98-46.23,73.41l-39.24,33.71l-101.43,87.14l-29.57-29.57l-29.58-29.58l-29.58-29.58z"></path>
        </g>
        <g id="wings">
          <path
            id="wings-top"
            d="M309.95,239.099c1.74,45.6-14.8,91.78-49.61,126.59c-10.69,10.68-22.44,19.65-34.93,26.89      l-16.89-66.34L309.95,239.099z"
          ></path>
          <path
            id="wings-bottom"
            d="M177.35,106.509l-87.14,101.42l-66.33-16.88c7.24-12.49,16.21-24.24,26.89-34.93      C85.58,121.309,131.74,104.769,177.35,106.509z"
          ></path>
        </g>
        <g id="rocket-body-bottom">
          <path d="M208.52,326.239l-39.94,14.71c-10.98,4.05-23.31,1.34-31.58-6.94l-6.85-6.85l48.8-30.49      L208.52,326.239z"></path>
          <polygon points="178.95,296.669 130.15,327.159 130.14,327.159 109.72,306.739 149.37,267.089"></polygon>
          <polygon points="149.37,267.089 109.72,306.739 89.3,286.309 119.79,237.509"></polygon>
          <path d="M119.79,237.509l-30.49,48.8l-6.86-6.85c-8.27-8.28-10.98-20.6-6.94-31.58l14.71-39.95      L119.79,237.509z"></path>
        </g>
        <g id="flames">
          <path d="M28.88,339.459c-2.559,0-5.119-0.977-7.071-2.929c-3.905-3.905-3.905-10.237,0-14.143      l20.54-20.54c3.905-3.904,10.237-3.904,14.143,0c3.905,3.905,3.905,10.237,0,14.143l-20.54,20.54      C33.999,338.482,31.44,339.459,28.88,339.459z"></path>
          <path d="M10,416.439c-2.56,0-5.119-0.977-7.072-2.93c-3.905-3.905-3.904-10.237,0.001-14.142l68.47-68.46      c3.905-3.904,10.237-3.904,14.142,0.001c3.905,3.905,3.904,10.237-0.002,14.142l-68.47,68.46      C15.118,415.463,12.559,416.439,10,416.439z"></path>
          <path d="M73.29,411.259c-2.56,0-5.118-0.977-7.071-2.929c-3.905-3.905-3.905-10.237,0-14.143      l34.23-34.229c3.905-3.904,10.237-3.903,14.142,0c3.905,3.905,3.905,10.237,0,14.143l-34.23,34.229      C78.409,410.282,75.849,411.259,73.29,411.259z"></path>
        </g>
      </svg>

      <div id="smoke">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  </div>
);

export default Button_cowboy;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_cowboy = () => (
         <div>
          <button>
  <svg id="rocket" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 416.449 416.449" xml:space="preserve">
    <g id="tip">
      <path d="M399.76,16.699c10.12,37.84,8.67,78.13-4.34,115.28h-0.01L284.48,21.049v-0.01      C321.63,8.029,361.92,6.579,399.76,16.699z"></path>
    </g>
    <g id="rocket-body">
      <path d="M90.21,207.929l87.14-101.42h0.01l33.71-39.24c21.43-21.43,46.6-36.84,73.41-46.23v0.01      l110.93,110.93h0.01c-9.39,26.81-24.8,51.98-46.23,73.41l-39.24,33.71l-101.43,87.14l-29.57-29.57l-29.58-29.58l-29.58-29.58z"></path>
    </g>
    <g id="wings">
      <path id="wings-top" d="M309.95,239.099c1.74,45.6-14.8,91.78-49.61,126.59c-10.69,10.68-22.44,19.65-34.93,26.89      l-16.89-66.34L309.95,239.099z"></path>
      <path id="wings-bottom" d="M177.35,106.509l-87.14,101.42l-66.33-16.88c7.24-12.49,16.21-24.24,26.89-34.93      C85.58,121.309,131.74,104.769,177.35,106.509z"></path>
    </g>
    <g id="rocket-body-bottom">
      <path d="M208.52,326.239l-39.94,14.71c-10.98,4.05-23.31,1.34-31.58-6.94l-6.85-6.85l48.8-30.49      L208.52,326.239z"></path>
      <polygon points="178.95,296.669 130.15,327.159 130.14,327.159 109.72,306.739 149.37,267.089"></polygon>
      <polygon points="149.37,267.089 109.72,306.739 89.3,286.309 119.79,237.509"></polygon>
      <path d="M119.79,237.509l-30.49,48.8l-6.86-6.85c-8.27-8.28-10.98-20.6-6.94-31.58l14.71-39.95      L119.79,237.509z"></path>
    </g>
    <g id="flames">
      <path d="M28.88,339.459c-2.559,0-5.119-0.977-7.071-2.929c-3.905-3.905-3.905-10.237,0-14.143      l20.54-20.54c3.905-3.904,10.237-3.904,14.143,0c3.905,3.905,3.905,10.237,0,14.143l-20.54,20.54      C33.999,338.482,31.44,339.459,28.88,339.459z"></path>
      <path d="M10,416.439c-2.56,0-5.119-0.977-7.072-2.93c-3.905-3.905-3.904-10.237,0.001-14.142l68.47-68.46      c3.905-3.904,10.237-3.904,14.142,0.001c3.905,3.905,3.904,10.237-0.002,14.142l-68.47,68.46      C15.118,415.463,12.559,416.439,10,416.439z"></path>
      <path d="M73.29,411.259c-2.56,0-5.118-0.977-7.071-2.929c-3.905-3.905-3.905-10.237,0-14.143      l34.23-34.229c3.905-3.904,10.237-3.903,14.142,0c3.905,3.905,3.905,10.237,0,14.143l-34.23,34.229      C78.409,410.282,75.849,411.259,73.29,411.259z"></path>
    </g>
  </svg>

  <div id="smoke">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</button>
        </div>
        );

        export default Button_cowboy;
        
        
         */
}