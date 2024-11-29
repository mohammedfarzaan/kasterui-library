import React from "react";
import styles from "./Loader_like.module.css";

const Loader_like = () => (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      height="128px"
      width="128px"
      className={styles["pl"]}
    >
      <circle
        stroke-dashoffset="-376.4"
        stroke-dasharray="377 377"
        strokeLinecap="round"
        transform="rotate(-90,64,64)"
        strokeWidth="8"
        stroke="hsl(3,90%,55%)"
        fill="none"
        r="60"
        cy="64"
        cx="64"
        className={styles["pl__ring1"]}
      ></circle>
      <circle
        stroke-dashoffset="-329.3"
        stroke-dasharray="329.9 329.9"
        strokeLinecap="round"
        transform="rotate(-90,64,64)"
        strokeWidth="7"
        stroke="hsl(13,90%,55%)"
        fill="none"
        r="52.5"
        cy="64"
        cx="64"
        className={styles["pl__ring2"]}
      ></circle>
      <circle
        stroke-dashoffset="-288.6"
        stroke-dasharray="289 289"
        strokeLinecap="round"
        transform="rotate(-90,64,64)"
        strokeWidth="6"
        stroke="hsl(23,90%,55%)"
        fill="none"
        r="46"
        cy="64"
        cx="64"
        className={styles["pl__ring3"]}
      ></circle>
      <circle
        stroke-dashoffset="-254"
        stroke-dasharray="254.5 254.5"
        strokeLinecap="round"
        transform="rotate(-90,64,64)"
        strokeWidth="5"
        stroke="hsl(33,90%,55%)"
        fill="none"
        r="40.5"
        cy="64"
        cx="64"
        className={styles["pl__ring4"]}
      ></circle>
      <circle
        stroke-dashoffset="-225.8"
        stroke-dasharray="226.2 226.2"
        strokeLinecap="round"
        transform="rotate(-90,64,64)"
        strokeWidth="4"
        stroke="hsl(43,90%,55%)"
        fill="none"
        r="36"
        cy="64"
        cx="64"
        className={styles["pl__ring5"]}
      ></circle>
      <circle
        stroke-dashoffset="-203.9"
        stroke-dasharray="204.2 204.2"
        strokeLinecap="round"
        transform="rotate(-90,64,64)"
        strokeWidth="3"
        stroke="hsl(53,90%,55%)"
        fill="none"
        r="32.5"
        cy="64"
        cx="64"
        className={styles["pl__ring6"]}
      ></circle>
    </svg>
  </div>
);

export default Loader_like;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_like = () => (
         <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" height="128px" width="128px" className="pl">
	<circle stroke-dashoffset="-376.4" stroke-dasharray="377 377" strokeLinecap="round" transform="rotate(-90,64,64)" strokeWidth="8" stroke="hsl(3,90%,55%)" fill="none" r="60" cy="64" cx="64" className="pl__ring1"></circle>
	<circle stroke-dashoffset="-329.3" stroke-dasharray="329.9 329.9" strokeLinecap="round" transform="rotate(-90,64,64)" strokeWidth="7" stroke="hsl(13,90%,55%)" fill="none" r="52.5" cy="64" cx="64" className="pl__ring2"></circle>
	<circle stroke-dashoffset="-288.6" stroke-dasharray="289 289" strokeLinecap="round" transform="rotate(-90,64,64)" strokeWidth="6" stroke="hsl(23,90%,55%)" fill="none" r="46" cy="64" cx="64" className="pl__ring3"></circle>
	<circle stroke-dashoffset="-254" stroke-dasharray="254.5 254.5" strokeLinecap="round" transform="rotate(-90,64,64)" strokeWidth="5" stroke="hsl(33,90%,55%)" fill="none" r="40.5" cy="64" cx="64" className="pl__ring4"></circle>
	<circle stroke-dashoffset="-225.8" stroke-dasharray="226.2 226.2" strokeLinecap="round" transform="rotate(-90,64,64)" strokeWidth="4" stroke="hsl(43,90%,55%)" fill="none" r="36" cy="64" cx="64" className="pl__ring5"></circle>
	<circle stroke-dashoffset="-203.9" stroke-dasharray="204.2 204.2" strokeLinecap="round" transform="rotate(-90,64,64)" strokeWidth="3" stroke="hsl(53,90%,55%)" fill="none" r="32.5" cy="64" cx="64" className="pl__ring6"></circle>
</svg>
        </div>
        );

        export default Loader_like;
        
        
         */
}
