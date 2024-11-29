import React from "react";
import styles from "./Card_cream.module.css";

const Card_cream = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["card"]}>
        <div className={styles["header"]}>
          <p className={styles["title"]}>Terminal</p>
          <span className={styles["copy"]}>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className={
                styles["w-[19px]"] +
                styles["h-[19px]"] +
                styles["text-gray-800"] +
                styles["dark:text-white"]
              }
            >
              <path
                clipRule="evenodd"
                d="M18 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V9a4 4 0 0 0-4-4h-3a1.99 1.99 0 0 0-1 .267V5a2 2 0 0 1 2-2h7Z"
                fillRule="evenodd"
              ></path>
              <path
                clipRule="evenodd"
                d="M8 7.054V11H4.2a2 2 0 0 1 .281-.432l2.46-2.87A2 2 0 0 1 8 7.054ZM10 7v4a2 2 0 0 1-2 2H4v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z"
                fillRule="evenodd"
              ></path>
            </svg>
          </span>
        </div>

        <div className={styles["footer"]}>
          <div className={styles["code"]}>
            <span className={styles["icon"]}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                height="13"
                width="13"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className={
                  styles["w-[19px]"] +
                  styles["h-[19px]"] +
                  styles["text-gray-800"] +
                  styles["dark:text-white"]
                }
              >
                <path
                  d="m9 5 7 7-7 7"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  stroke="currentColor"
                ></path>
              </svg>
            </span>
            <p className={styles["text"]}>npm install -D tailwindcss</p>
          </div>
          <div className={styles["code"]}>
            <span className={styles["icon"]}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                height="13"
                width="13"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className={
                  styles["w-[19px]"] +
                  styles["h-[19px]"] +
                  styles["text-gray-800"] +
                  styles["dark:text-white"]
                }
              >
                <path
                  d="m9 5 7 7-7 7"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  stroke="currentColor"
                ></path>
              </svg>
            </span>
            <p className={styles["text"]}>npx tailwindcss init</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card_cream;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_cream = () => (
         <div>
          <div className="container">
  <div className="card">
    <div className="header">
      <p className="title">Terminal</p>
      <span className="copy">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="w-[19px] h-[19px] text-gray-800 dark:text-white"
        >
          <path
            clipRule="evenodd"
            d="M18 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V9a4 4 0 0 0-4-4h-3a1.99 1.99 0 0 0-1 .267V5a2 2 0 0 1 2-2h7Z"
            fillRule="evenodd"
          ></path>
          <path
            clipRule="evenodd"
            d="M8 7.054V11H4.2a2 2 0 0 1 .281-.432l2.46-2.87A2 2 0 0 1 8 7.054ZM10 7v4a2 2 0 0 1-2 2H4v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z"
            fillRule="evenodd"
          ></path>
        </svg>
      </span>
    </div>

    <div className="footer">
      <div className="code">
        <span className="icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            height="13"
            width="13"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-[19px] h-[19px] text-gray-800 dark:text-white"
          >
            <path
              d="m9 5 7 7-7 7"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
              stroke="currentColor"
            ></path>
          </svg>
        </span>
        <p className="text">npm install -D tailwindcss</p>
      </div>
      <div className="code">
        <span className="icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            height="13"
            width="13"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-[19px] h-[19px] text-gray-800 dark:text-white"
          >
            <path
              d="m9 5 7 7-7 7"
              strokeWidth="3"
              strokeLinejoin="round"
              strokeLinecap="round"
              stroke="currentColor"
            ></path>
          </svg>
        </span>
        <p className="text">npx tailwindcss init</p>
      </div>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_cream;
        
        
         */
}
