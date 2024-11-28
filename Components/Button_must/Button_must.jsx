import React from "react";
import styles from "./Button_must.module.css";

const Button_must = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        className="svg-icon"
        fill="none"
        height="22"
        viewBox="0 0 20 20"
        width="22"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#fff" strokeLinecap="round" strokeWidth="1.5">
          <path d="m6.66669 6.66667h6.66671"></path>
          <path
            clipRule="evenodd"
            d="m3.33331 5.00001c0-.92047.74619-1.66667 1.66667-1.66667h10.00002c.9205 0 1.6666.7462 1.6666 1.66667v6.66669c0 .9205-.7461 1.6666-1.6666 1.6666h-4.8274c-.1105 0-.21654.044-.29462.122l-2.50004 2.5c-.26249.2625-.71129.0766-.71129-.2945v-1.9108c0-.2301-.18655-.4167-.41667-.4167h-1.25c-.92048 0-1.66667-.7461-1.66667-1.6666z"
            fillRule="evenodd"
          ></path>
          <path d="m6.66669 10h2.5"></path>
        </g>
      </svg>
      <span className={styles["lable"]}>Message</span>
    </button>
  </div>
);

export default Button_must;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_must = () => (
         <div>
          <button className="button">
  <svg className="svg-icon" fill="none" height="22" viewBox="0 0 20 20" width="22" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff" strokeLinecap="round" strokeWidth="1.5"><path d="m6.66669 6.66667h6.66671"></path><path clipRule="evenodd" d="m3.33331 5.00001c0-.92047.74619-1.66667 1.66667-1.66667h10.00002c.9205 0 1.6666.7462 1.6666 1.66667v6.66669c0 .9205-.7461 1.6666-1.6666 1.6666h-4.8274c-.1105 0-.21654.044-.29462.122l-2.50004 2.5c-.26249.2625-.71129.0766-.71129-.2945v-1.9108c0-.2301-.18655-.4167-.41667-.4167h-1.25c-.92048 0-1.66667-.7461-1.66667-1.6666z" fillRule="evenodd"></path><path d="m6.66669 10h2.5"></path></g></svg>
  <span className="lable">Message</span>
</button>
        </div>
        );

        export default Button_must;
        
        
         */
}
