import React from "react";
import styles from "./Button_report.module.css";

const Button_report = () => (
  <div>
    <button className={styles["space-button"]}>
      <div className={styles["planet"]}></div>
      <div className={styles["flex"]}>
        <svg
          className={styles["moon"]}
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <circle fill="#66757F" cx="18" cy="18" r="18">
              {" "}
            </circle>{" "}
            <g fill="#5B6876">
              {" "}
              <circle cx="10.5" cy="8.5" r="3.5">
                {" "}
              </circle>{" "}
              <circle cx="20" cy="16" r="3">
                {" "}
              </circle>{" "}
              <circle cx="21.5" cy="27.5" r="3.5">
                {" "}
              </circle>{" "}
              <circle cx="21" cy="6" r="2">
                {" "}
              </circle>{" "}
              <circle cx="3" cy="18" r="1">
                {" "}
              </circle>{" "}
              <circle cx="30" cy="9" r="1">
                {" "}
              </circle>{" "}
              <circle cx="15" cy="31" r="1">
                {" "}
              </circle>{" "}
              <circle cx="32" cy="19" r="2">
                {" "}
              </circle>{" "}
              <circle cx="10" cy="23" r="2">
                {" "}
              </circle>{" "}
            </g>{" "}
          </g>
        </svg>
        <span className={styles["title"]}>Launch</span>
      </div>
      <svg
        className={styles["rocket"]}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 369.998 369.997"
        xml:space="preserve"
        stroke="#ffffff"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <g>
              {" "}
              <g>
                {" "}
                <path d="M369.993,6.919c0.022-1.846-0.692-3.622-1.998-4.927c-1.303-1.302-3.083-2.023-4.924-1.991 c-3.591,0.057-88.576,2.038-143.287,56.748l-69.377,69.377c-16.128-5.68-71.071-16.34-148.411,60.994 c-2.354,2.356-2.656,6.065-0.72,8.777c0.221,0.31,0.461,0.594,0.728,0.859c2.026,2.025,5.166,2.593,7.816,1.291 c0.524-0.259,49.841-24.086,76.021-7.355l-17.168,17.167c-0.417,0.417-0.776,0.887-1.074,1.394 c-0.723,1.257-17.33,31.098,22.357,70.779c39.684,39.685,69.528,23.085,70.774,22.356c0.516-0.297,0.977-0.658,1.396-1.075 l17.168-17.167c16.732,26.181-7.093,75.494-7.349,76.023c-1.304,2.65-0.743,5.784,1.288,7.817 c0.046,0.042,0.082,0.077,0.125,0.118c2.666,2.557,6.902,2.522,9.523-0.103c0.132-0.128,0.25-0.263,0.371-0.397 c76.917-77.14,66.282-131.926,60.607-148.026l69.378-69.377C367.946,95.494,369.932,10.512,369.993,6.919z M281.903,142.187 c-14.941,14.938-39.155,14.937-54.089,0.001c-14.934-14.933-14.935-39.148,0.003-54.087c14.933-14.934,39.15-14.934,54.086,0 C296.835,103.036,296.835,127.253,281.903,142.187z"></path>{" "}
                <path d="M89.388,320.865c-13.427,2.338-27.286,3.275-40.898,3.05c-1.157-0.021-2.344-1.417-2.341-2.36 c-0.002-2.062,0.049-5.066,0.101-7.127c0.076-3.013,0.204-6.021,0.364-9.033c0.378-6.827,0.937-13.676,1.943-20.44 c1.753-11.837,4.423-23.442,8.838-34.591c0.604-1.519,1.277-3.005,1.827-4.55c-12.384,5.298-22.051,15.85-28.861,27.224 c-6.624,11.057-10.913,23.427-13.293,36.067c-1.408,7.462-2.138,15.042-2.244,22.631c-0.049,4.196-0.316,9.271,1.142,13.295 c2.066,5.717,7.382,9.51,13.398,9.925c5.402,0.369,10.822,0.298,16.233-0.06c24.582-1.622,50.85-10.177,68.109-28.474 c4.245-4.746,7.948-9.744,10.52-15.605c-6.14,2.262-12.1,4.765-18.438,6.474C100.367,318.75,94.917,319.903,89.388,320.865z"></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    </button>
  </div>
);

