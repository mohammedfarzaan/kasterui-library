import React from "react";
import styles from "./Button_low.module.css";

const Button_low = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        id="UploadToCloud"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        height="16px"
        width="16px"
        className={styles["icon"]}
      >
        <path d="M0 0h24v24H0V0z" fill="none"></path>
        <path
          className={styles["color000000"] + styles["svgShape"]}
          fill="#000000"
          d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l4.65-4.65c.2-.2.51-.2.71 0L17 13h-3z"
        ></path>
      </svg>
      Upload CV
    </button>
  </div>
);

export default Button_low;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_low = () => (
         <div>
          <button className="button">
  <svg
    id="UploadToCloud"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height="16px"
    width="16px"
    className="icon"
  >
    <path d="M0 0h24v24H0V0z" fill="none"></path>
    <path
      className="color000000 svgShape"
      fill="#000000"
      d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l4.65-4.65c.2-.2.51-.2.71 0L17 13h-3z"
    ></path>
  </svg>
  Upload CV
</button>
        </div>
        );

        export default Button_low;
        
        
         */
}
