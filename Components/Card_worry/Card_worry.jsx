import React from "react";
import styles from "./Card_worry.module.css";

const Card_worry = () => (
  <div>
    <div className={styles["card"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 409 436"
        height="130"
        width="130"
      >
        <path
          fill="#C28F2B"
          d="M25.29 133.28C9.63001 161.66 0.720001 194.16 0.720001 228.72C0.720001 263.28 9.63001 295.81 25.29 324.19V133.28Z"
        ></path>
        <path
          fill="#C28F2B"
          d="M204.72 28.1802C188.17 28.1802 172.11 30.1802 156.7 33.8102V65.3702C171.96 61.0702 188.05 58.7102 204.72 58.7102C300.22 58.7102 377.65 134.59 377.65 228.21C377.65 270.37 361.9 308.93 335.91 338.59L330.98 355.89L320.07 394.18C373.61 358.04 408.75 297.43 408.75 228.77C408.72 117.96 317.39 28.1802 204.72 28.1802Z"
        ></path>
        <path
          fill="#C28F2B"
          d="M156.7 332.8H313.17H316.59C343.07 305.6 359.38 268.77 359.38 228.21C359.38 144.49 290.15 76.6401 204.73 76.6401C187.96 76.6401 171.84 79.3101 156.71 84.1201V332.8H156.7Z"
        ></path>
        <path
          fill="#C28F2B"
          d="M138.2 0.680176H21.8L43.78 45.5402V391.05L21.8 435.88H288.93L313.16 350.98H138.2V0.680176Z"
        ></path>
      </svg>
      <p className={styles["text"]}>League of legends</p>
    </div>
  </div>
);

export default Card_worry;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_worry = () => (
         <div>
          <div className="card">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 409 436" height="130" width="130">
<path fill="#C28F2B" d="M25.29 133.28C9.63001 161.66 0.720001 194.16 0.720001 228.72C0.720001 263.28 9.63001 295.81 25.29 324.19V133.28Z"></path>
<path fill="#C28F2B" d="M204.72 28.1802C188.17 28.1802 172.11 30.1802 156.7 33.8102V65.3702C171.96 61.0702 188.05 58.7102 204.72 58.7102C300.22 58.7102 377.65 134.59 377.65 228.21C377.65 270.37 361.9 308.93 335.91 338.59L330.98 355.89L320.07 394.18C373.61 358.04 408.75 297.43 408.75 228.77C408.72 117.96 317.39 28.1802 204.72 28.1802Z"></path>
<path fill="#C28F2B" d="M156.7 332.8H313.17H316.59C343.07 305.6 359.38 268.77 359.38 228.21C359.38 144.49 290.15 76.6401 204.73 76.6401C187.96 76.6401 171.84 79.3101 156.71 84.1201V332.8H156.7Z"></path>
<path fill="#C28F2B" d="M138.2 0.680176H21.8L43.78 45.5402V391.05L21.8 435.88H288.93L313.16 350.98H138.2V0.680176Z"></path>
</svg>
  <p className="text">League of legends
</p></div>
        </div>
        );

        export default Card_worry;
        
        
         */
}
