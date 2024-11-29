import React from "react";
import styles from "./Input_eight.module.css";

const Input_eight = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["radial-cont"]}>
        <div className={styles["outer"]}>
          <div className={styles["inner-cont"]}>
            <div className={styles["main-block"]}>
              <div className={styles["elements-cont"]}>
                <svg
                  className={styles["svg"]}
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="currentColor"
                    d="M20.5 6C12.492 6 6 12.492 6 20.5S12.492 35 20.5 35a14.44 14.44 0 0 0 9.138-3.241l9.801 9.801a1.5 1.5 0 1 0 2.121-2.121l-9.8-9.801A14.44 14.44 0 0 0 35 20.5C35 12.492 28.508 6 20.5 6M9 20.5C9 14.149 14.149 9 20.5 9S32 14.149 32 20.5S26.851 32 20.5 32S9 26.851 9 20.5"
                  ></path>
                </svg>
                <input
                  className={styles["input"]}
                  type="text"
                  name="search"
                  placeholder="Search..."
                />
                <div className={styles["filter"]}>
                  <svg
                    className={styles["funnel"]}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="1em"
                    height="1em"
                    color="#000000"
                    fill="none"
                  >
                    <path
                      d="M8.85746 12.5061C6.36901 10.6456 4.59564 8.59915 3.62734 7.44867C3.3276 7.09253 3.22938 6.8319 3.17033 6.3728C2.96811 4.8008 2.86701 4.0148 3.32795 3.5074C3.7889 3 4.60404 3 6.23433 3H17.7657C19.396 3 20.2111 3 20.672 3.5074C21.133 4.0148 21.0319 4.8008 20.8297 6.37281C20.7706 6.83191 20.6724 7.09254 20.3726 7.44867C19.403 8.60062 17.6261 10.6507 15.1326 12.5135C14.907 12.6821 14.7583 12.9567 14.7307 13.2614C14.4837 15.992 14.2559 17.4876 14.1141 18.2442C13.8853 19.4657 12.1532 20.2006 11.226 20.8563C10.6741 21.2466 10.0043 20.782 9.93278 20.1778C9.79643 19.0261 9.53961 16.6864 9.25927 13.2614C9.23409 12.9539 9.08486 12.6761 8.85746 12.5061Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["pink"] + styles["blob"]}></div>
          <div className={styles["blue"] + styles["blob"]}></div>
        </div>
      </div>
    </div>
  </div>
);

export default Input_eight;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_eight = () => (
         <div>
          <div className="container">
  <div className="radial-cont">
    <div className="outer">
      <div className="inner-cont">
        <div className="main-block">
          <div className="elements-cont">
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 48 48"
            >
              <path
                fill="currentColor"
                d="M20.5 6C12.492 6 6 12.492 6 20.5S12.492 35 20.5 35a14.44 14.44 0 0 0 9.138-3.241l9.801 9.801a1.5 1.5 0 1 0 2.121-2.121l-9.8-9.801A14.44 14.44 0 0 0 35 20.5C35 12.492 28.508 6 20.5 6M9 20.5C9 14.149 14.149 9 20.5 9S32 14.149 32 20.5S26.851 32 20.5 32S9 26.851 9 20.5"
              ></path>
            </svg>
            <input
              className="input"
              type="text"
              name="search"
              placeholder="Search..."
            />
            <div className="filter">
              <svg
                className="funnel"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                color="#000000"
                fill="none"
              >
                <path
                  d="M8.85746 12.5061C6.36901 10.6456 4.59564 8.59915 3.62734 7.44867C3.3276 7.09253 3.22938 6.8319 3.17033 6.3728C2.96811 4.8008 2.86701 4.0148 3.32795 3.5074C3.7889 3 4.60404 3 6.23433 3H17.7657C19.396 3 20.2111 3 20.672 3.5074C21.133 4.0148 21.0319 4.8008 20.8297 6.37281C20.7706 6.83191 20.6724 7.09254 20.3726 7.44867C19.403 8.60062 17.6261 10.6507 15.1326 12.5135C14.907 12.6821 14.7583 12.9567 14.7307 13.2614C14.4837 15.992 14.2559 17.4876 14.1141 18.2442C13.8853 19.4657 12.1532 20.2006 11.226 20.8563C10.6741 21.2466 10.0043 20.782 9.93278 20.1778C9.79643 19.0261 9.53961 16.6864 9.25927 13.2614C9.23409 12.9539 9.08486 12.6761 8.85746 12.5061Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="pink blob"></div>
      <div className="blue blob"></div>
    </div>
  </div>
</div>
        </div>
        );

        export default Input_eight;
        
        
         */
}