export default Button_report;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_report = () => (
         <div>
          <button className="space-button">
  <div className="planet"></div>
  <div className="flex">
  <svg className="moon" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle fill="#66757F" cx="18" cy="18" r="18"> </circle> <g fill="#5B6876"> <circle cx="10.5" cy="8.5" r="3.5"> </circle> <circle cx="20" cy="16" r="3"> </circle> <circle cx="21.5" cy="27.5" r="3.5"> </circle> <circle cx="21" cy="6" r="2"> </circle> <circle cx="3" cy="18" r="1"> </circle> <circle cx="30" cy="9" r="1"> </circle> <circle cx="15" cy="31" r="1"> </circle> <circle cx="32" cy="19" r="2"> </circle> <circle cx="10" cy="23" r="2"> </circle> </g> </g></svg>
  <span className="title">Launch</span>
  </div>
  <svg className="rocket" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 369.998 369.997" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M369.993,6.919c0.022-1.846-0.692-3.622-1.998-4.927c-1.303-1.302-3.083-2.023-4.924-1.991 c-3.591,0.057-88.576,2.038-143.287,56.748l-69.377,69.377c-16.128-5.68-71.071-16.34-148.411,60.994 c-2.354,2.356-2.656,6.065-0.72,8.777c0.221,0.31,0.461,0.594,0.728,0.859c2.026,2.025,5.166,2.593,7.816,1.291 c0.524-0.259,49.841-24.086,76.021-7.355l-17.168,17.167c-0.417,0.417-0.776,0.887-1.074,1.394 c-0.723,1.257-17.33,31.098,22.357,70.779c39.684,39.685,69.528,23.085,70.774,22.356c0.516-0.297,0.977-0.658,1.396-1.075 l17.168-17.167c16.732,26.181-7.093,75.494-7.349,76.023c-1.304,2.65-0.743,5.784,1.288,7.817 c0.046,0.042,0.082,0.077,0.125,0.118c2.666,2.557,6.902,2.522,9.523-0.103c0.132-0.128,0.25-0.263,0.371-0.397 c76.917-77.14,66.282-131.926,60.607-148.026l69.378-69.377C367.946,95.494,369.932,10.512,369.993,6.919z M281.903,142.187 c-14.941,14.938-39.155,14.937-54.089,0.001c-14.934-14.933-14.935-39.148,0.003-54.087c14.933-14.934,39.15-14.934,54.086,0 C296.835,103.036,296.835,127.253,281.903,142.187z"></path> <path d="M89.388,320.865c-13.427,2.338-27.286,3.275-40.898,3.05c-1.157-0.021-2.344-1.417-2.341-2.36 c-0.002-2.062,0.049-5.066,0.101-7.127c0.076-3.013,0.204-6.021,0.364-9.033c0.378-6.827,0.937-13.676,1.943-20.44 c1.753-11.837,4.423-23.442,8.838-34.591c0.604-1.519,1.277-3.005,1.827-4.55c-12.384,5.298-22.051,15.85-28.861,27.224 c-6.624,11.057-10.913,23.427-13.293,36.067c-1.408,7.462-2.138,15.042-2.244,22.631c-0.049,4.196-0.316,9.271,1.142,13.295 c2.066,5.717,7.382,9.51,13.398,9.925c5.402,0.369,10.822,0.298,16.233-0.06c24.582-1.622,50.85-10.177,68.109-28.474 c4.245-4.746,7.948-9.744,10.52-15.605c-6.14,2.262-12.1,4.765-18.438,6.474C100.367,318.75,94.917,319.903,89.388,320.865z"></path> </g> </g> </g> </g></svg>
</button>
        </div>
        );

        export default Button_report;
        
        
         */
}
