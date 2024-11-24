import React from "react";
import styles from "./Button_forest.module.css";

const Button_forest = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        className={styles["svg-icon"]}
        width="24"
        viewBox="0 0 24 24"
        height="24"
        fill="none"
      >
        <g
          stroke-width="2"
          stroke-linecap="round"
          stroke="#056dfa"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path d="m3 7h17c.5523 0 1 .44772 1 1v11c0 .5523-.4477 1-1 1h-16c-.55228 0-1-.4477-1-1z"></path>
          <path d="m3 4.5c0-.27614.22386-.5.5-.5h6.29289c.13261 0 .25981.05268.35351.14645l2.8536 2.85355h-10z"></path>
        </g>
      </svg>
      <span className={styles["lable"]}>Archive</span>
    </button>
  </div>
);

export default Button_forest;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_forest = () => (
         <div>
          <button className="button">
  <svg className="svg-icon" width="24" viewBox="0 0 24 24" height="24" fill="none"><g stroke-width="2" stroke-linecap="round" stroke="#056dfa" fill-rule="evenodd" clip-rule="evenodd"><path d="m3 7h17c.5523 0 1 .44772 1 1v11c0 .5523-.4477 1-1 1h-16c-.55228 0-1-.4477-1-1z"></path><path d="m3 4.5c0-.27614.22386-.5.5-.5h6.29289c.13261 0 .25981.05268.35351.14645l2.8536 2.85355h-10z"></path></g></svg>
  <span className="lable">Archive</span>
</button>
        </div>
        );

        export default Button_forest;
        
        
         */
}
