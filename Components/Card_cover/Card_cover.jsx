import React from "react";
import styles from "./Card_cover.module.css";

const Card_cover = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["search-container"]}>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          height="20"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            stroke="#171718"
            d="M17.5 17.5L22 22"
          ></path>
          <path
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="#171718"
            d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
          ></path>
        </svg>
        <input placeholder="Search for a quick action" type="search" />
      </div>

      <div className={styles["categories"]}>
        <button type="button">Note</button>
        <button type="button">File</button>
        <button type="button">Email</button>
        <button type="button">Others</button>
      </div>

      <div className={styles["results"]}>
        <p className={styles["label"]}>Best Results</p>

        <div className={styles["results-list"]}>
          <div className={styles["entry"]}>
            <div className={styles["icon"]}>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="#171718"
                  d="M13 2H13.2727C16.5339 2 18.1645 2 19.2969 2.79784C19.6214 3.02643 19.9094 3.29752 20.1523 3.60289C21 4.66867 21 6.20336 21 9.27273V11.8182C21 14.7814 21 16.2629 20.5311 17.4462C19.7772 19.3486 18.1829 20.8491 16.1616 21.5586C14.9044 22 13.3302 22 10.1818 22C8.38275 22 7.48322 22 6.76478 21.7478C5.60979 21.3424 4.69875 20.4849 4.26796 19.3979C4 18.7217 4 17.8751 4 16.1818V12"
                ></path>
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="#171718"
                  d="M21 12C21 13.8409 19.5076 15.3333 17.6667 15.3333C17.0009 15.3333 16.216 15.2167 15.5686 15.3901C14.9935 15.5442 14.5442 15.9935 14.3901 16.5686C14.2167 17.216 14.3333 18.0009 14.3333 18.6667C14.3333 20.5076 12.8409 22 11 22"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="#171718"
                  d="M11 6L3 6M7 2V10"
                ></path>
              </svg>
            </div>
            <div className={styles["desc"]}>
              <label>Create a new File</label>
              <span>Add a new file to your library list</span>
            </div>
          </div>
          <div className={styles["entry"]}>
            <div className={styles["icon"]}>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="#171718"
                  d="M17.4776 9.01106C17.485 9.01102 17.4925 9.01101 17.5 9.01101C19.9853 9.01101 22 11.0294 22 13.5193C22 15.8398 20.25 17.7508 18 18M17.4776 9.01106C17.4924 8.84606 17.5 8.67896 17.5 8.51009C17.5 5.46695 15.0376 3 12 3C9.12324 3 6.76233 5.21267 6.52042 8.03192M17.4776 9.01106C17.3753 10.1476 16.9286 11.1846 16.2428 12.0165M6.52042 8.03192C3.98398 8.27373 2 10.4139 2 13.0183C2 15.4417 3.71776 17.4632 6 17.9273M6.52042 8.03192C6.67826 8.01687 6.83823 8.00917 7 8.00917C8.12582 8.00917 9.16474 8.38194 10.0005 9.01101"
                ></path>
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="#171718"
                  d="M12 13L12 21M12 13C11.2998 13 9.99153 14.9943 9.5 15.5M12 13C12.7002 13 14.0085 14.9943 14.5 15.5"
                ></path>
              </svg>
            </div>
            <div className={styles["desc"]}>
              <label>Upload a file</label>
              <span>Use your one of your system files to save and edit</span>
            </div>
          </div>
        </div>

        <hr />

        <div className={styles["results-list"]}>
          <div className={styles["entry"]}>
            <div className={styles["icon"]}>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="#171718"
                  d="M5 16L10 13M14 11L19 8M12 5V10M12 14V19M5 8L10 11M14 13L19 16"
                ></path>
                <path
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="#171718"
                  d="M20.5 9.00001V14.5M13.5 20.5L19 17.5M4.5 17.5L10.5 20.5M3.5 15V9.00001M4.5 6.5L10.5 3.5M19.5 6.5L13.5 3.5"
                ></path>
                <circle
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="#171718"
                  r="1.5"
                  cy="3.5"
                  cx="12"
                ></circle>
                <circle
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="#171718"
                  r="1.5"
                  cy="20.5"
                  cx="12"
                ></circle>
                <circle
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="#171718"
                  r="1.5"
                  cy="7.5"
                  cx="3.5"
                ></circle>
                <circle
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="#171718"
                  r="1.5"
                  cy="7.5"
                  cx="20.5"
                ></circle>
                <circle
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="#171718"
                  r="1.5"
                  cy="16.5"
                  cx="20.5"
                ></circle>
                <circle
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="#171718"
                  r="1.5"
                  cy="16.5"
                  cx="3.5"
                ></circle>
                <path
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="#171718"
                  d="M12 9.75L14 10.875V13.125L12 14.25L10 13.125V10.875L12 9.75Z"
                ></path>
              </svg>
            </div>
            <div className={styles["desc"]}>
              <label>Generate a new document with AI</label>
              <span>Use our ChatGPT plug-in to generate a new document</span>
            </div>
            <p className={styles["badge"]}>New</p>
          </div>
          <div className={styles["entry"]}>
            <div className={styles["icon"]}>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="#171718"
                  d="M2 12.4C2 9.38301 2 7.87452 2.94627 6.93726C3.89254 6 5.41554 6 8.46154 6H9.53846C12.5845 6 14.1075 6 15.0537 6.93726C16 7.87452 16 9.38301 16 12.4V15.6C16 18.617 16 20.1255 15.0537 21.0627C14.1075 22 12.5845 22 9.53846 22H8.46154C5.41554 22 3.89254 22 2.94627 21.0627C2 20.1255 2 18.617 2 15.6V12.4Z"
                ></path>
                <path
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="#171718"
                  d="M15.5376 16H16.4608C19.072 16 20.3776 16 21.1888 15.1799C22 14.3598 22 13.0399 22 10.4V7.6C22 4.96013 22 3.6402 21.1888 2.8201C20.3776 2 19.072 2 16.4608 2H15.5376C12.9264 2 11.6208 2 10.8096 2.8201C10.1002 3.53726 10.0112 4.63664 10 6.66667"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="#171718"
                  d="M6 12H9M6 17H11"
                ></path>
                <path
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="#171718"
                  d="M10.5 3L14.5 6.5"
                ></path>
              </svg>
            </div>
            <div className={styles["desc"]}>
              <label>Create from a template</label>
              <span>Use our free templates to quickly create a document</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["card-footer"]}>
        <div className={styles["action"]}>
          <button type="button">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              height="14"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                stroke="#5F6368"
                d="M12 19V4"
              ></path>
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                stroke="#5F6368"
                d="M7 15L11.2929 19.2929C11.6262 19.6262 11.7929 19.7929 12 19.7929C12.2071 19.7929 12.3738 19.6262 12.7071 19.2929L17 15"
              ></path>
            </svg>
          </button>
          <button type="button">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              height="14"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                stroke="#5F6368"
                d="M12 5L12 20"
              ></path>
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                stroke="#5F6368"
                d="M7 9L11.2929 4.70711C11.6262 4.37377 11.7929 4.20711 12 4.20711C12.2071 4.20711 12.3738 4.37377 12.7071 4.70711L17 9"
              ></path>
            </svg>
          </button>
          <p className={styles["label"]}>Navigate</p>
        </div>
        <div className={styles["action"]}>
          <button type="button">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              height="14"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                stroke="#5F6368"
                d="M20 3V5.07692C20 7.07786 20 8.07833 19.8547 8.91545C19.0547 13.5235 15.0934 17.1376 10.0426 17.8674C9.12509 18 7.19318 18 5 18"
              ></path>
              <path
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                stroke="#5F6368"
                d="M7 21C6.39316 20.4102 4 18.8403 4 18C4 17.1597 6.39316 15.5898 7 15"
              ></path>
            </svg>
          </button>
          <p className={styles["label"]}>Select</p>
        </div>
        <div className={styles["action"]}>
          <button type="button">
            <svg
              fill="none"
              viewBox="0 0 14 14"
              height="14"
              width="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeWidth="1.5"
                stroke="#5F6368"
                d="M13 2.875V2.875C13 1.83947 12.1605 1 11.125 1V1C10.0895 1 9.25 1.83947 9.25 2.875V11.125C9.25 12.1605 10.0895 13 11.125 13V13C12.1605 13 13 12.1605 13 11.125V11.125C13 10.0895 12.1605 9.25 11.125 9.25H2.875C1.83947 9.25 1 10.0895 1 11.125V11.125C1 12.1605 1.83947 13 2.875 13V13C3.91053 13 4.75 12.1605 4.75 11.125V2.875C4.75 1.83947 3.91053 1 2.875 1V1C1.83947 1 1 1.83947 1 2.875V2.875C1 3.91053 1.83947 4.75 2.875 4.75H11.125C12.1605 4.75 13 3.91053 13 2.875Z"
              ></path>
            </svg>
          </button>
          <p className={styles["label"]}>Quit</p>
        </div>

        <p className={styles["label"] + styles["edit-actions"]}>Edit Actions</p>
      </div>
    </div>
  </div>
);

