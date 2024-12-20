import React from "react";
import styles from "./Radio_like.module.css";

const Radio_like = () => (
  <div>
    <div className={styles["radio-input"]}>
      <label>
        <input
          value="value-1"
          checked=""
          name="value-radio"
          id="value-1"
          type="radio"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
          viewBox="0 0 256 256"
        >
          <defs>
            <linearGradient x1="37%" y1="51%" x2="178.1%" y2="41.9%" id="a">
              <stop stop-color="#FC801D" offset="9%"></stop>
              <stop stop-color="#B07F61" offset="23%"></stop>
              <stop stop-color="#577DB3" offset="41%"></stop>
              <stop stop-color="#1E7CE6" offset="53%"></stop>
              <stop stop-color="#087CFA" offset="59%"></stop>
            </linearGradient>
            <linearGradient x1="73.6%" y1="114.8%" x2="35.6%" y2="1.1%" id="b">
              <stop stop-color="#FE2857" offset="0%"></stop>
              <stop stop-color="#CB3979" offset="8%"></stop>
              <stop stop-color="#9E4997" offset="16%"></stop>
              <stop stop-color="#7557B2" offset="25%"></stop>
              <stop stop-color="#5362C8" offset="34%"></stop>
              <stop stop-color="#386CDA" offset="44%"></stop>
              <stop stop-color="#2373E8" offset="54%"></stop>
              <stop stop-color="#1478F2" offset="66%"></stop>
              <stop stop-color="#0B7BF8" offset="79%"></stop>
              <stop stop-color="#087CFA" offset="100%"></stop>
            </linearGradient>
            <linearGradient x1="28.6%" y1="23.6%" x2="81.8%" y2="129.8%" id="c">
              <stop stop-color="#FE2857" offset="0%"></stop>
              <stop stop-color="#FE295F" offset="8%"></stop>
              <stop stop-color="#FF2D76" offset="21%"></stop>
              <stop stop-color="#FF318C" offset="30%"></stop>
              <stop stop-color="#EA3896" offset="38%"></stop>
              <stop stop-color="#B248AE" offset="55%"></stop>
              <stop stop-color="#5A63D6" offset="79%"></stop>
              <stop stop-color="#087CFA" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#a)"
            d="M40.5 180.6 2.9 150.8l22.1-41 33.3 11.1z"
          ></path>
          <path
            fill="#087CFA"
            d="m256 68.2-4.6 148.3-98.6 39.5-53.7-34.7z"
          ></path>
          <path fill="url(#b)" d="m256 68.2-48.8 47.6L144.5 39l31-34.8z"></path>
          <path
            fill="url(#c)"
            d="m99.1 221.3-78.5 28.4 16.5-57.5 21.2-71.3L0 101.4 37.1 0l83.8 9.9 86.3 105.9z"
          ></path>
          <path d="M49.1 48h160v160h-160z"></path>
          <path
            d="M69 177.8h60v10H69v-10ZM99 79V68H69.2v11h8.4v37.7h-8.4v11H99v-11h-8.3V79H99Zm28.5 49.4.2.1c-4.1.2-8.1-.8-11.8-2.6a27 27 0 0 1-7.7-6.3l8.2-9.2c1.5 1.7 3.2 3.1 5.2 4.3 1.7 1.1 3.7 1.7 5.7 1.6 2.2.2 4.3-.7 5.8-2.3a11 11 0 0 0 2.2-7.5V68h13.3v39a27 27 0 0 1-1.5 9.4c-1.7 5-5.7 9-10.8 10.6-2.8 1-5.8 1.5-8.8 1.4Z"
            fill="#FFF"
          ></path>
        </svg>

        <span>IntelliJ IDE</span>
      </label>
      <label>
        <input value="value-2" name="value-radio" id="value-2" type="radio" />
        <svg
          viewBox="0 0 256 254"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="256"
          height="254"
          preserveAspectRatio="xMidYMid"
        >
          <defs>
            <linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stop-color="#FFF"></stop>
              <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop>
            </linearGradient>
            <path
              id="a"
              d="M180.828 252.605a15.872 15.872 0 0 0 12.65-.486l52.501-25.262a15.94 15.94 0 0 0 9.025-14.364V41.197a15.939 15.939 0 0 0-9.025-14.363l-52.5-25.263a15.877 15.877 0 0 0-18.115 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233 100.507 91.695a15.853 15.853 0 0 0 5.464 3.571Zm10.464-183.649-76.262 57.889 76.262 57.888V68.956Z"
            ></path>
          </defs>
          <mask id="b" fill="#fff"></mask>
          <path
            fill="#0065A9"
            d="M246.135 26.873 193.593 1.575a15.885 15.885 0 0 0-18.123 3.08L3.466 161.482c-4.626 4.219-4.62 11.502.012 15.714l14.05 12.772a10.625 10.625 0 0 0 13.569.604L238.229 33.436c6.949-5.271 16.93-.315 16.93 8.407v-.61a15.938 15.938 0 0 0-9.024-14.36Z"
          ></path>
          <path
            fill="#007ACC"
            d="m246.135 226.816-52.542 25.298a15.887 15.887 0 0 1-18.123-3.08L3.466 92.207c-4.626-4.218-4.62-11.502.012-15.713l14.05-12.773a10.625 10.625 0 0 1 13.569-.603l207.132 157.135c6.949 5.271 16.93.315 16.93-8.408v.611a15.939 15.939 0 0 1-9.024 14.36Z"
          ></path>
          <path
            fill="#1F9CF0"
            d="M193.428 252.134a15.892 15.892 0 0 1-18.125-3.083c5.881 5.88 15.938 1.715 15.938-6.603V11.273c0-8.318-10.057-12.483-15.938-6.602a15.892 15.892 0 0 1 18.125-3.084l52.533 25.263a15.937 15.937 0 0 1 9.03 14.363V212.51c0 6.125-3.51 11.709-9.03 14.363l-52.533 25.262Z"
          ></path>
          <path
            fill="url(#c)"
            fill-opacity="0"
            d="M180.828 252.605a15.874 15.874 0 0 0 12.65-.486l52.5-25.263a15.938 15.938 0 0 0 9.026-14.363V41.197a15.939 15.939 0 0 0-9.025-14.363L193.477 1.57a15.877 15.877 0 0 0-18.114 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233 100.506 91.695a15.857 15.857 0 0 0 5.465 3.571Zm10.464-183.65-76.262 57.89 76.262 57.888V68.956Z"
          ></path>
        </svg>

        <span>Vs Code</span>
      </label>
      <label>
        <input value="value-3" name="value-radio" id="value-3" type="radio" />
        <svg
          preserveAspectRatio="xMidYMid"
          xmlns="http://www.w3.org/2000/svg"
          height="332"
          width="256"
          viewBox="0 0 256 332"
        >
          <defs>
            <linearGradient
              id="a"
              y2="39.597%"
              x2="63.68%"
              y1="58.68%"
              x1="55.117%"
            >
              <stop offset="0%" stop-color="#FF9700"></stop>
              <stop offset="53%" stop-color="#F48E00"></stop>
              <stop offset="100%" stop-color="#D06F00"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#a)"
            d="M255.288 166.795c0-3.887-2.872-6.128-6.397-5.015L6.397 238.675C2.865 239.796 0 243.86 0 247.74v78.59c0 3.887 2.865 6.135 6.397 5.015l242.494-76.888c3.525-1.12 6.397-5.185 6.397-9.071v-78.59Z"
          ></path>
          <path
            fill="#FF9800"
            d="M0 164.291c0 3.887 2.865 7.95 6.397 9.071l242.53 76.902c3.531 1.12 6.397-1.127 6.397-5.007V166.66c0-3.88-2.866-7.944-6.397-9.064L6.397 80.694C2.865 79.574 0 81.814 0 85.7v78.59Z"
          ></path>
          <path
            fill="#FF9800"
            d="M255.288 5.302c0-3.886-2.872-6.135-6.397-5.014L6.397 77.176C2.865 78.296 0 82.36 0 86.247v78.59c0 3.887 2.865 6.128 6.397 5.014l242.494-76.895c3.525-1.12 6.397-5.184 6.397-9.064V5.302Z"
          ></path>
        </svg>
        <span>Sublime Text</span>
      </label>
      <span className={styles["selection"]}></span>
    </div>
  </div>
);

