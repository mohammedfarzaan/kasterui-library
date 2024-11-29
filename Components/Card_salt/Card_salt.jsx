import React from "react";
import styles from "./Card_salt.module.css";

const Card_salt = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card-image-container"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 512 512"
          strokeWidth="0"
          fill="currentColor"
          stroke="currentColor"
          className={styles["video-icon"]}
        >
          <path d="M464 384.39a32 32 0 01-13-2.77 15.77 15.77 0 01-2.71-1.54l-82.71-58.22A32 32 0 01352 295.7v-79.4a32 32 0 0113.58-26.16l82.71-58.22a15.77 15.77 0 012.71-1.54 32 32 0 0145 29.24v192.76a32 32 0 01-32 32zM268 400H84a68.07 68.07 0 01-68-68V180a68.07 68.07 0 0168-68h184.48A67.6 67.6 0 01336 179.52V332a68.07 68.07 0 01-68 68z"></path>
        </svg>
      </div>
      <p className={styles["card-title"]}>Card Title</p>
      <p className={styles["card-des"]}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        inventore natus modi repellendus dolorem unde odio sequi! Porro, cum
        maiores tempore suscipit laudantium perspiciatis, illo sunt,
        reprehenderit quae est blanditiis.
      </p>
      <div className={styles["card-btn"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 384 512"
          strokeWidth="0"
          fill="currentColor"
          stroke="currentColor"
        >
          <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
        </svg>
        <span className={styles["card-btn-text"]}>Watch Video</span>
      </div>
    </div>
  </div>
);

export default Card_salt;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_salt = () => (
         <div>
          <div className="card">
      <div className="card-image-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" strokeWidth="0" fill="currentColor" stroke="currentColor" className="video-icon">
          <path d="M464 384.39a32 32 0 01-13-2.77 15.77 15.77 0 01-2.71-1.54l-82.71-58.22A32 32 0 01352 295.7v-79.4a32 32 0 0113.58-26.16l82.71-58.22a15.77 15.77 0 012.71-1.54 32 32 0 0145 29.24v192.76a32 32 0 01-32 32zM268 400H84a68.07 68.07 0 01-68-68V180a68.07 68.07 0 0168-68h184.48A67.6 67.6 0 01336 179.52V332a68.07 68.07 0 01-68 68z"></path>
        </svg>
      </div>
      <p className="card-title">Card Title</p>
      <p className="card-des">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
        inventore natus modi repellendus dolorem unde odio sequi! Porro, cum
        maiores tempore suscipit laudantium perspiciatis, illo sunt,
        reprehenderit quae est blanditiis.
      </p>
      <div className="card-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 384 512" strokeWidth="0" fill="currentColor" stroke="currentColor">
          <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
        </svg>
        <span className="card-btn-text">Watch Video</span>
      </div>
    </div>
        </div>
        );

        export default Card_salt;
        
        
         */
}
