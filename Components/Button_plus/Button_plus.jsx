import React from "react";
import styles from "./Button_plus.module.css";

const Button_plus = () => (
  <div>
    <div className={styles["button-container"]}>
      <svg
        tabindex="0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 100 100"
        height="25%"
        width="25%"
      >
        <rect
          fill="#763AC2"
          height="8"
          width="90.62"
          y="51"
          x="5.04999"
          className={styles["buttonSides"]}
        ></rect>
        <rect
          fill="#763AC2"
          transform="matrix(0.866025 -0.5 0.866025 0.5 1 59)"
          rx="8"
          height="57"
          width="57"
          className={styles["buttonSides"]}
        ></rect>
        <g clip-path="url(#clip0_106_11)">
          <rect
            fill="#A661FF"
            transform="matrix(0.866025 -0.5 0.866025 0.5 1 51)"
            rx="8"
            height="57"
            width="57"
            className={styles["buttonTop"]}
          ></rect>
          <path
            fill="#763AC2"
            d="M64.2199 42.5L55.4353 61.4282L31.4353 47.5718L64.2199 42.5Z"
            className={styles["buttonSides"] + styles["playSides"]}
          ></path>
          <g filter="url(#filter0_d_106_11)" className={styles["glowAll"]}>
            <path
              fill="white"
              d="M64.2199 42.5L55.4353 61.4282L31.4353 47.5718L64.2199 42.5Z"
            ></path>
          </g>
          <g
            filter="url(#filter1_f_106_11)"
            opacity="0.5"
            className={styles["glowMe"]}
          >
            <path
              fill="white"
              d="M73.0478 36.9032L58.6665 67.8905L19.3761 45.2062L73.0478 36.9032Z"
            ></path>
          </g>
        </g>
        <path
          fill="url(#paint0_linear_106_11)"
          d="M64 43L32 47.8L32 8L64 8L64 43Z"
          opacity="0.5"
          className={styles["glowMe"]}
        ></path>
        <defs>
          <filter
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
            height="34.9282"
            width="48.7846"
            y="34.5"
            x="23.4353"
            id="filter0_d_106_11"
          >
            <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
            <feColorMatrix
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              type="matrix"
              in="SourceAlpha"
            ></feColorMatrix>
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation="4"></feGaussianBlur>
            <feComposite operator="out" in2="hardAlpha"></feComposite>
            <feColorMatrix
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              type="matrix"
            ></feColorMatrix>
            <feBlend
              result="effect1_dropShadow_106_11"
              in2="BackgroundImageFix"
              mode="normal"
            ></feBlend>
            <feBlend
              result="shape"
              in2="effect1_dropShadow_106_11"
              in="SourceGraphic"
              mode="normal"
            ></feBlend>
          </filter>
          <filter
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
            height="62.9873"
            width="85.6716"
            y="20.9032"
            x="3.37613"
            id="filter1_f_106_11"
          >
            <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
            <feBlend
              result="shape"
              in2="BackgroundImageFix"
              in="SourceGraphic"
              mode="normal"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_106_11"
              stdDeviation="8"
            ></feGaussianBlur>
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            y2="8"
            x2="47"
            y1="48"
            x1="47"
            id="paint0_linear_106_11"
          >
            <stop stop-color="white"></stop>
            <stop stop-opacity="0" stop-color="white" offset="1"></stop>
          </linearGradient>
          <clipPath id="clip0_106_11">
            <rect
              fill="white"
              transform="matrix(0.866025 -0.5 0.866025 0.5 1 51)"
              rx="8"
              height="57"
              width="57"
            ></rect>
          </clipPath>
        </defs>
      </svg>

      <svg
        tabindex="0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 100 100"
        height="25%"
        width="25%"
      >
        <rect
          fill="#763AC2"
          height="8"
          width="90.62"
          y="51"
          x="5.04999"
          className={styles["buttonSides"]}
        ></rect>
        <rect
          fill="#763AC2"
          transform="matrix(0.866025 -0.5 0.866025 0.5 1 59)"
          rx="8"
          height="57"
          width="57"
          className={styles["buttonSides"]}
        ></rect>
        <g clip-path="url(#clip0_106_11)">
          <rect
            fill="#A661FF"
            transform="matrix(0.866025 -0.5 0.866025 0.5 1 51)"
            rx="8"
            height="57"
            width="57"
            className={styles["buttonTop"]}
          ></rect>
          <path
            fill="#763AC2"
            d="M64.2199 42.5L55.4353 61.4282L31.4353 47.5718L64.2199 42.5Z"
            className={styles["buttonSides"] + styles["playSides"]}
          ></path>
          <g filter="url(#filter0_d_106_11)" className={styles["glowAll"]}>
            <path
              fill="white"
              d="M64.2199 42.5L55.4353 61.4282L31.4353 47.5718L64.2199 42.5Z"
            ></path>
          </g>
          <g
            filter="url(#filter1_f_106_11)"
            opacity="0.5"
            className={styles["glowMe"]}
          >
            <path
              fill="white"
              d="M73.0478 36.9032L58.6665 67.8905L19.3761 45.2062L73.0478 36.9032Z"
            ></path>
          </g>
        </g>
        <path
          fill="url(#paint0_linear_106_11)"
          d="M64 43L32 47.8L32 8L64 8L64 43Z"
          opacity="0.5"
          className={styles["glowMe"]}
        ></path>
        <defs>
          <filter
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
            height="34.9282"
            width="48.7846"
            y="34.5"
            x="23.4353"
            id="filter0_d_106_11"
          >
            <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
            <feColorMatrix
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              type="matrix"
              in="SourceAlpha"
            ></feColorMatrix>
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation="4"></feGaussianBlur>
            <feComposite operator="out" in2="hardAlpha"></feComposite>
            <feColorMatrix
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              type="matrix"
            ></feColorMatrix>
            <feBlend
              result="effect1_dropShadow_106_11"
              in2="BackgroundImageFix"
              mode="normal"
            ></feBlend>
            <feBlend
              result="shape"
              in2="effect1_dropShadow_106_11"
              in="SourceGraphic"
              mode="normal"
            ></feBlend>
          </filter>
          <filter
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
            height="62.9873"
            width="85.6716"
            y="20.9032"
            x="3.37613"
            id="filter1_f_106_11"
          >
            <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
            <feBlend
              result="shape"
              in2="BackgroundImageFix"
              in="SourceGraphic"
              mode="normal"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_106_11"
              stdDeviation="8"
            ></feGaussianBlur>
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            y2="8"
            x2="47"
            y1="48"
            x1="47"
            id="paint0_linear_106_11"
          >
            <stop stop-color="white"></stop>
            <stop stop-opacity="0" stop-color="white" offset="1"></stop>
          </linearGradient>
          <clipPath id="clip0_106_11">
            <rect
              fill="white"
              transform="matrix(0.866025 -0.5 0.866025 0.5 1 51)"
              rx="8"
              height="57"
              width="57"
            ></rect>
          </clipPath>
        </defs>
      </svg>

      <svg
        tabindex="0"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 100 100"
        height="25%"
        width="25%"
      >
        <rect
          fill="#763AC2"
          height="8"
          width="90.62"
          y="51"
          x="5.04999"
          className={styles["buttonSides"]}
        ></rect>
        <rect
          fill="#763AC2"
          transform="matrix(0.866025 -0.5 0.866025 0.5 1 59)"
          rx="8"
          height="57"
          width="57"
          className={styles["buttonSides"]}
        ></rect>
        <g clip-path="url(#clip0_106_11)">
          <rect
            fill="#A661FF"
            transform="matrix(0.866025 -0.5 0.866025 0.5 1 51)"
            rx="8"
            height="57"
            width="57"
            className={styles["buttonTop"]}
          ></rect>
          <path
            fill="#763AC2"
            d="M64.2199 42.5L55.4353 61.4282L31.4353 47.5718L64.2199 42.5Z"
            className={styles["buttonSides"] + styles["playSides"]}
          ></path>
          <g filter="url(#filter0_d_106_11)" className={styles["glowAll"]}>
            <path
              fill="white"
              d="M64.2199 42.5L55.4353 61.4282L31.4353 47.5718L64.2199 42.5Z"
            ></path>
          </g>
          <g
            filter="url(#filter1_f_106_11)"
            opacity="0.5"
            className={styles["glowMe"]}
          >
            <path
              fill="white"
              d="M73.0478 36.9032L58.6665 67.8905L19.3761 45.2062L73.0478 36.9032Z"
            ></path>
          </g>
        </g>
        <path
          fill="url(#paint0_linear_106_11)"
          d="M64 43L32 47.8L32 8L64 8L64 43Z"
          opacity="0.5"
          className={styles["glowMe"]}
        ></path>
        <defs>
          <filter
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
            height="34.9282"
            width="48.7846"
            y="34.5"
            x="23.4353"
            id="filter0_d_106_11"
          >
            <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
            <feColorMatrix
              result="hardAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              type="matrix"
              in="SourceAlpha"
            ></feColorMatrix>
            <feOffset></feOffset>
            <feGaussianBlur stdDeviation="4"></feGaussianBlur>
            <feComposite operator="out" in2="hardAlpha"></feComposite>
            <feColorMatrix
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              type="matrix"
            ></feColorMatrix>
            <feBlend
              result="effect1_dropShadow_106_11"
              in2="BackgroundImageFix"
              mode="normal"
            ></feBlend>
            <feBlend
              result="shape"
              in2="effect1_dropShadow_106_11"
              in="SourceGraphic"
              mode="normal"
            ></feBlend>
          </filter>
          <filter
            color-interpolation-filters="sRGB"
            filterUnits="userSpaceOnUse"
            height="62.9873"
            width="85.6716"
            y="20.9032"
            x="3.37613"
            id="filter1_f_106_11"
          >
            <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
            <feBlend
              result="shape"
              in2="BackgroundImageFix"
              in="SourceGraphic"
              mode="normal"
            ></feBlend>
            <feGaussianBlur
              result="effect1_foregroundBlur_106_11"
              stdDeviation="8"
            ></feGaussianBlur>
          </filter>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            y2="8"
            x2="47"
            y1="48"
            x1="47"
            id="paint0_linear_106_11"
          >
            <stop stop-color="white"></stop>
            <stop stop-opacity="0" stop-color="white" offset="1"></stop>
          </linearGradient>
          <clipPath id="clip0_106_11">
            <rect
              fill="white"
              transform="matrix(0.866025 -0.5 0.866025 0.5 1 51)"
              rx="8"
              height="57"
              width="57"
            ></rect>
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
);

