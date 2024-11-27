import React from "react";
import styles from "./Button_pull.module.css";

const Button_pull = () => (
  <div>
    <button className={styles["button"]}>
      <div id="main-border">
        <div id="main">
          <div id="inner-box">
            <div id="inner-dent"></div>
            <div id="send">Send</div>
            <div id="sent">Sent</div>
            <div id="tick">
              <svg
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
                stroke="#000000"
                fill="none"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                height="30px"
                width="30px"
              >
                <path d="m1.75 9.75 2.5 2.5m3.5-4 2.5-2.5m-4.5 4 2.5 2.5 6-6.5"></path>
              </svg>
            </div>
            <div tabindex="-1" id="text-container">
              <div id="planebody">
                <svg
                  text-rendering="geometricPrecision"
                  shape-rendering="geometricPrecision"
                  viewBox="0 0 24 24"
                  width="30"
                  height="30"
                >
                  <path
                    strokeWidth="1"
                    stroke="#000"
                    transform="matrix(-.613681 0.628244-.642735-.627837 26.9797 9.305393)"
                    d="M14.2199,21.63c-1.18,0-2.85-.83-4.17-4.8l-.72002-2.16-2.16-.72c-3.96-1.32-4.79-2.99-4.79-4.16999c0-1.17.83-2.85,4.79-4.18l8.49002-2.83c2.12-.71,3.89-.5,4.98.58s1.3,2.86.59,4.98L18.3999,16.82c-1.33,3.98-3,4.81-4.18,4.81ZM7.63988,7.03001c-2.78.93-3.77,2.03-3.77,2.75s.99,1.81999,3.77,2.73999l2.52002.84c.22.07.4.25.47.47l.84,2.52c.92,2.78,2.03,3.77,2.75,3.77s1.82-.99,2.75-3.77l2.83-8.48999c.51-1.54.42-2.8-.23-3.45s-1.91-.73-3.44-.22l-8.49002,2.84Z"
                  ></path>
                  <path
                    strokeWidth="3"
                    stroke="#000"
                    transform="matrix(.16967 0.39318-.400015 0.172619 21.274592 7.311157)"
                    d="M14.2199,21.63c-1.18,0-11.84002-10.67-11.84002-11.84999c0-1.17.83-2.85,4.79-4.18l8.49002-2.83c2.12-.71,3.89-.5,4.98.58s1.3,2.86.59,4.98L18.3999,16.82c-1.33,3.98-3,4.81-4.18,4.81ZM7.63988,7.03001c-2.78.93-3.77,2.03-3.77,2.75s.99,1.81999,3.77,2.73999l3.83002,3.83c.92,2.78,2.03,3.77,2.75,3.77s1.82-.99,2.75-3.77l2.83-8.48999c.51-1.54.42-2.8-.23-3.45s-1.91-.73-3.44-.22l-8.49002,2.84Z"
                  ></path>
                  <path
                    strokeWidth="3"
                    stroke="#000"
                    transform="matrix(-.404334-.141041 0.143493-.411362 8.624859 20.731701)"
                    d="M14.2199,21.63c-1.18,0-11.84002-10.67-11.84002-11.84999c0-1.17.83-2.85,4.79-4.18l8.49002-2.83c2.12-.71,3.89-.5,4.98.58s1.3,2.86.59,4.98L18.3999,16.82c-1.33,3.98-3,4.81-4.18,4.81ZM7.63988,7.03001c-2.78.93-3.77,2.03-3.77,2.75s.99,1.81999,3.77,2.73999l3.83002,3.83c.92,2.78,2.03,3.77,2.75,3.77s1.82-.99,2.75-3.77l2.83-8.48999c.51-1.54.42-2.8-.23-3.45s-1.91-.73-3.44-.22l-8.49002,2.84Z"
                  ></path>
                </svg>
              </div>
              <div id="arrow">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="0.5px"
                  stroke="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z"
                    fill="#000000"
                  ></path>
                  <path
                    d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"
                    fill="#000000"
                  ></path>
                </svg>
              </div>
              <div id="text">Message</div>
            </div>
          </div>
        </div>
      </div>
    </button>
  </div>
);

