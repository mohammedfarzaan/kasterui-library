import React from "react";
import styles from "./Card_north.module.css";

const Card_north = () => (
  <div>
    <div className={styles["bo"]}>
      <div className={styles["face"]}>
        {" "}
        <div className={styles["earL"]}></div>
        <div className={styles["earR"]}></div>
        <div className={styles["eyeL"]}></div>
        <div className={styles["eyeR"]}></div>
        <div className={styles["hairs"]}></div>
        <div className={styles["nose"]}></div>
        <div className={styles["mouth"]}></div>
        <div className={styles["smileL"]}>
          <svg
            xml:space="preserve"
            viewBox="0 0 65 65"
            xmlns="http://www.w3.org/2000/svg"
          >
            <filter id="blurMe">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="2"
              ></feGaussianBlur>
            </filter>
            <path
              d="M25 19c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z"
              fill="#EF7F71"
              filter="url(#blurMe)"
            ></path>
            <path
              d="M35 35c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z"
              fill="#EF7F71"
              filter="url(#blurMe)"
            ></path>
            <path
              d="M45 50c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z"
              fill="#EF7F71"
              filter="url(#blurMe)"
            ></path>
          </svg>
        </div>
        <div className={styles["smileR"]}>
          <svg
            xml:space="preserve"
            viewBox="0 0 65 65"
            xmlns="http://www.w3.org/2000/svg"
          >
            <filter id="blurMe">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="2"
              ></feGaussianBlur>
            </filter>
            <path
              d="M25 19c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z"
              fill="#EF7F71"
              filter="url(#blurMe)"
            ></path>
            <path
              d="M35 35c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z"
              fill="#EF7F71"
              filter="url(#blurMe)"
            ></path>
            <path
              d="M45 50c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z"
              fill="#EF7F71"
              filter="url(#blurMe)"
            ></path>
          </svg>
        </div>
        <div className={styles["snow"]}>
          <div className={styles["mountain-cap-1"]}></div>
          <div className={styles["mountain-cap-2"]}></div>
          <div className={styles["mountain-cap-3"]}></div>
          <div className={styles["mountain-cap-4"]}></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
);

export default Card_north;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_north = () => (
         <div>
          <div className="bo">
 <div className="face">     <div className="earL"></div>
       <div className="earR"></div>
       <div className="eyeL"></div>
       <div className="eyeR"></div>
       <div className="hairs"></div>
       <div className="nose"></div>
       <div className="mouth"></div>
        <div className="smileL">
        <svg xml:space="preserve" viewBox="0 0 65 65" xmlns="http://www.w3.org/2000/svg">
        <filter id="blurMe">
    <feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur>
  </filter>
  <path d="M25 19c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z" fill="#EF7F71" filter="url(#blurMe)"></path>
    <path d="M35 35c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z" fill="#EF7F71" filter="url(#blurMe)"></path>
      <path d="M45 50c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z" fill="#EF7F71" filter="url(#blurMe)"></path>
</svg>
        </div>
         <div className="smileR">
          <svg xml:space="preserve" viewBox="0 0 65 65" xmlns="http://www.w3.org/2000/svg">
        <filter id="blurMe">
    <feGaussianBlur in="SourceGraphic" stdDeviation="2"></feGaussianBlur>
  </filter>
  <path d="M25 19c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z" fill="#EF7F71" filter="url(#blurMe)"></path>
    <path d="M35 35c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z" fill="#EF7F71" filter="url(#blurMe)"></path>
      <path d="M45 50c-6 2-12 4-18 5-2 0-4-2-6-3 1-1 2-3 3-4 11-3 22-7 32-10 2-1 4 1 6 2-1 1-2 4-3 4-4 2-9 4-14 6z" fill="#EF7F71" filter="url(#blurMe)"></path>
</svg></div>
  
<div className="snow">
<div className="mountain-cap-1"></div>
      <div className="mountain-cap-2"></div>
      <div className="mountain-cap-3"></div>
      <div className="mountain-cap-4"></div>
      <div>
</div>
</div>
</div></div>
        </div>
        );

        export default Card_north;
        
        
         */
}
