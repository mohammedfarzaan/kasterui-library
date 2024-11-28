import React from "react";
import styles from "./Button_spent.module.css";

const Button_spent = () => (
  <div>
    <button>
      <p>Subscribe</p>
      <svg
        strokeWidth="4"
        stroke="currentColor"
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_spent;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_spent = () => (
         <div>
          <button>
    <p>Subscribe</p>
    <svg strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
    </svg>
</button>
        </div>
        );

        export default Button_spent;
        
        
         */
}