export default Card_cover;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_cover = () => (
         <div>
          <div className="card">
  <div className="search-container">
    <svg fill="none" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#171718" d="M17.5 17.5L22 22"></path>
      <path strokeLinejoin="round" strokeWidth="2" stroke="#171718" d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"></path>
    </svg>
    <input placeholder="Search for a quick action" type="search" />
  </div>

  <div className="categories">
    <button type="button">Note</button>
    <button type="button">File</button>
    <button type="button">Email</button>
    <button type="button">Others</button>
  </div>

  <div className="results">
    <p className="label">Best Results</p>

    <div className="results-list">
      <div className="entry">
        <div className="icon">
          <svg fill="none" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#171718" d="M13 2H13.2727C16.5339 2 18.1645 2 19.2969 2.79784C19.6214 3.02643 19.9094 3.29752 20.1523 3.60289C21 4.66867 21 6.20336 21 9.27273V11.8182C21 14.7814 21 16.2629 20.5311 17.4462C19.7772 19.3486 18.1829 20.8491 16.1616 21.5586C14.9044 22 13.3302 22 10.1818 22C8.38275 22 7.48322 22 6.76478 21.7478C5.60979 21.3424 4.69875 20.4849 4.26796 19.3979C4 18.7217 4 17.8751 4 16.1818V12"></path>
            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#171718" d="M21 12C21 13.8409 19.5076 15.3333 17.6667 15.3333C17.0009 15.3333 16.216 15.2167 15.5686 15.3901C14.9935 15.5442 14.5442 15.9935 14.3901 16.5686C14.2167 17.216 14.3333 18.0009 14.3333 18.6667C14.3333 20.5076 12.8409 22 11 22"></path>
            <path strokeLinecap="round" strokeWidth="2" stroke="#171718" d="M11 6L3 6M7 2V10"></path>
          </svg>
        </div>
        <div className="desc">
          <label>Create a new File</label>
          <span>Add a new file to your library list</span>
          </div>
      </div>
      <div className="entry">
        <div className="icon">
          <svg fill="none" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#171718" d="M17.4776 9.01106C17.485 9.01102 17.4925 9.01101 17.5 9.01101C19.9853 9.01101 22 11.0294 22 13.5193C22 15.8398 20.25 17.7508 18 18M17.4776 9.01106C17.4924 8.84606 17.5 8.67896 17.5 8.51009C17.5 5.46695 15.0376 3 12 3C9.12324 3 6.76233 5.21267 6.52042 8.03192M17.4776 9.01106C17.3753 10.1476 16.9286 11.1846 16.2428 12.0165M6.52042 8.03192C3.98398 8.27373 2 10.4139 2 13.0183C2 15.4417 3.71776 17.4632 6 17.9273M6.52042 8.03192C6.67826 8.01687 6.83823 8.00917 7 8.00917C8.12582 8.00917 9.16474 8.38194 10.0005 9.01101"></path>
            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" stroke="#171718" d="M12 13L12 21M12 13C11.2998 13 9.99153 14.9943 9.5 15.5M12 13C12.7002 13 14.0085 14.9943 14.5 15.5"></path>
          </svg>
        </div>
        <div className="desc">
          <label>Upload a file</label>
          <span>Use your one of your system files to save and edit</span>
          </div>
      </div>
    </div>

    <hr />

    <div className="results-list">
      <div className="entry">
        <div className="icon">
          <svg fill="none" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinejoin="round" strokeWidth="2" stroke="#171718" d="M5 16L10 13M14 11L19 8M12 5V10M12 14V19M5 8L10 11M14 13L19 16"></path>
            <path strokeLinejoin="round" strokeWidth="2" stroke="#171718" d="M20.5 9.00001V14.5M13.5 20.5L19 17.5M4.5 17.5L10.5 20.5M3.5 15V9.00001M4.5 6.5L10.5 3.5M19.5 6.5L13.5 3.5"></path>
            <circle strokeLinejoin="round" strokeWidth="2" stroke="#171718" r="1.5" cy="3.5" cx="12"></circle>
            <circle strokeLinejoin="round" strokeWidth="2" stroke="#171718" r="1.5" cy="20.5" cx="12"></circle>
            <circle strokeLinejoin="round" strokeWidth="2" stroke="#171718" r="1.5" cy="7.5" cx="3.5"></circle>
            <circle strokeLinejoin="round" strokeWidth="2" stroke="#171718" r="1.5" cy="7.5" cx="20.5"></circle>
            <circle strokeLinejoin="round" strokeWidth="2" stroke="#171718" r="1.5" cy="16.5" cx="20.5"></circle>
            <circle strokeLinejoin="round" strokeWidth="2" stroke="#171718" r="1.5" cy="16.5" cx="3.5"></circle>
            <path strokeLinejoin="round" strokeWidth="2" stroke="#171718" d="M12 9.75L14 10.875V13.125L12 14.25L10 13.125V10.875L12 9.75Z"></path>
          </svg>
        </div>
        <div className="desc">
          <label>Generate a new document with AI</label>
          <span>Use our ChatGPT plug-in to generate a new document</span>
        </div>
        <p className="badge">New
      </p></div>
      <div className="entry">
        <div className="icon">
          <svg fill="none" viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinejoin="round" strokeWidth="2" stroke="#171718" d="M2 12.4C2 9.38301 2 7.87452 2.94627 6.93726C3.89254 6 5.41554 6 8.46154 6H9.53846C12.5845 6 14.1075 6 15.0537 6.93726C16 7.87452 16 9.38301 16 12.4V15.6C16 18.617 16 20.1255 15.0537 21.0627C14.1075 22 12.5845 22 9.53846 22H8.46154C5.41554 22 3.89254 22 2.94627 21.0627C2 20.1255 2 18.617 2 15.6V12.4Z"></path>
            <path strokeLinejoin="round" strokeWidth="2" stroke="#171718" d="M15.5376 16H16.4608C19.072 16 20.3776 16 21.1888 15.1799C22 14.3598 22 13.0399 22 10.4V7.6C22 4.96013 22 3.6402 21.1888 2.8201C20.3776 2 19.072 2 16.4608 2H15.5376C12.9264 2 11.6208 2 10.8096 2.8201C10.1002 3.53726 10.0112 4.63664 10 6.66667"></path>
            <path strokeLinecap="round" strokeWidth="2" stroke="#171718" d="M6 12H9M6 17H11"></path>
            <path strokeLinejoin="round" strokeWidth="2" stroke="#171718" d="M10.5 3L14.5 6.5"></path>
          </svg>
        </div>
        <div className="desc">
          <label>Create from a template</label>
          <span>Use our free templates to quickly create a document</span>
</div>
      </div>
    </div>
  </div>

  <div className="card-footer">
    <div className="action">
      <button type="button">
        <svg fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#5F6368" d="M12 19V4"></path>
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#5F6368" d="M7 15L11.2929 19.2929C11.6262 19.6262 11.7929 19.7929 12 19.7929C12.2071 19.7929 12.3738 19.6262 12.7071 19.2929L17 15"></path>
        </svg>
      </button>
      <button type="button">
        <svg fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#5F6368" d="M12 5L12 20"></path>
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#5F6368" d="M7 9L11.2929 4.70711C11.6262 4.37377 11.7929 4.20711 12 4.20711C12.2071 4.20711 12.3738 4.37377 12.7071 4.70711L17 9"></path>
        </svg>
      </button>
      <p className="label">Navigate
    </p></div>
    <div className="action">
      <button type="button">
        <svg fill="none" viewBox="0 0 24 24" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#5F6368" d="M20 3V5.07692C20 7.07786 20 8.07833 19.8547 8.91545C19.0547 13.5235 15.0934 17.1376 10.0426 17.8674C9.12509 18 7.19318 18 5 18"></path>
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" stroke="#5F6368" d="M7 21C6.39316 20.4102 4 18.8403 4 18C4 17.1597 6.39316 15.5898 7 15"></path>
        </svg>
      </button>
      <p className="label">Select
    </p></div>
    <div className="action">
      <button type="button">
        <svg fill="none" viewBox="0 0 14 14" height="14" width="14" xmlns="http://www.w3.org/2000/svg">
          <path strokeWidth="1.5" stroke="#5F6368" d="M13 2.875V2.875C13 1.83947 12.1605 1 11.125 1V1C10.0895 1 9.25 1.83947 9.25 2.875V11.125C9.25 12.1605 10.0895 13 11.125 13V13C12.1605 13 13 12.1605 13 11.125V11.125C13 10.0895 12.1605 9.25 11.125 9.25H2.875C1.83947 9.25 1 10.0895 1 11.125V11.125C1 12.1605 1.83947 13 2.875 13V13C3.91053 13 4.75 12.1605 4.75 11.125V2.875C4.75 1.83947 3.91053 1 2.875 1V1C1.83947 1 1 1.83947 1 2.875V2.875C1 3.91053 1.83947 4.75 2.875 4.75H11.125C12.1605 4.75 13 3.91053 13 2.875Z"></path>
        </svg>
</button>
      <p className="label">Quit
    </p></div>

    <p className="label edit-actions">Edit Actions
  </p></div>
</div>
        </div>
        );

        export default Card_cover;
        
        
         */
}
