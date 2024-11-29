import React from "react";
import styles from "./Card_smooth.module.css";

const Card_smooth = () => (
  <div>
    <div className={styles["wrapper"]}>
      <input id="tab-1" name="slider" type="radio" />
      <input checked="" id="tab-2" name="slider" type="radio" />
      <input id="tab-3" name="slider" type="radio" />
      <header>
        <label className={styles["tab-1"]} for="tab-1">
          Basic
        </label>
        <label className={styles["tab-2"]} for="tab-2">
          Standard
        </label>
        <label className={styles["tab-3"]} for="tab-3">
          Team
        </label>
        <div className={styles["slider"]}></div>
      </header>
      <div className={styles["card-area"]}>
        <div className={styles["cards"]}>
          <div className={styles["row"] + styles["row-1"]}>
            <div className={styles["price-details"]}>
              <span className={styles["price"]}>150</span>
              <p>For beginner use</p>
            </div>
            <ul className={styles["features"]}>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={
                    styles["text-white"] +
                    styles["text-2xs"] +
                    styles["bg-green-500"] +
                    styles["rounded-full"] +
                    styles["mr-2"] +
                    styles["p-1"]
                  }
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Unlimited nvme-SSD Storage (5GB) </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className={
                    styles["text-white"] +
                    styles["text-2xs"] +
                    styles["bg-green-500"] +
                    styles["rounded-full"] +
                    styles["mr-2"] +
                    styles["p-1"]
                  }
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>FREE 50+ Installation Scripts WordPress Supported</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className={
                    styles["text-white"] +
                    styles["text-2xs"] +
                    styles["bg-green-500"] +
                    styles["rounded-full"] +
                    styles["mr-2"] +
                    styles["p-1"]
                  }
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>
                  One FREE Domain Registration .com and .np extensions only
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className={
                    styles["text-white"] +
                    styles["text-2xs"] +
                    styles["bg-green-500"] +
                    styles["rounded-full"] +
                    styles["mr-2"] +
                    styles["p-1"]
                  }
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Unlimited Email Accounts &amp; Databases</span>
              </li>
            </ul>
          </div>
          <div className={styles["row"]}>
            <div className={styles["price-details"]}>
              <span className={styles["price"]}>499</span>
              <p>For professional use</p>
            </div>
            <ul className={styles["features"]}>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className={
                    styles["text-white"] +
                    styles["text-2xs"] +
                    styles["bg-green-500"] +
                    styles["rounded-full"] +
                    styles["mr-2"] +
                    styles["p-1"]
                  }
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Unlimited GB Premium Bandwidth</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className={
                    styles["text-white"] +
                    styles["text-2xs"] +
                    styles["bg-green-500"] +
                    styles["rounded-full"] +
                    styles["mr-2"] +
                    styles["p-1"]
                  }
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>FREE 200+ Installation Scripts WordPress Supported</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className={
                    styles["text-white"] +
                    styles["text-2xs"] +
                    styles["bg-green-500"] +
                    styles["rounded-full"] +
                    styles["mr-2"] +
                    styles["p-1"]
                  }
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>
                  Five FREE Domain Registration .com and .np extensions only
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className={
                    styles["text-white"] +
                    styles["text-2xs"] +
                    styles["bg-green-500"] +
                    styles["rounded-full"] +
                    styles["mr-2"] +
                    styles["p-1"]
                  }
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Unlimited Email Accounts &amp; Databases</span>
              </li>
            </ul>
          </div>
          <div className={styles["row"]}>
            <div className={styles["price-details"]}>
              <span className={styles["price"]}>1999</span>
              <p>For team collaboration</p>
            </div>
            <ul className={styles["features"]}>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className={
                    styles["text-white"] +
                    styles["text-2xs"] +
                    styles["bg-green-500"] +
                    styles["rounded-full"] +
                    styles["mr-2"] +
                    styles["p-1"]
                  }
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>200 GB Premium Bandwidth</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className={
                    styles["text-white"] +
                    styles["text-2xs"] +
                    styles["bg-green-500"] +
                    styles["rounded-full"] +
                    styles["mr-2"] +
                    styles["p-1"]
                  }
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>FREE 100+ Installation Scripts WordPress Supported</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className={
                    styles["text-white"] +
                    styles["text-2xs"] +
                    styles["bg-green-500"] +
                    styles["rounded-full"] +
                    styles["mr-2"] +
                    styles["p-1"]
                  }
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>
                  Two FREE Domain Registration .com and .np extensions only
                </span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className={
                    styles["text-white"] +
                    styles["text-2xs"] +
                    styles["bg-green-500"] +
                    styles["rounded-full"] +
                    styles["mr-2"] +
                    styles["p-1"]
                  }
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Unlimited Email Accounts &amp; Databases</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button>Choose plan</button>
    </div>
  </div>
);

