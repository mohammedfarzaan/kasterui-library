import React from "react";
import styles from "./Button_brief.module.css";

const Button_brief = () => (
  <div>
    <button className={styles["button"]}>
      <span>Add to cart</span>
      <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g strokeWidth="0" id="SVGRepo_bgCarrier"></g>
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          id="SVGRepo_tracerCarrier"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <defs> </defs>{" "}
          <g id="cart">
            {" "}
            <circle
              r="1.91"
              cy="20.59"
              cx="10.07"
              className="cls-1"
            ></circle>{" "}
            <circle r="1.91" cy="20.59" cx="18.66" className="cls-1"></circle>{" "}
            <path
              d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10"
              className="cls-1"
            ></path>{" "}
            <polyline
              points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91"
              className="cls-1"
            ></polyline>{" "}
          </g>{" "}
        </g>
      </svg>
    </button>
  </div>
);

export default Button_brief;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_brief = () => (
         <div>
          <button className="button">
  <span>Add to cart</span>
  <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeWidth="0" id="SVGRepo_bgCarrier"></g><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <defs>  </defs> <g id="cart"> <circle r="1.91" cy="20.59" cx="10.07" className="cls-1"></circle> <circle r="1.91" cy="20.59" cx="18.66" className="cls-1"></circle> <path d="M.52,1.5H3.18a2.87,2.87,0,0,1,2.74,2L9.11,13.91H8.64A2.39,2.39,0,0,0,6.25,16.3h0a2.39,2.39,0,0,0,2.39,2.38h10" className="cls-1"></path> <polyline points="7.21 5.32 22.48 5.32 22.48 7.23 20.57 13.91 9.11 13.91" className="cls-1"></polyline> </g> </g></svg>
</button>
        </div>
        );

        export default Button_brief;
        
        
         */
}