export default Button_pull;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_pull = () => (
         <div>
          <button className="button">
  <div id="main-border">
    <div id="main">
      <div id="inner-box">
        <div id="inner-dent"></div>
        <div id="send">Send</div>
        <div id="sent">Sent</div>
        <div id="tick">
          <svg
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="#000000"
            fill="none"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            height="30px"
            width="30px"
          >
            <path
              d="m1.75 9.75 2.5 2.5m3.5-4 2.5-2.5m-4.5 4 2.5 2.5 6-6.5"
            ></path>
          </svg>
        </div>
        <div tabindex="-1" id="text-container">
          <div id="planebody">
            <svg
              text-rendering="geometricPrecision"
              shape-rendering="geometricPrecision"
              viewBox="0 0 24 24"
              width="30"
              height="30"
            >
              <path
                strokeWidth="1"
                stroke="#000"
                transform="matrix(-.613681 0.628244-.642735-.627837 26.9797 9.305393)"
                d="M14.2199,21.63c-1.18,0-2.85-.83-4.17-4.8l-.72002-2.16-2.16-.72c-3.96-1.32-4.79-2.99-4.79-4.16999c0-1.17.83-2.85,4.79-4.18l8.49002-2.83c2.12-.71,3.89-.5,4.98.58s1.3,2.86.59,4.98L18.3999,16.82c-1.33,3.98-3,4.81-4.18,4.81ZM7.63988,7.03001c-2.78.93-3.77,2.03-3.77,2.75s.99,1.81999,3.77,2.73999l2.52002.84c.22.07.4.25.47.47l.84,2.52c.92,2.78,2.03,3.77,2.75,3.77s1.82-.99,2.75-3.77l2.83-8.48999c.51-1.54.42-2.8-.23-3.45s-1.91-.73-3.44-.22l-8.49002,2.84Z"
              ></path>
              <path
                strokeWidth="3"
                stroke="#000"
                transform="matrix(.16967 0.39318-.400015 0.172619 21.274592 7.311157)"
                d="M14.2199,21.63c-1.18,0-11.84002-10.67-11.84002-11.84999c0-1.17.83-2.85,4.79-4.18l8.49002-2.83c2.12-.71,3.89-.5,4.98.58s1.3,2.86.59,4.98L18.3999,16.82c-1.33,3.98-3,4.81-4.18,4.81ZM7.63988,7.03001c-2.78.93-3.77,2.03-3.77,2.75s.99,1.81999,3.77,2.73999l3.83002,3.83c.92,2.78,2.03,3.77,2.75,3.77s1.82-.99,2.75-3.77l2.83-8.48999c.51-1.54.42-2.8-.23-3.45s-1.91-.73-3.44-.22l-8.49002,2.84Z"
              ></path>
              <path
                strokeWidth="3"
                stroke="#000"
                transform="matrix(-.404334-.141041 0.143493-.411362 8.624859 20.731701)"
                d="M14.2199,21.63c-1.18,0-11.84002-10.67-11.84002-11.84999c0-1.17.83-2.85,4.79-4.18l8.49002-2.83c2.12-.71,3.89-.5,4.98.58s1.3,2.86.59,4.98L18.3999,16.82c-1.33,3.98-3,4.81-4.18,4.81ZM7.63988,7.03001c-2.78.93-3.77,2.03-3.77,2.75s.99,1.81999,3.77,2.73999l3.83002,3.83c.92,2.78,2.03,3.77,2.75,3.77s1.82-.99,2.75-3.77l2.83-8.48999c.51-1.54.42-2.8-.23-3.45s-1.91-.73-3.44-.22l-8.49002,2.84Z"
              ></path>
            </svg>
          </div>
          <div id="arrow">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="0.5px"
              stroke="black"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z"
                fill="#000000"
              ></path>
              <path
                d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z"
                fill="#000000"
              ></path>
            </svg>
          </div>
          <div id="text">Message</div>
        </div>
      </div>
    </div>
  </div>
</button>
        </div>
        );

        export default Button_pull;
        
        
         */
}