export default Button_plus;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_plus = () => (
         <div>
          <div className="button-container">
  <svg tabindex="0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" height="25%" width="25%">
  <rect fill="#763AC2" height="8" width="90.62" y="51" x="5.04999" className="buttonSides"></rect>
  <rect fill="#763AC2" transform="matrix(0.866025 -0.5 0.866025 0.5 1 59)" rx="8" height="57" width="57" className="buttonSides"></rect>
  <g clip-path="url(#clip0_106_11)">
    <rect fill="#A661FF" transform="matrix(0.866025 -0.5 0.866025 0.5 1 51)" rx="8" height="57" width="57" className="buttonTop"></rect>
    <path fill="#763AC2" d="M64.2199 42.5L55.4353 61.4282L31.4353 47.5718L64.2199 42.5Z" className="buttonSides playSides"></path>
    <g filter="url(#filter0_d_106_11)" className="glowAll">
      <path fill="white" d="M64.2199 42.5L55.4353 61.4282L31.4353 47.5718L64.2199 42.5Z"></path>
    </g>
    <g filter="url(#filter1_f_106_11)" opacity="0.5" className="glowMe">
      <path fill="white" d="M73.0478 36.9032L58.6665 67.8905L19.3761 45.2062L73.0478 36.9032Z"></path>
    </g>
  </g>
  <path fill="url(#paint0_linear_106_11)" d="M64 43L32 47.8L32 8L64 8L64 43Z" opacity="0.5" className="glowMe"></path>
  <defs>
    <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="34.9282" width="48.7846" y="34.5" x="23.4353" id="filter0_d_106_11">
      <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
      <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" type="matrix" in="SourceAlpha"></feColorMatrix>
      <feOffset></feOffset>
      <feGaussianBlur stdDeviation="4"></feGaussianBlur>
      <feComposite operator="out" in2="hardAlpha"></feComposite>
      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" type="matrix"></feColorMatrix>
      <feBlend result="effect1_dropShadow_106_11" in2="BackgroundImageFix" mode="normal"></feBlend>
      <feBlend result="shape" in2="effect1_dropShadow_106_11" in="SourceGraphic" mode="normal"></feBlend>
    </filter>
    <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="62.9873" width="85.6716" y="20.9032" x="3.37613" id="filter1_f_106_11">
      <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
      <feBlend result="shape" in2="BackgroundImageFix" in="SourceGraphic" mode="normal"></feBlend>
      <feGaussianBlur result="effect1_foregroundBlur_106_11" stdDeviation="8"></feGaussianBlur>
    </filter>
    <linearGradient gradientUnits="userSpaceOnUse" y2="8" x2="47" y1="48" x1="47" id="paint0_linear_106_11">
      <stop stop-color="white"></stop>
      <stop stop-opacity="0" stop-color="white" offset="1"></stop>
    </linearGradient>
    <clipPath id="clip0_106_11">
      <rect fill="white" transform="matrix(0.866025 -0.5 0.866025 0.5 1 51)" rx="8" height="57" width="57"></rect>
    </clipPath>
  </defs>
</svg>

<svg tabindex="0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" height="25%" width="25%">
  <rect fill="#763AC2" height="8" width="90.62" y="51" x="5.04999" className="buttonSides"></rect>
  <rect fill="#763AC2" transform="matrix(0.866025 -0.5 0.866025 0.5 1 59)" rx="8" height="57" width="57" className="buttonSides"></rect>
  <g clip-path="url(#clip0_106_11)">
    <rect fill="#A661FF" transform="matrix(0.866025 -0.5 0.866025 0.5 1 51)" rx="8" height="57" width="57" className="buttonTop"></rect>
    <path fill="#763AC2" d="M64.2199 42.5L55.4353 61.4282L31.4353 47.5718L64.2199 42.5Z" className="buttonSides playSides"></path>
    <g filter="url(#filter0_d_106_11)" className="glowAll">
      <path fill="white" d="M64.2199 42.5L55.4353 61.4282L31.4353 47.5718L64.2199 42.5Z"></path>
    </g>
    <g filter="url(#filter1_f_106_11)" opacity="0.5" className="glowMe">
      <path fill="white" d="M73.0478 36.9032L58.6665 67.8905L19.3761 45.2062L73.0478 36.9032Z"></path>
    </g>
  </g>
  <path fill="url(#paint0_linear_106_11)" d="M64 43L32 47.8L32 8L64 8L64 43Z" opacity="0.5" className="glowMe"></path>
  <defs>
    <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="34.9282" width="48.7846" y="34.5" x="23.4353" id="filter0_d_106_11">
      <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
      <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" type="matrix" in="SourceAlpha"></feColorMatrix>
      <feOffset></feOffset>
      <feGaussianBlur stdDeviation="4"></feGaussianBlur>
      <feComposite operator="out" in2="hardAlpha"></feComposite>
      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" type="matrix"></feColorMatrix>
      <feBlend result="effect1_dropShadow_106_11" in2="BackgroundImageFix" mode="normal"></feBlend>
      <feBlend result="shape" in2="effect1_dropShadow_106_11" in="SourceGraphic" mode="normal"></feBlend>
    </filter>
    <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="62.9873" width="85.6716" y="20.9032" x="3.37613" id="filter1_f_106_11">
      <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
      <feBlend result="shape" in2="BackgroundImageFix" in="SourceGraphic" mode="normal"></feBlend>
      <feGaussianBlur result="effect1_foregroundBlur_106_11" stdDeviation="8"></feGaussianBlur>
    </filter>
    <linearGradient gradientUnits="userSpaceOnUse" y2="8" x2="47" y1="48" x1="47" id="paint0_linear_106_11">
      <stop stop-color="white"></stop>
      <stop stop-opacity="0" stop-color="white" offset="1"></stop>
    </linearGradient>
    <clipPath id="clip0_106_11">
      <rect fill="white" transform="matrix(0.866025 -0.5 0.866025 0.5 1 51)" rx="8" height="57" width="57"></rect>
    </clipPath>
  </defs>
</svg>

<svg tabindex="0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100" height="25%" width="25%">
  <rect fill="#763AC2" height="8" width="90.62" y="51" x="5.04999" className="buttonSides"></rect>
  <rect fill="#763AC2" transform="matrix(0.866025 -0.5 0.866025 0.5 1 59)" rx="8" height="57" width="57" className="buttonSides"></rect>
  <g clip-path="url(#clip0_106_11)">
    <rect fill="#A661FF" transform="matrix(0.866025 -0.5 0.866025 0.5 1 51)" rx="8" height="57" width="57" className="buttonTop"></rect>
    <path fill="#763AC2" d="M64.2199 42.5L55.4353 61.4282L31.4353 47.5718L64.2199 42.5Z" className="buttonSides playSides"></path>
    <g filter="url(#filter0_d_106_11)" className="glowAll">
      <path fill="white" d="M64.2199 42.5L55.4353 61.4282L31.4353 47.5718L64.2199 42.5Z"></path>
    </g>
    <g filter="url(#filter1_f_106_11)" opacity="0.5" className="glowMe">
      <path fill="white" d="M73.0478 36.9032L58.6665 67.8905L19.3761 45.2062L73.0478 36.9032Z"></path>
    </g>
  </g>
  <path fill="url(#paint0_linear_106_11)" d="M64 43L32 47.8L32 8L64 8L64 43Z" opacity="0.5" className="glowMe"></path>
  <defs>
    <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="34.9282" width="48.7846" y="34.5" x="23.4353" id="filter0_d_106_11">
      <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
      <feColorMatrix result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" type="matrix" in="SourceAlpha"></feColorMatrix>
      <feOffset></feOffset>
      <feGaussianBlur stdDeviation="4"></feGaussianBlur>
      <feComposite operator="out" in2="hardAlpha"></feComposite>
      <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" type="matrix"></feColorMatrix>
      <feBlend result="effect1_dropShadow_106_11" in2="BackgroundImageFix" mode="normal"></feBlend>
      <feBlend result="shape" in2="effect1_dropShadow_106_11" in="SourceGraphic" mode="normal"></feBlend>
    </filter>
    <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="62.9873" width="85.6716" y="20.9032" x="3.37613" id="filter1_f_106_11">
      <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
      <feBlend result="shape" in2="BackgroundImageFix" in="SourceGraphic" mode="normal"></feBlend>
      <feGaussianBlur result="effect1_foregroundBlur_106_11" stdDeviation="8"></feGaussianBlur>
    </filter>
    <linearGradient gradientUnits="userSpaceOnUse" y2="8" x2="47" y1="48" x1="47" id="paint0_linear_106_11">
      <stop stop-color="white"></stop>
      <stop stop-opacity="0" stop-color="white" offset="1"></stop>
    </linearGradient>
    <clipPath id="clip0_106_11">
      <rect fill="white" transform="matrix(0.866025 -0.5 0.866025 0.5 1 51)" rx="8" height="57" width="57"></rect>
    </clipPath>
  </defs>
</svg>
</div>
        </div>
        );

        export default Button_plus;
        
        
         */
}
