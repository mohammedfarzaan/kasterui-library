import React from "react";
import styles from "./Button_event.module.css";

const Button_event = () => (
  <div>
    <button className={styles["button"]}>
      <a
        href="https://www.facebook.com/JDmOwO"
        className={styles["no-link-style"]}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.0"
          x="0px"
          y="0px"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          style={{}}
          className={styles["icon"] + styles["icons8-Facebook-Filled"]}
        >
          <path
            d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"
            fill="#ffffff"
          ></path>
        </svg>
      </a>
    </button>
    <br />
  </div>
);

export default Button_event;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_event = () => (
         <div>
          <button className="button">
  <a href="https://www.facebook.com/JDmOwO" className="no-link-style">
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.0" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" style={{}} className="icon icons8-Facebook-Filled">
      <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z" fill="#ffffff"></path>
    </svg>
  </a>
</button><br />
        </div>
        );

        export default Button_event;
        
        
         */
}
