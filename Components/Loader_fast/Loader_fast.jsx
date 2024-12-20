import React from "react";
import styles from "./Loader_fast.module.css";

const Loader_fast = () => (
  <div>
    <svg
      className={styles["pl"]}
      width="240"
      height="240"
      viewBox="0 0 240 240"
    >
      <circle
        className={styles["pl__ring"] + styles["pl__ring--a"]}
        cx="120"
        cy="120"
        r="105"
        fill="none"
        stroke="#000"
        strokeWidth="20"
        stroke-dasharray="0 660"
        stroke-dashoffset="-330"
        strokeLinecap="round"
      ></circle>
      <circle
        className={styles["pl__ring"] + styles["pl__ring--b"]}
        cx="120"
        cy="120"
        r="35"
        fill="none"
        stroke="#000"
        strokeWidth="20"
        stroke-dasharray="0 220"
        stroke-dashoffset="-110"
        strokeLinecap="round"
      ></circle>
      <circle
        className={styles["pl__ring"] + styles["pl__ring--c"]}
        cx="85"
        cy="120"
        r="70"
        fill="none"
        stroke="#000"
        strokeWidth="20"
        stroke-dasharray="0 440"
        strokeLinecap="round"
      ></circle>
      <circle
        className={styles["pl__ring"] + styles["pl__ring--d"]}
        cx="155"
        cy="120"
        r="70"
        fill="none"
        stroke="#000"
        strokeWidth="20"
        stroke-dasharray="0 440"
        strokeLinecap="round"
      ></circle>
    </svg>
  </div>
);

export default Loader_fast;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_fast = () => (
         <div>
          <svg className="pl" width="240" height="240" viewBox="0 0 240 240">
	<circle className="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" strokeWidth="20" stroke-dasharray="0 660" stroke-dashoffset="-330" strokeLinecap="round"></circle>
	<circle className="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" strokeWidth="20" stroke-dasharray="0 220" stroke-dashoffset="-110" strokeLinecap="round"></circle>
	<circle className="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" stroke-dasharray="0 440" strokeLinecap="round"></circle>
	<circle className="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" strokeWidth="20" stroke-dasharray="0 440" strokeLinecap="round"></circle>
</svg>
        </div>
        );

        export default Loader_fast;
        
        
         */
}
