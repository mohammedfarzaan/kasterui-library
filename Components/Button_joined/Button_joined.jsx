import React from "react";
import styles from "./Button_joined.module.css";

const Button_joined = () => (
  <div>
    <button>
      {" "}
      Enter Room
      <svg
        viewBox="0 0 16 16"
        className="bi bi-arrow-right"
        fill="currentColor"
        height="20"
        width="20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          fillRule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_joined;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_joined = () => (
         <div>
          <button> Enter Room
    <svg viewBox="0 0 16 16" className="bi bi-arrow-right" fill="currentColor" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" fillRule="evenodd"></path>
    </svg>
</button>
        </div>
        );

        export default Button_joined;
        
        
         */
}
