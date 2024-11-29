import React from "react";
import styles from "./Button_shop.module.css";

const Button_shop = () => (
  <div>
    <button className={styles["send-message-button"]}>
      <div className={styles["send-message-content"]}>
        <svg
          height="24"
          width="24"
          viewBox="0 0 23.19 19.89"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,19.89l23.19-9.95L0,0v7.74l16.58,2.21L0,12.16v7.74Z"
            fill="#ccc"
          ></path>
          <path
            d="M.42,19.53l22.36-9.59L.42.36v7.46l15.98,2.13L.42,12.08v7.46Z"
            fill="#fff"
          ></path>
          <path
            d="M1.1,18.95l20.99-9L1.1.95v7l15,2L1.1,11.95v7Z"
            fill="#000"
          ></path>
        </svg>
        <span>Send Message</span>
      </div>
    </button>
  </div>
);

export default Button_shop;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_shop = () => (
         <div>
          <button className="send-message-button">
  <div className="send-message-content">
    <svg
      height="24"
      width="24"
      viewBox="0 0 23.19 19.89"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,19.89l23.19-9.95L0,0v7.74l16.58,2.21L0,12.16v7.74Z"
        fill="#ccc"
      ></path>
      <path
        d="M.42,19.53l22.36-9.59L.42.36v7.46l15.98,2.13L.42,12.08v7.46Z"
        fill="#fff"
      ></path>
      <path
        d="M1.1,18.95l20.99-9L1.1.95v7l15,2L1.1,11.95v7Z"
        fill="#000"
      ></path>
    </svg>
    <span>Send Message</span>
  </div>
</button>
        </div>
        );

        export default Button_shop;
        
        
         */
}