export default Radio_like;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_like = () => (
         <div>
          <div className="radio-input">
  <label>
    <input
      value="value-1"
      checked=""
      name="value-radio"
      id="value-1"
      type="radio"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 256"
    >
      <defs>
        <linearGradient x1="37%" y1="51%" x2="178.1%" y2="41.9%" id="a">
          <stop stop-color="#FC801D" offset="9%"></stop>
          <stop stop-color="#B07F61" offset="23%"></stop>
          <stop stop-color="#577DB3" offset="41%"></stop>
          <stop stop-color="#1E7CE6" offset="53%"></stop>
          <stop stop-color="#087CFA" offset="59%"></stop>
        </linearGradient>
        <linearGradient x1="73.6%" y1="114.8%" x2="35.6%" y2="1.1%" id="b">
          <stop stop-color="#FE2857" offset="0%"></stop>
          <stop stop-color="#CB3979" offset="8%"></stop>
          <stop stop-color="#9E4997" offset="16%"></stop>
          <stop stop-color="#7557B2" offset="25%"></stop>
          <stop stop-color="#5362C8" offset="34%"></stop>
          <stop stop-color="#386CDA" offset="44%"></stop>
          <stop stop-color="#2373E8" offset="54%"></stop>
          <stop stop-color="#1478F2" offset="66%"></stop>
          <stop stop-color="#0B7BF8" offset="79%"></stop>
          <stop stop-color="#087CFA" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="28.6%" y1="23.6%" x2="81.8%" y2="129.8%" id="c">
          <stop stop-color="#FE2857" offset="0%"></stop>
          <stop stop-color="#FE295F" offset="8%"></stop>
          <stop stop-color="#FF2D76" offset="21%"></stop>
          <stop stop-color="#FF318C" offset="30%"></stop>
          <stop stop-color="#EA3896" offset="38%"></stop>
          <stop stop-color="#B248AE" offset="55%"></stop>
          <stop stop-color="#5A63D6" offset="79%"></stop>
          <stop stop-color="#087CFA" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path fill="url(#a)" d="M40.5 180.6 2.9 150.8l22.1-41 33.3 11.1z"></path>
      <path fill="#087CFA" d="m256 68.2-4.6 148.3-98.6 39.5-53.7-34.7z"></path>
      <path fill="url(#b)" d="m256 68.2-48.8 47.6L144.5 39l31-34.8z"></path>
      <path
        fill="url(#c)"
        d="m99.1 221.3-78.5 28.4 16.5-57.5 21.2-71.3L0 101.4 37.1 0l83.8 9.9 86.3 105.9z"
      ></path>
      <path d="M49.1 48h160v160h-160z"></path>
      <path
        d="M69 177.8h60v10H69v-10ZM99 79V68H69.2v11h8.4v37.7h-8.4v11H99v-11h-8.3V79H99Zm28.5 49.4.2.1c-4.1.2-8.1-.8-11.8-2.6a27 27 0 0 1-7.7-6.3l8.2-9.2c1.5 1.7 3.2 3.1 5.2 4.3 1.7 1.1 3.7 1.7 5.7 1.6 2.2.2 4.3-.7 5.8-2.3a11 11 0 0 0 2.2-7.5V68h13.3v39a27 27 0 0 1-1.5 9.4c-1.7 5-5.7 9-10.8 10.6-2.8 1-5.8 1.5-8.8 1.4Z"
        fill="#FFF"
      ></path>
    </svg>

    <span>IntelliJ IDE</span>
  </label>
  <label>
    <input value="value-2" name="value-radio" id="value-2" type="radio" />
    <svg
      viewBox="0 0 256 254"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="256"
      height="254"
      preserveAspectRatio="xMidYMid"
    >
      <defs>
        <linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="#FFF"></stop>
          <stop offset="100%" stop-color="#FFF" stop-opacity="0"></stop>
        </linearGradient>
        <path
          id="a"
          d="M180.828 252.605a15.872 15.872 0 0 0 12.65-.486l52.501-25.262a15.94 15.94 0 0 0 9.025-14.364V41.197a15.939 15.939 0 0 0-9.025-14.363l-52.5-25.263a15.877 15.877 0 0 0-18.115 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233 100.507 91.695a15.853 15.853 0 0 0 5.464 3.571Zm10.464-183.649-76.262 57.889 76.262 57.888V68.956Z"
        ></path>
      </defs>
      <mask id="b" fill="#fff"></mask>
      <path
        fill="#0065A9"
        d="M246.135 26.873 193.593 1.575a15.885 15.885 0 0 0-18.123 3.08L3.466 161.482c-4.626 4.219-4.62 11.502.012 15.714l14.05 12.772a10.625 10.625 0 0 0 13.569.604L238.229 33.436c6.949-5.271 16.93-.315 16.93 8.407v-.61a15.938 15.938 0 0 0-9.024-14.36Z"
      ></path>
      <path
        fill="#007ACC"
        d="m246.135 226.816-52.542 25.298a15.887 15.887 0 0 1-18.123-3.08L3.466 92.207c-4.626-4.218-4.62-11.502.012-15.713l14.05-12.773a10.625 10.625 0 0 1 13.569-.603l207.132 157.135c6.949 5.271 16.93.315 16.93-8.408v.611a15.939 15.939 0 0 1-9.024 14.36Z"
      ></path>
      <path
        fill="#1F9CF0"
        d="M193.428 252.134a15.892 15.892 0 0 1-18.125-3.083c5.881 5.88 15.938 1.715 15.938-6.603V11.273c0-8.318-10.057-12.483-15.938-6.602a15.892 15.892 0 0 1 18.125-3.084l52.533 25.263a15.937 15.937 0 0 1 9.03 14.363V212.51c0 6.125-3.51 11.709-9.03 14.363l-52.533 25.262Z"
      ></path>
      <path
        fill="url(#c)"
        fill-opacity="0"
        d="M180.828 252.605a15.874 15.874 0 0 0 12.65-.486l52.5-25.263a15.938 15.938 0 0 0 9.026-14.363V41.197a15.939 15.939 0 0 0-9.025-14.363L193.477 1.57a15.877 15.877 0 0 0-18.114 3.084L74.857 96.35l-43.78-33.232a10.614 10.614 0 0 0-13.56.603L3.476 76.494c-4.63 4.211-4.635 11.495-.012 15.713l37.967 34.638-37.967 34.637c-4.623 4.219-4.618 11.502.012 15.714l14.041 12.772a10.614 10.614 0 0 0 13.56.604l43.78-33.233 100.506 91.695a15.857 15.857 0 0 0 5.465 3.571Zm10.464-183.65-76.262 57.89 76.262 57.888V68.956Z"
      ></path>
    </svg>

    <span>Vs Code</span>
  </label>
  <label>
    <input value="value-3" name="value-radio" id="value-3" type="radio" />
    <svg
      preserveAspectRatio="xMidYMid"
      xmlns="http://www.w3.org/2000/svg"
      height="332"
      width="256"
      viewBox="0 0 256 332"
    >
      <defs>
        <linearGradient
          id="a"
          y2="39.597%"
          x2="63.68%"
          y1="58.68%"
          x1="55.117%"
        >
          <stop offset="0%" stop-color="#FF9700"></stop>
          <stop offset="53%" stop-color="#F48E00"></stop>
          <stop offset="100%" stop-color="#D06F00"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#a)"
        d="M255.288 166.795c0-3.887-2.872-6.128-6.397-5.015L6.397 238.675C2.865 239.796 0 243.86 0 247.74v78.59c0 3.887 2.865 6.135 6.397 5.015l242.494-76.888c3.525-1.12 6.397-5.185 6.397-9.071v-78.59Z"
      ></path>
      <path
        fill="#FF9800"
        d="M0 164.291c0 3.887 2.865 7.95 6.397 9.071l242.53 76.902c3.531 1.12 6.397-1.127 6.397-5.007V166.66c0-3.88-2.866-7.944-6.397-9.064L6.397 80.694C2.865 79.574 0 81.814 0 85.7v78.59Z"
      ></path>
      <path
        fill="#FF9800"
        d="M255.288 5.302c0-3.886-2.872-6.135-6.397-5.014L6.397 77.176C2.865 78.296 0 82.36 0 86.247v78.59c0 3.887 2.865 6.128 6.397 5.014l242.494-76.895c3.525-1.12 6.397-5.184 6.397-9.064V5.302Z"
      ></path>
    </svg>
    <span>Sublime Text</span>
  </label>
  <span className="selection"></span>
</div>
        </div>
        );

        export default Radio_like;
        
        
         */
}
