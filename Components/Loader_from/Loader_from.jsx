import React from "react";
import styles from "./Loader_from.module.css";

const Loader_from = () => (
  <div>
    <div className={styles["loader-pencil-content"]}>
      <div className={styles["btn"]}>
        <svg
          id="loader-pencil"
          xmlns="http://www.w3.org/2000/svg"
          width="667"
          height="182"
          viewBox="0 0 677.34762 182.15429"
        >
          <g>
            <path
              id="body-pencil"
              d="M128.273 0l-3.9 2.77L0 91.078l128.273 91.076 549.075-.006V.008L128.273 0zm20.852 30l498.223.006V152.15l-498.223.007V30zm-25 9.74v102.678l-49.033-34.813-.578-32.64 49.61-35.225z"
            ></path>
            <path
              id="line"
              d="M134.482 157.147v25l518.57.008.002-25-518.572-.008z"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  </div>
);

export default Loader_from;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_from = () => (
         <div>
          <div className="loader-pencil-content">
  <div className="btn">
    <svg id="loader-pencil" xmlns="http://www.w3.org/2000/svg" width="667" height="182" viewBox="0 0 677.34762 182.15429">
      <g>
        <path id="body-pencil" d="M128.273 0l-3.9 2.77L0 91.078l128.273 91.076 549.075-.006V.008L128.273 0zm20.852 30l498.223.006V152.15l-498.223.007V30zm-25 9.74v102.678l-49.033-34.813-.578-32.64 49.61-35.225z">
        </path>
        <path id="line" d="M134.482 157.147v25l518.57.008.002-25-518.572-.008z">
        </path>
      </g>
    </svg>
  </div>
</div>
        </div>
        );

        export default Loader_from;
        
        
         */
}
