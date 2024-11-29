import React from "react";
import styles from "./Toggle_struck.module.css";

const Toggle_struck = () => (
  <div>
    <input type="checkbox" id="lock" />
    <label for="lock" className={styles["lock-label"]}>
      <span className={styles["lock-wrapper"]}>
        <span className={styles["shackle"]}></span>
        <svg
          className={styles["lock-body"]}
          width=""
          height=""
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 5C0 2.23858 2.23858 0 5 0H23C25.7614 0 28 2.23858 28 5V23C28 25.7614 25.7614 28 23 28H5C2.23858 28 0 25.7614 0 23V5ZM16 13.2361C16.6137 12.6868 17 11.8885 17 11C17 9.34315 15.6569 8 14 8C12.3431 8 11 9.34315 11 11C11 11.8885 11.3863 12.6868 12 13.2361V18C12 19.1046 12.8954 20 14 20C15.1046 20 16 19.1046 16 18V13.2361Z"
            fill="white"
          ></path>
        </svg>
      </span>
    </label>
  </div>
);

export default Toggle_struck;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_struck = () => (
         <div>
          <input type="checkbox" id="lock" />
<label for="lock" className="lock-label">
  <span className="lock-wrapper">
    <span className="shackle"></span>
    <svg
      className="lock-body"
      width=""
      height=""
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 5C0 2.23858 2.23858 0 5 0H23C25.7614 0 28 2.23858 28 5V23C28 25.7614 25.7614 28 23 28H5C2.23858 28 0 25.7614 0 23V5ZM16 13.2361C16.6137 12.6868 17 11.8885 17 11C17 9.34315 15.6569 8 14 8C12.3431 8 11 9.34315 11 11C11 11.8885 11.3863 12.6868 12 13.2361V18C12 19.1046 12.8954 20 14 20C15.1046 20 16 19.1046 16 18V13.2361Z"
        fill="white"
      ></path>
    </svg>
  </span>
</label>
        </div>
        );

        export default Toggle_struck;
        
        
         */
}
