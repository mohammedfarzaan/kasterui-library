import React from "react";
import styles from "./Card_small.module.css";

const Card_small = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["boxshadow"]}></div>
      <div className={styles["main"]}>
        <div className={styles["top"]}></div>
        <div className={styles["left"] + styles["side"]}></div>
        <div className={styles["right"] + styles["side"]}></div>
        <div className={styles["title"]}>TITLE</div>
        <div className={styles["button-container"]}>
          <button className={styles["button"]}>
            <svg
              className={styles["svg"]}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="red"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
          </button>
          <button className={styles["button"]}>
            <svg
              className={styles["svg"] + styles["twitter"]}
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              fill="red"
              viewBox="0 0 512 512"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
            </svg>
          </button>
          <button className={styles["button"]}>
            <svg
              className={styles["svg"]}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="red"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Card_small;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_small = () => (
         <div>
          <div className="card">
  <div className="boxshadow"></div>
  <div className="main">
    <div className="top"></div>
    <div className="left side"></div>
    <div className="right side"></div>
    <div className="title">TITLE</div>
    <div className="button-container">
      <button className="button">
        <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="red" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
        </svg>
      </button>
      <button className="button">
        <svg className="svg twitter" xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="red" viewBox="0 0 512 512">
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z">
            </path>
        </svg>
      </button>
      <button className="button">
        <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
            </path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
      </button>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_small;
        
        
         */
}
