import React from "react";
import styles from "./Button_final.module.css";

const Button_final = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["in"]}>
        <div className={styles["image"]}>
          <svg
            fill="#000000"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(-45)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"></path>
            </g>
          </svg>
        </div>
        <div className={styles["text"]}>Send Message</div>
      </div>
    </button>
  </div>
);

export default Button_final;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_final = () => (
         <div>
          <button className="button">
  <div className="in">
    <div className="image">
      <svg
        fill="#000000"
        width="25px"
        height="25px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        transform="rotate(-45)"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z"
          ></path>
        </g>
      </svg>
    </div>
    <div className="text">Send Message</div>
  </div>
</button>
        </div>
        );

        export default Button_final;
        
        
         */
}
