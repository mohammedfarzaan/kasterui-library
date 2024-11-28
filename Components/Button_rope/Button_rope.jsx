import React from "react";
import styles from "./Button_rope.module.css";

const Button_rope = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        className="svg-icon"
        width="24"
        viewBox="0 0 24 24"
        height="24"
        fill="none"
      >
        <g
          strokeWidth="2"
          strokeLinecap="round"
          stroke="#056dfa"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="m3 7h17c.5523 0 1 .44772 1 1v11c0 .5523-.4477 1-1 1h-16c-.55228 0-1-.4477-1-1z"></path>
          <path d="m3 4.5c0-.27614.22386-.5.5-.5h6.29289c.13261 0 .25981.05268.35351.14645l2.8536 2.85355h-10z"></path>
        </g>
      </svg>
      <span className={styles["lable"]}>Archive</span>
    </button>
  </div>
);

export default Button_rope;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_rope = () => (
         <div>
          <button className="button">
  <svg className="svg-icon" width="24" viewBox="0 0 24 24" height="24" fill="none"><g strokeWidth="2" strokeLinecap="round" stroke="#056dfa" fillRule="evenodd" clipRule="evenodd"><path d="m3 7h17c.5523 0 1 .44772 1 1v11c0 .5523-.4477 1-1 1h-16c-.55228 0-1-.4477-1-1z"></path><path d="m3 4.5c0-.27614.22386-.5.5-.5h6.29289c.13261 0 .25981.05268.35351.14645l2.8536 2.85355h-10z"></path></g></svg>
  <span className="lable">Archive</span>
</button>
        </div>
        );

        export default Button_rope;
        
        
         */
}
