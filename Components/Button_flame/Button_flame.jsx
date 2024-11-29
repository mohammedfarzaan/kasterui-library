import React from "react";
import styles from "./Button_flame.module.css";

const Button_flame = () => (
  <div>
    <div className={styles["button"]} data-tooltip="Size: 20Mb">
      <div className={styles["button-wrapper"]}>
        <div className={styles["text"]}>Download</div>
        <span className={styles["icon"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="2em"
            height="2em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  </div>
);

export default Button_flame;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_flame = () => (
         <div>
          <div className="button" data-tooltip="Size: 20Mb">
<div className="button-wrapper">
  <div className="text">Download</div>
    <span className="icon">
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"></path></svg>
    </span>
  </div>
</div>
        </div>
        );

        export default Button_flame;
        
        
         */
}
