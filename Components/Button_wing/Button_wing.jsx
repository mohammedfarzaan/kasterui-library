import React from "react";
import styles from "./Button_wing.module.css";

const Button_wing = () => (
  <div>
    <div className={styles["icon-conatiner"]}>
      <svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 19 21"
        height="21px"
        width="19px"
      >
        <title>Group</title>
        <g
          fill-rule="evenodd"
          fill="none"
          stroke-width="1"
          stroke="none"
          id="Page-1"
        >
          <g transform="translate(-142.000000, -122.000000)" id="Artboard">
            <g transform="translate(142.000000, 122.000000)" id="Group">
              <path
                fill="#C4FFE4"
                id="Rectangle-Copy"
                d="M3.4,4 L11.5,4 L11.5,4 L16,8.25 L16,17.6 C16,19.4777681 14.4777681,21 12.6,21 L3.4,21 C1.52223185,21 6.74049485e-16,19.4777681 0,17.6 L0,7.4 C2.14128934e-16,5.52223185 1.52223185,4 3.4,4 Z"
              ></path>
              <path
                fill="#85EBBC"
                id="Rectangle"
                d="M6.4,0 L12,0 L12,0 L19,6.5 L19,14.6 C19,16.4777681 17.4777681,18 15.6,18 L6.4,18 C4.52223185,18 3,16.4777681 3,14.6 L3,3.4 C3,1.52223185 4.52223185,7.89029623e-16 6.4,0 Z"
              ></path>
              <path
                fill="#64B18D"
                id="Path-2"
                d="M12,0 L12,5.5 C12,6.05228475 12.4477153,6.5 13,6.5 L19,6.5 L19,6.5 L12,0 Z"
              ></path>
            </g>
          </g>
        </g>
      </svg>
      <svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 19 21"
        height="21px"
        width="19px"
      >
        <title>Group</title>
        <g
          fill-rule="evenodd"
          fill="none"
          stroke-width="1"
          stroke="none"
          id="Page-1"
        >
          <g transform="translate(-142.000000, -122.000000)" id="Artboard">
            <g transform="translate(142.000000, 122.000000)" id="Group">
              <path
                fill="#C4FFE4"
                id="Rectangle-Copy"
                d="M3.4,4 L11.5,4 L11.5,4 L16,8.25 L16,17.6 C16,19.4777681 14.4777681,21 12.6,21 L3.4,21 C1.52223185,21 6.74049485e-16,19.4777681 0,17.6 L0,7.4 C2.14128934e-16,5.52223185 1.52223185,4 3.4,4 Z"
              ></path>
              <path
                fill="#85EBBC"
                id="Rectangle"
                d="M6.4,0 L12,0 L12,0 L19,6.5 L19,14.6 C19,16.4777681 17.4777681,18 15.6,18 L6.4,18 C4.52223185,18 3,16.4777681 3,14.6 L3,3.4 C3,1.52223185 4.52223185,7.89029623e-16 6.4,0 Z"
              ></path>
              <path
                fill="#64B18D"
                id="Path-2"
                d="M12,0 L12,5.5 C12,6.05228475 12.4477153,6.5 13,6.5 L19,6.5 L19,6.5 L12,0 Z"
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </div>
    <div className={styles["text"]}>long press me</div>
  </div>
);

export default Button_wing;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_wing = () => (
         <div>
          <div className="icon-conatiner">
    
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 19 21" height="21px" width="19px">
      <title>Group</title>
      <g fill-rule="evenodd" fill="none" stroke-width="1" stroke="none" id="Page-1">
        <g transform="translate(-142.000000, -122.000000)" id="Artboard">
          <g transform="translate(142.000000, 122.000000)" id="Group">
            <path fill="#C4FFE4" id="Rectangle-Copy" d="M3.4,4 L11.5,4 L11.5,4 L16,8.25 L16,17.6 C16,19.4777681 14.4777681,21 12.6,21 L3.4,21 C1.52223185,21 6.74049485e-16,19.4777681 0,17.6 L0,7.4 C2.14128934e-16,5.52223185 1.52223185,4 3.4,4 Z"></path>
            <path fill="#85EBBC" id="Rectangle" d="M6.4,0 L12,0 L12,0 L19,6.5 L19,14.6 C19,16.4777681 17.4777681,18 15.6,18 L6.4,18 C4.52223185,18 3,16.4777681 3,14.6 L3,3.4 C3,1.52223185 4.52223185,7.89029623e-16 6.4,0 Z"></path>
            <path fill="#64B18D" id="Path-2" d="M12,0 L12,5.5 C12,6.05228475 12.4477153,6.5 13,6.5 L19,6.5 L19,6.5 L12,0 Z"></path>
          </g>
        </g>
      </g>
    </svg>
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 19 21" height="21px" width="19px">
      <title>Group</title>
      <g fill-rule="evenodd" fill="none" stroke-width="1" stroke="none" id="Page-1">
        <g transform="translate(-142.000000, -122.000000)" id="Artboard">
          <g transform="translate(142.000000, 122.000000)" id="Group">
            <path fill="#C4FFE4" id="Rectangle-Copy" d="M3.4,4 L11.5,4 L11.5,4 L16,8.25 L16,17.6 C16,19.4777681 14.4777681,21 12.6,21 L3.4,21 C1.52223185,21 6.74049485e-16,19.4777681 0,17.6 L0,7.4 C2.14128934e-16,5.52223185 1.52223185,4 3.4,4 Z"></path>
            <path fill="#85EBBC" id="Rectangle" d="M6.4,0 L12,0 L12,0 L19,6.5 L19,14.6 C19,16.4777681 17.4777681,18 15.6,18 L6.4,18 C4.52223185,18 3,16.4777681 3,14.6 L3,3.4 C3,1.52223185 4.52223185,7.89029623e-16 6.4,0 Z"></path>
            <path fill="#64B18D" id="Path-2" d="M12,0 L12,5.5 C12,6.05228475 12.4477153,6.5 13,6.5 L19,6.5 L19,6.5 L12,0 Z"></path>
          </g>
        </g>
      </g>
    </svg>
  </div>
<div className="text">long press me</div>
        </div>
        );

        export default Button_wing;
        
        
         */
}
