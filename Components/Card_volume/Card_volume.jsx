import React from "react";
import styles from "./Card_volume.module.css";

const Card_volume = () => (
  <div>
    <div className={styles["advice-container"]}>
      <p className={styles["paragraph"]}>A D V I S E # 140</p>
      <div className={styles["advice-details"]}>
        “If your hair is thinning, try dying your hair a similar tone to your
        scalp.”
      </div>
      <div className={styles["pattern-divider"]}>
        <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"></path>
            <g transform="translate(138)" fill="#CEE3E9">
              <rect width="6" height="16" rx="3"></rect>
              <rect x="14" width="6" height="16" rx="3"></rect>
            </g>
          </g>
        </svg>
      </div>
      <button>
        <svg
          className={styles["icon-dice"]}
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          ></path>
        </svg>
      </button>
    </div>
  </div>
);

export default Card_volume;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_volume = () => (
         <div>
          <div className="advice-container">
      <p className="paragraph">A D V I S E # 140</p>
      <div className="advice-details">“If your hair is thinning, try dying your hair a similar tone to your scalp.”</div>
<div className="pattern-divider">
<svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"></path><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"></rect><rect x="14" width="6" height="16" rx="3"></rect></g></g></svg>
</div>
<button>
        <svg className="icon-dice" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"></path></svg>
</button>
</div>
        </div>
        );

        export default Card_volume;
        
        
         */
}
