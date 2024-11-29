import React from "react";
import styles from "./Card_wonder.module.css";

const Card_wonder = () => (
  <div>
    <div className={styles["card"]}>
      <svg
        height="100%"
        width="100%"
        className={styles["border"]}
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y2="0" x2="600" y1="0" x1="0" className={styles["top"]}></line>
        <line
          y2="-960"
          x2="0"
          y1="320"
          x1="0"
          className={styles["left"]}
        ></line>
        <line
          y2="320"
          x2="-600"
          y1="320"
          x1="200"
          className={styles["bottom"]}
        ></line>
        <line
          y2="960"
          x2="200"
          y1="0"
          x1="200"
          className={styles["right"]}
        ></line>
      </svg>
      <div className={styles["logo"]}>
        <svg
          className={styles["logo-svg"]}
          viewBox="0 0 29.667 31.69"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            transform="translate(0 0)"
            d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z"
          ></path>
          <path
            transform="translate(-45.91 0)"
            d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z"
          ></path>
          <path
            transform="translate(0 -51.963)"
            d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
);

export default Card_wonder;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_wonder = () => (
         <div>
          <div className="card">
  <svg height="100%" width="100%" className="border" xmlns="http://www.w3.org/2000/svg">
    <line y2="0" x2="600" y1="0" x1="0" className="top"></line>
    <line y2="-960" x2="0" y1="320" x1="0" className="left"></line>
    <line y2="320" x2="-600" y1="320" x1="200" className="bottom"></line>
    <line y2="960" x2="200" y1="0" x1="200" className="right"></line>
  </svg>
  <div className="logo">
    <svg className="logo-svg" viewBox="0 0 29.667 31.69" xmlns="http://www.w3.org/2000/svg">
      <path transform="translate(0 0)" d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z"></path>
      <path transform="translate(-45.91 0)" d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z"></path>
      <path transform="translate(0 -51.963)" d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z"></path>
    </svg>
  </div>  
</div>
        </div>
        );

        export default Card_wonder;
        
        
         */
}