export default Card_smooth;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_smooth = () => (
         <div>
          <div className="wrapper">
  <input id="tab-1" name="slider" type="radio" />
  <input checked="" id="tab-2" name="slider" type="radio" />
  <input id="tab-3" name="slider" type="radio" />
  <header>
    <label className="tab-1" for="tab-1">Basic</label>
    <label className="tab-2" for="tab-2">Standard</label>
    <label className="tab-3" for="tab-3">Team</label>
    <div className="slider"></div>
  </header>
  <div className="card-area">
    <div className="cards">
      <div className="row row-1">
        <div className="price-details">
          <span className="price">150</span>
          <p>For beginner use</p>
        </div>
        <ul className="features">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white text-2xs bg-green-500 rounded-full mr-2 p-1"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Unlimited nvme-SSD Storage (5GB) </span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-white text-2xs bg-green-500 rounded-full mr-2 p-1"
            >
              <polyline points="20 6 9 17 4 12"></polyline></svg
            ><span>FREE 50+ Installation Scripts WordPress Supported</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-white text-2xs bg-green-500 rounded-full mr-2 p-1"
            >
              <polyline points="20 6 9 17 4 12"></polyline></svg
            ><span
              >One FREE Domain Registration .com and .np extensions only</span
            >
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-white text-2xs bg-green-500 rounded-full mr-2 p-1"
            >
              <polyline points="20 6 9 17 4 12"></polyline></svg
            ><span>Unlimited Email Accounts &amp; Databases</span>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="price-details">
          <span className="price">499</span>
          <p>For professional use</p>
        </div>
        <ul className="features">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-white text-2xs bg-green-500 rounded-full mr-2 p-1"
            >
              <polyline points="20 6 9 17 4 12"></polyline></svg
            ><span>Unlimited GB Premium Bandwidth</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-white text-2xs bg-green-500 rounded-full mr-2 p-1"
            >
              <polyline points="20 6 9 17 4 12"></polyline></svg
            ><span>FREE 200+ Installation Scripts WordPress Supported</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-white text-2xs bg-green-500 rounded-full mr-2 p-1"
            >
              <polyline points="20 6 9 17 4 12"></polyline></svg
            ><span
              >Five FREE Domain Registration .com and .np extensions only</span
            >
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-white text-2xs bg-green-500 rounded-full mr-2 p-1"
            >
              <polyline points="20 6 9 17 4 12"></polyline></svg
            ><span>Unlimited Email Accounts &amp; Databases</span>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="price-details">
          <span className="price">1999</span>
          <p>For team collaboration</p>
        </div>
        <ul className="features">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-white text-2xs bg-green-500 rounded-full mr-2 p-1"
            >
              <polyline points="20 6 9 17 4 12"></polyline></svg
            ><span>200 GB Premium Bandwidth</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-white text-2xs bg-green-500 rounded-full mr-2 p-1"
            >
              <polyline points="20 6 9 17 4 12"></polyline></svg
            ><span>FREE 100+ Installation Scripts WordPress Supported</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-white text-2xs bg-green-500 rounded-full mr-2 p-1"
            >
              <polyline points="20 6 9 17 4 12"></polyline></svg
            ><span
              >Two FREE Domain Registration .com and .np extensions only</span
            >
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-white text-2xs bg-green-500 rounded-full mr-2 p-1"
            >
              <polyline points="20 6 9 17 4 12"></polyline></svg
            ><span>Unlimited Email Accounts &amp; Databases</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <button>Choose plan</button>
</div>
        </div>
        );

        export default Card_smooth;
        
        
         */
}
