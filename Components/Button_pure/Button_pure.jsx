import React from "react";
import styles from "./Button_pure.module.css";

const Button_pure = () => (
  <div>
    <button>
      <span>Next</span>
      <svg
        width="15"
        height="15"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_pure;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_pure = () => (
         <div>
          <button>
  <span>Next</span>
  <svg width="15" height="15" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinejoin="round" strokeLinecap="round"></path>
</svg>
</button>
        </div>
        );

        export default Button_pure;
        
        
         */
}
