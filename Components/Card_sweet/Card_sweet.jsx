import React from "react";
import styles from "./Card_sweet.module.css";

const Card_sweet = () => (
  <div>
    <div className={styles["pack_card"]}>
      <div className={styles["banner"]}>
        <span className={styles["banner_tag"]}>most popular</span>
      </div>
      <div className={styles["pack_name"]}>Team</div>

      <p className={styles["description"]}>
        Avanced feaures for Individuals and organizations
      </p>

      <div className={styles["lists"]}>
        <div className={styles["list"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span>Unlimited file storage</span>
        </div>
        <div className={styles["list"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span>10 GB bandwidth per month</span>
        </div>
        <div className={styles["list"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>

          <span>10.000 tasks per month</span>
        </div>
        <div className={styles["list"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>

          <span>Email support</span>
        </div>
        <div className={styles["list"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>

          <span>100 Webhooks</span>
        </div>
      </div>
      <div className={styles["bottom"]}>
        <div className={styles["price_container"]}>
          <span className={styles["devise"]}>$</span>
          <span className={styles["price"]}>19</span>
          <span className={styles["date"]}>/month</span>
        </div>
        <a className={styles["btn"]} href="#">
          Continue with Team
        </a>
      </div>
    </div>
  </div>
);

export default Card_sweet;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_sweet = () => (
         <div>
          <div className="pack_card">
          <div className="banner">
            <span className="banner_tag">most popular</span>
          </div>
          <div className="pack_name">Team</div>

          <p className="description">Avanced feaures for Individuals and organizations</p>

          <div className="lists">
            <div className="list">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>Unlimited file storage</span>
            </div>
            <div className="list">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span>10 GB bandwidth per month</span>
            </div>
            <div className="list">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>

              <span>10.000 tasks per month</span>
            </div>
            <div className="list">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>

              <span>Email support</span>
            </div>
            <div className="list">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>

              <span>100 Webhooks</span>
            </div>
            
        </div>
        <div className="bottom">
          <div className="price_container">
            <span className="devise">$</span>
            <span className="price">19</span>
            <span className="date">/month</span>
          </div>
          <a className="btn" href="#">Continue with Team</a>
        </div>
      </div>
        </div>
        );

        export default Card_sweet;
        
        
         */
}
