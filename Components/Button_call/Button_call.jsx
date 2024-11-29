import React from "react";
import styles from "./Button_call.module.css";

const Button_call = () => (
  <div>
    <button className={styles["beach-button"]}>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1L2 21h20z" fill="#fff"></path>
        <path
          d="M12 16.6l-4-4.2 1.4-1.4L12 13l6.6-6.6L18 9z"
          fill="#1565c0"
        ></path>
        <path
          d="M12 18h-.3c-3.8-.3-7-3.5-7.3-7.3H1.9c.4 4.5 4.2 8.2 8.8 8.7V22c1.6 0 3-1.3 3-3s-1.3-3-3-3z"
          fill="#00838f"
        ></path>
        <path
          d="M12 18c-.6 0-1.1-.1-1.6-.2-1.2-.4-2.2-1.4-2.6-2.6-.1-.5-.2-1-.2-1.6 0-.9.2-1.8.7-2.5l4.4 4.4-1.4 1.4-3-3v-4.2c.7-.4 1.6-.7 2.5-.7.6 0 1.1.1 1.6.2 1.2.4 2.2 1.4 2.6 2.6.1.5.2 1 .2 1.6 0 .9-.2 1.8-.7 2.5l-4.4-4.4 1.4-1.4 3 3v4.2c-.7.4-1.6.7-2.5.7z"
          fill="#00acc1"
        ></path>
      </svg>
      <span>Download</span>
    </button>
  </div>
);

export default Button_call;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_call = () => (
         <div>
          <button className="beach-button">
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1L2 21h20z" fill="#fff"></path>
    <path d="M12 16.6l-4-4.2 1.4-1.4L12 13l6.6-6.6L18 9z" fill="#1565c0"></path>
    <path d="M12 18h-.3c-3.8-.3-7-3.5-7.3-7.3H1.9c.4 4.5 4.2 8.2 8.8 8.7V22c1.6 0 3-1.3 3-3s-1.3-3-3-3z" fill="#00838f"></path>
    <path d="M12 18c-.6 0-1.1-.1-1.6-.2-1.2-.4-2.2-1.4-2.6-2.6-.1-.5-.2-1-.2-1.6 0-.9.2-1.8.7-2.5l4.4 4.4-1.4 1.4-3-3v-4.2c.7-.4 1.6-.7 2.5-.7.6 0 1.1.1 1.6.2 1.2.4 2.2 1.4 2.6 2.6.1.5.2 1 .2 1.6 0 .9-.2 1.8-.7 2.5l-4.4-4.4 1.4-1.4 3 3v4.2c-.7.4-1.6.7-2.5.7z" fill="#00acc1"></path>
  </svg>
  <span>Download</span>
</button>
        </div>
        );

        export default Button_call;
        
        
         */
}
