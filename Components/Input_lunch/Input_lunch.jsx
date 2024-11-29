import React from "react";
import styles from "./Input_lunch.module.css";

const Input_lunch = () => (
  <div>
    <input type="checkbox" style="display: none;" id="searched" />
    <div className={styles["outer"]}>
      <div className={styles["tooltip"]}>
        <div className={styles["a"]}></div>
        <div className={styles["b"]}></div>
        <div className={styles["b"]}></div>
        <div className={styles["b"]}></div>
        <div className={styles["b"]}></div>
        <div className={styles["b"]}></div>
        <div className={styles["b"]}></div>
        <div className={styles["label"]}>
          <div className={styles["c"]}></div>
          <div className={styles["c"]}></div>
          <span>Click Search</span>
        </div>
      </div>
      <div className={styles["a"]}></div>
      <div className={styles["b"]}></div>
      <div className={styles["b"]}></div>
      <div className={styles["b"]}></div>
      <div className={styles["b"]}></div>
      <div className={styles["b"]}></div>
      <div className={styles["b"]}></div>
      <label for="text-field" className={styles["label"]}>
        <div className={styles["c"]}></div>
        <div className={styles["c"]}></div>
        <label for="searched" className={styles["searched-thing"]}>
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className={styles["search"]}
          >
            <defs>
              <radialGradient r="1" cy="0" cx="0" id="myGradient">
                <stop stop-color="white" offset="0%"></stop>
                <stop stop-color="#928293" offset="100%"></stop>
              </radialGradient>
            </defs>
            <path
              className={styles["search-path"]}
              d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
            ></path>
            <path
              className={styles["chevron-path"]}
              d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
            ></path>
          </svg>
        </label>
        <input
          placeholder="Search..."
          className={styles["text-field"]}
          name="text"
          type="text"
          id="text-field"
        />
        <button className={styles["filter"]}>
          <div className={styles["filter-outer"]}></div>
          <div className={styles["filter-inner"]}>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={styles["filter-icon"]}
            >
              <defs>
                <radialGradient r="1.4" cy="1" cx="1" id="myOtherGradient">
                  <stop stop-color="white" offset="0%"></stop>
                  <stop stop-color="#928293" offset="100%"></stop>
                </radialGradient>
              </defs>
              <path d="M15,19.88C15.04,20.18 14.94,20.5 14.71,20.71C14.32,21.1 13.69,21.1 13.3,20.71L9.29,16.7C9.06,16.47 8.96,16.16 9,15.87V10.75L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L15,10.75V19.88M7.04,5L11,10.06V15.58L13,17.58V10.05L16.96,5H7.04Z"></path>
            </svg>
          </div>
        </button>
        <div className={styles["results"]}>
          <div className={styles["result"]}>
            <a href="#" className={styles["link"]}>
              Cat - Wikipedia
            </a>
            <div className={styles["description"]}>
              The cat (Felis catus), commonly referred to as the domestic...
            </div>
          </div>
          <div className={styles["result"]}>
            <a href="#" className={styles["link"]}>
              Cat Definition &amp; Meaning
            </a>
            <div className={styles["description"]}>
              The meaning of CAT is a carnivorous mammal...
            </div>
          </div>
          <div className={styles["result"]}>
            <a href="#" className={styles["link"]}>
              CAT | English meaning
            </a>
            <div className={styles["description"]}>
              CAT definition: 1. a small animal with fur, four legs, a tail,
              and...
            </div>
          </div>
          <div className={styles["dotdotdot"]}></div>
        </div>
      </label>
    </div>
  </div>
);

export default Input_lunch;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_lunch = () => (
         <div>
          <input type="checkbox" style="display: none;" id="searched" />
<div className="outer">
  <div className="tooltip">
    <div className="a"></div>
    <div className="b"></div>
    <div className="b"></div>
    <div className="b"></div>
    <div className="b"></div>
    <div className="b"></div>
    <div className="b"></div>
    <div className="label">
      <div className="c"></div>
      <div className="c"></div>
      <span>Click Search</span>
    </div>
  </div>
  <div className="a"></div>
  <div className="b"></div>
  <div className="b"></div>
  <div className="b"></div>
  <div className="b"></div>
  <div className="b"></div>
  <div className="b"></div>
  <label for="text-field" className="label">
    <div className="c"></div>
    <div className="c"></div>
    <label for="searched" className="searched-thing">
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="search"
      >
        <defs>
          <radialGradient r="1" cy="0" cx="0" id="myGradient">
            <stop stop-color="white" offset="0%"></stop>
            <stop stop-color="#928293" offset="100%"></stop>
          </radialGradient>
        </defs>
        <path
          className="search-path"
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        ></path>
        <path
          className="chevron-path"
          d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"
        ></path>
      </svg>
    </label>
    <input
      placeholder="Search..."
      className="text-field"
      name="text"
      type="text"
      id="text-field"
    />
    <button className="filter">
      <div className="filter-outer"></div>
      <div className="filter-inner">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="filter-icon"
        >
          <defs>
            <radialGradient r="1.4" cy="1" cx="1" id="myOtherGradient">
              <stop stop-color="white" offset="0%"></stop>
              <stop stop-color="#928293" offset="100%"></stop>
            </radialGradient>
          </defs>
          <path
            d="M15,19.88C15.04,20.18 14.94,20.5 14.71,20.71C14.32,21.1 13.69,21.1 13.3,20.71L9.29,16.7C9.06,16.47 8.96,16.16 9,15.87V10.75L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L15,10.75V19.88M7.04,5L11,10.06V15.58L13,17.58V10.05L16.96,5H7.04Z"
          ></path>
        </svg>
      </div>
    </button>
    <div className="results">
      <div className="result">
        <a href="#" className="link">Cat - Wikipedia</a>
        <div className="description">
          The cat (Felis catus), commonly referred to as the domestic...
        </div>
      </div>
      <div className="result">
        <a href="#" className="link">Cat Definition &amp; Meaning</a>
        <div className="description">
          The meaning of CAT is a carnivorous mammal...
        </div>
      </div>
      <div className="result">
        <a href="#" className="link">CAT | English meaning</a>
        <div className="description">
          CAT definition: 1. a small animal with fur, four legs, a tail, and...
        </div>
      </div>
      <div className="dotdotdot"></div>
    </div>
  </label>
</div>
        </div>
        );

        export default Input_lunch;
        
        
         */
}
