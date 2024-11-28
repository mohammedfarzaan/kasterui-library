import React from "react";
import styles from "./Button_write.module.css";

const Button_write = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        viewBox="0 0 24 24"
        height="24"
        fill="none"
        className="svg-icon"
      >
        <g
          strokeWidth="2"
          strokeLinecap="round"
          stroke="#fff"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="m4 9c0-1.10457.89543-2 2-2h2l.44721-.89443c.33879-.67757 1.03131-1.10557 1.78889-1.10557h3.5278c.7576 0 1.4501.428 1.7889 1.10557l.4472.89443h2c1.1046 0 2 .89543 2 2v8c0 1.1046-.8954 2-2 2h-12c-1.10457 0-2-.8954-2-2z"></path>
          <path d="m15 13c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3z"></path>
        </g>
      </svg>
      <span className={styles["lable"]}>Take a Photo</span>
    </button>
  </div>
);

export default Button_write;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_write = () => (
         <div>
          <button className="button">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none" className="svg-icon"><g strokeWidth="2" strokeLinecap="round" stroke="#fff" fillRule="evenodd" clipRule="evenodd"><path d="m4 9c0-1.10457.89543-2 2-2h2l.44721-.89443c.33879-.67757 1.03131-1.10557 1.78889-1.10557h3.5278c.7576 0 1.4501.428 1.7889 1.10557l.4472.89443h2c1.1046 0 2 .89543 2 2v8c0 1.1046-.8954 2-2 2h-12c-1.10457 0-2-.8954-2-2z"></path><path d="m15 13c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3z"></path></g></svg>
  <span className="lable">Take a Photo</span>
</button>
        </div>
        );

        export default Button_write;
        
        
         */
}
