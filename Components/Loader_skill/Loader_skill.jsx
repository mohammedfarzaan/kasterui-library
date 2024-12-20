import React from "react";
import styles from "./Loader_skill.module.css";

const Loader_skill = () => (
  <div>
    <svg
      className={styles["pl"]}
      width="128px"
      height="128px"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className={styles["pl__ring1"]}
        cx="64"
        cy="64"
        r="60"
        fill="none"
        stroke="hsl(3,90%,55%)"
        strokeWidth="8"
        transform="rotate(-90,64,64)"
        strokeLinecap="round"
        stroke-dasharray="377 377"
        stroke-dashoffset="-376.4"
      ></circle>
      <circle
        className={styles["pl__ring2"]}
        cx="64"
        cy="64"
        r="52.5"
        fill="none"
        stroke="hsl(13,90%,55%)"
        strokeWidth="7"
        transform="rotate(-90,64,64)"
        strokeLinecap="round"
        stroke-dasharray="329.9 329.9"
        stroke-dashoffset="-329.3"
      ></circle>
      <circle
        className={styles["pl__ring3"]}
        cx="64"
        cy="64"
        r="46"
        fill="none"
        stroke="hsl(23,90%,55%)"
        strokeWidth="6"
        transform="rotate(-90,64,64)"
        strokeLinecap="round"
        stroke-dasharray="289 289"
        stroke-dashoffset="-288.6"
      ></circle>
      <circle
        className={styles["pl__ring4"]}
        cx="64"
        cy="64"
        r="40.5"
        fill="none"
        stroke="hsl(33,90%,55%)"
        strokeWidth="5"
        transform="rotate(-90,64,64)"
        strokeLinecap="round"
        stroke-dasharray="254.5 254.5"
        stroke-dashoffset="-254"
      ></circle>
      <circle
        className={styles["pl__ring5"]}
        cx="64"
        cy="64"
        r="36"
        fill="none"
        stroke="hsl(43,90%,55%)"
        strokeWidth="4"
        transform="rotate(-90,64,64)"
        strokeLinecap="round"
        stroke-dasharray="226.2 226.2"
        stroke-dashoffset="-225.8"
      ></circle>
      <circle
        className={styles["pl__ring6"]}
        cx="64"
        cy="64"
        r="32.5"
        fill="none"
        stroke="hsl(53,90%,55%)"
        strokeWidth="3"
        transform="rotate(-90,64,64)"
        strokeLinecap="round"
        stroke-dasharray="204.2 204.2"
        stroke-dashoffset="-203.9"
      ></circle>
    </svg>
  </div>
);

export default Loader_skill;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_skill = () => (
         <div>
          <svg className="pl" width="128px" height="128px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
  <circle className="pl__ring1" cx="64" cy="64" r="60" fill="none" stroke="hsl(3,90%,55%)" strokeWidth="8" transform="rotate(-90,64,64)" strokeLinecap="round" stroke-dasharray="377 377" stroke-dashoffset="-376.4"></circle>
  <circle className="pl__ring2" cx="64" cy="64" r="52.5" fill="none" stroke="hsl(13,90%,55%)" strokeWidth="7" transform="rotate(-90,64,64)" strokeLinecap="round" stroke-dasharray="329.9 329.9" stroke-dashoffset="-329.3"></circle>
  <circle className="pl__ring3" cx="64" cy="64" r="46" fill="none" stroke="hsl(23,90%,55%)" strokeWidth="6" transform="rotate(-90,64,64)" strokeLinecap="round" stroke-dasharray="289 289" stroke-dashoffset="-288.6"></circle>
  <circle className="pl__ring4" cx="64" cy="64" r="40.5" fill="none" stroke="hsl(33,90%,55%)" strokeWidth="5" transform="rotate(-90,64,64)" strokeLinecap="round" stroke-dasharray="254.5 254.5" stroke-dashoffset="-254"></circle>
  <circle className="pl__ring5" cx="64" cy="64" r="36" fill="none" stroke="hsl(43,90%,55%)" strokeWidth="4" transform="rotate(-90,64,64)" strokeLinecap="round" stroke-dasharray="226.2 226.2" stroke-dashoffset="-225.8"></circle>
  <circle className="pl__ring6" cx="64" cy="64" r="32.5" fill="none" stroke="hsl(53,90%,55%)" strokeWidth="3" transform="rotate(-90,64,64)" strokeLinecap="round" stroke-dasharray="204.2 204.2" stroke-dashoffset="-203.9"></circle>
</svg>
        </div>
        );

        export default Loader_skill;
        
        
         */
}
