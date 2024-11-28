import React from "react";
import styles from "./Loader_chosen.module.css";

const Loader_chosen = () => (
  <div>
    <div className={styles["mini-loader-content"]}>
      <svg
        viewBox="0 0 500.00001 500.00001"
        height="100"
        width="100"
        xmlns="http://www.w3.org/2000/svg"
        id="mini-loader"
      >
        <g>
          <path
            d="M66.734 66.734v366.533h366.532V66.734H66.734zm15 15h336.532v336.533H81.734V81.734z"
            id="b0"
          ></path>
          <path
            d="M354.16 2.5v143.34H497.5V2.5H354.16zm10 10H487.5v123.34H364.16V12.5z"
            id="b2"
          ></path>
          <path
            d="M0 2.5v143.34h143.34V2.5H0zm10 10h123.34v123.34H10V12.5z"
            id="b1"
          ></path>
          <path
            d="M354.16 356.66V500H497.5V356.66H354.16zm10 10H487.5V490H364.16V366.66z"
            id="b3"
          ></path>
          <path
            d="M0 356.66V500h143.34V356.66H0zm10 10h123.34V490H10V366.66z"
            id="b4"
          ></path>
        </g>
      </svg>
    </div>
  </div>
);

export default Loader_chosen;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_chosen = () => (
         <div>
          <div className="mini-loader-content">
  <svg viewBox="0 0 500.00001 500.00001" height="100" width="100" xmlns="http://www.w3.org/2000/svg" id="mini-loader">
    <g>
      <path d="M66.734 66.734v366.533h366.532V66.734H66.734zm15 15h336.532v336.533H81.734V81.734z" id="b0">
      </path>
      <path d="M354.16 2.5v143.34H497.5V2.5H354.16zm10 10H487.5v123.34H364.16V12.5z" id="b2">
      </path>
      <path d="M0 2.5v143.34h143.34V2.5H0zm10 10h123.34v123.34H10V12.5z" id="b1">
      </path>
      <path d="M354.16 356.66V500H497.5V356.66H354.16zm10 10H487.5V490H364.16V366.66z" id="b3">
      </path>
      <path d="M0 356.66V500h143.34V356.66H0zm10 10h123.34V490H10V366.66z" id="b4">
      </path>
    </g>
  </svg>
</div>
        </div>
        );

        export default Loader_chosen;
        
        
         */
}
