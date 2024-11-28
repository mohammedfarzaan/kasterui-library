import React from "react";
import styles from "./Button_him.module.css";

const Button_him = () => (
  <div>
    <button className={styles["Btn"]}>
      <span className={styles["leftContainer"]}>
        <svg
          fill="white"
          viewBox="0 0 512 512"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path>
        </svg>
        <span className={styles["like"]}>Like</span>
      </span>
      <span className={styles["likeCount"]}>2,050</span>
    </button>
  </div>
);

export default Button_him;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_him = () => (
         <div>
          <button className="Btn">
  <span className="leftContainer">
    <svg fill="white" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg>
    <span className="like">Like</span>
  </span>
  <span className="likeCount">
    2,050
  </span>
</button>
        </div>
        );

        export default Button_him;
        
        
         */
}
