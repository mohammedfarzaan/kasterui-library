import React from "react";
import styles from "./Radio_kind.module.css";

const Radio_kind = () => (
  <div>
    <div className={styles["radio-input"]}>
      <svg
        className={styles["top_hand"]}
        width="60"
        height="29"
        viewBox="0 0 137 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.809473 14.0106C0.932949 14.8606 1.71126 16.7901 2.43332 18.0113C4.22178 21.0082 7.38337 24.6271 10.7735 27.5176C16.1188 32.0703 24.3802 37.5687 29.6583 40.0845C30.5268 40.494 31.1664 40.9069 31.5241 41.2887C32.527 42.3438 34.6516 44.1531 35.766 44.8951C39.744 47.5533 43.742 48.2385 48.5595 47.1041C50.5552 46.6327 51.7022 46.482 52.5699 46.6117C53.9507 46.8006 56.6314 48.0174 60.2095 50.055C66.6117 53.7191 68.4207 54.6602 70.9203 55.6544C72.5949 56.3124 74.8008 56.8376 76.0316 56.8845C78.8436 56.9853 80.9446 55.6606 82.0853 53.0743C82.2485 52.6812 82.3455 52.3437 82.285 52.297C82.2195 52.2699 82.3099 51.8373 82.4907 51.3349C83.1969 49.3516 83.21 48.4539 82.569 47.1188C82.0646 46.0986 81.2338 45.1394 79.5862 43.6909C78.0597 42.3355 76.0996 41.0553 72.9307 39.3195C69.3327 37.3596 68.0467 36.8015 66.2001 36.41C65.2768 36.2143 64.5334 36.044 64.5311 36.0124C64.5483 35.9857 66.0455 35.4796 67.8741 34.8928C71.4802 33.7165 71.8754 33.5488 72.2467 32.9502C72.4581 32.6109 72.5192 32.5748 72.5986 32.7092C72.7502 32.9656 72.535 33.5214 72.1259 33.9446C71.8173 34.2589 71.2978 34.4672 69.2277 35.1473C67.8354 35.6079 66.6552 36.009 66.5942 36.0451C66.5331 36.0813 67.2471 36.2854 68.1777 36.4933C69.5479 36.8038 70.2469 37.0663 71.9177 37.9408C73.0476 38.5417 74.689 39.4501 75.5713 39.9667C77.8473 41.3074 78.9672 41.5847 81.4477 41.4036C82.8522 41.2983 83.912 41.0837 86.0059 40.4719C88.8482 39.6484 90.6774 39.3414 92.5312 39.3826L93.1175 39.3985L92.3168 39.0479C84.6062 35.6795 84.2542 35.558 83.0744 35.5139C82.4881 35.4979 81.2317 35.2684 80.2651 34.9994C79.3107 34.7232 78.0059 34.4399 77.3713 34.3701C75.1711 34.1053 73.7853 33.5733 72.9323 32.6602C72.6929 32.4227 72.4591 32.083 72.4213 31.9075C72.3546 31.6833 72.4734 31.7449 72.9355 32.1639C73.9272 33.0608 75.4808 33.6255 77.8559 33.9353C78.3372 33.9967 78.9374 34.1198 79.1728 34.2114C80.2916 34.6541 82.4781 35.1743 83.3708 35.2068C84.5067 35.2603 85.259 35.5572 91.5349 38.4224C93.7232 39.4195 95.6077 40.3489 95.731 40.4738C95.8348 40.5937 96.4718 41.4201 97.1377 42.2955C99.4103 45.3028 102.052 48.4877 103.222 49.6582C104.658 51.0836 105.473 52.5462 106.774 56.1118C107.833 58.9629 108.898 60.5415 110.786 62.0622C113.125 63.9264 116.207 64.428 117.818 63.1951C118.62 62.5725 119.199 61.7685 119.178 61.2866C119.168 61.0456 118.795 60.2768 118.136 59.1339C117.171 57.4464 117.085 57.2171 116.424 54.8723C115.508 51.6231 114.555 48.561 114.234 47.7949C114.095 47.4485 107.6 38.0601 107.579 37.9408C107.513 37.6338 114.925 47.3201 115.823 48.1409C117.373 49.5645 118.116 50.5425 120.286 53.9896C122.67 57.7714 122.934 58.0772 124.862 59.3597C126.41 60.3891 128.008 60.9444 129.649 61.045C131.182 61.1279 132.302 60.8772 133.131 60.2719C133.869 59.7365 134.747 58.657 134.932 58.0207C135.106 57.4233 134.812 56.8715 133.597 55.5961C132.993 54.9644 132.464 54.2384 131.822 53.1515L125.082 44.1252L119.178 37.2685L124.126 42.2172L129.386 48.7511L131.537 50.6875C132.398 51.0102 133.908 51.0336 134.932 50.6875C135.367 50.2815 136.36 48.8694 136.434 48.3808C136.47 48.162 136.368 47.9911 136.011 47.6092C135.75 47.335 135.131 46.679 134.643 46.16C133.991 45.4746 133.224 44.4283 131.869 42.3611C128.817 37.6724 127.371 35.9234 123.898 32.6699C122.795 31.6409 120.06 29.0223 117.828 26.8644C113.781 22.9454 112.83 22.0901 111.744 21.397C110.201 20.4309 108.323 20.3214 102.186 20.8683L99.7658 21.096L97.9885 20.5152C94.9292 19.5222 93.1102 18.62 89.0707 16.0806C86.216 14.2909 84.2393 13.3171 82.5487 12.8829C80.229 12.2767 78.75 12.2282 75.0954 12.6256C71.8328 12.989 69.8519 13.0395 65.3055 12.8764C63.3108 12.8197 60.4033 12.8083 58.8749 12.8714C55.4434 13.005 54.609 12.9875 52.3727 12.6616C46.1717 11.7628 40.0645 8.76483 31.9895 2.66172L29.6384 0.887458L27.3346 1.59036C19.2897 4.03973 11.8701 7.24008 4.10989 11.5647L0.732716 13.4627L0.809473 14.0106ZM16.3102 27.2929C21.7758 33.1919 25.6752 36.7206 28.0205 37.872L28.7457 38.2343L27.9395 37.9858C26.8468 37.643 24.809 36.3428 23.1925 34.9747C20.5598 32.7242 18.148 30.1782 14.616 25.9049C11.376 21.9862 11.531 22.1089 16.3102 27.2929ZM134.815 47.7889C135.786 48.2039 135.812 48.2211 135.098 48.017C134.676 47.8877 134.113 47.6602 133.861 47.5126C133.23 47.1436 133.529 47.2307 134.815 47.7889Z"
          fill="url(#paint0_linear_16_22)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_16_22"
            x1="116.5"
            y1="66.5"
            x2="18.5"
            y2="-19.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white"></stop>
            <stop offset="1" stop-color="#212121" stop-opacity="0.3"></stop>
          </linearGradient>
        </defs>
      </svg>

      <div className={styles["radio_item"]}>
        <input
          type="radio"
          id="value-1"
          name="value-radio"
          value="Earth"
          className={styles["radio"]}
        />
        <div
          className={
            styles["sphere_lines"] + styles[""] + styles["earth_input"]
          }
        ></div>
        <div
          className={
            styles["sphere_lines_back"] + styles[""] + styles["earth_input"]
          }
        ></div>
        <svg
          className={styles["sphere"] + styles["earth_input_planet"]}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="50"
          height="50"
          viewBox="-1.2 -1.2 2.2 2.2"
        >
          <g strokeWidth="0.009">
            <circle r="1"></circle>
            <g id="grid">
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.5s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-1.0s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-1.5s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-2.0s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-2.5s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-3.0s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-3.5s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-4.0s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-4.5s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-5.0s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-5.5s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-6.0s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-6.5s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-7.0s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-7.5s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-8.0s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-8.5s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-9.0s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-9.5s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
            </g>
          </g>
        </svg>
        <label for="value-1" className={styles["pointer"]}>
          Earth
        </label>
      </div>

      <div className={styles["radio_item"]}>
        <input
          type="radio"
          id="value-2"
          name="value-radio"
          value="Moon"
          className={styles["radio"]}
        />
        <svg
          className={styles["sphere"] + styles["moon_input_planet"]}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="25"
          height="25"
          viewBox="-1.2 -1.2 2.2 2.2"
        >
          <g stroke="rgba(0, 0, 0, 0.2)" strokeWidth="0.009">
            <circle r="1"></circle>
            <g id="grid">
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.5s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-1.0s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-1.5s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-2.0s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-2.5s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-3.0s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-3.5s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-4.0s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-4.5s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-5.0s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-5.5s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-6.0s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-6.5s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-7.0s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-7.5s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-8.0s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-8.5s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-9.0s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-9.5s"
                  dur="5s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
            </g>
          </g>
        </svg>
        <div
          className={styles["sphere_lines"] + styles[""] + styles["moon_input"]}
        ></div>
        <div
          className={
            styles["sphere_lines_back"] + styles[""] + styles["moon_input"]
          }
        ></div>
        <label for="value-2" className={styles["pointer"]}>
          Moon
        </label>
      </div>

      <div className={styles["radio_item"]}>
        <input
          type="radio"
          id="value-3"
          name="value-radio"
          value="Mars"
          className={styles["radio"]}
        />
        <svg
          className={styles["sphere"] + styles["mars_input_planet"]}
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="35"
          height="35"
          viewBox="-1.2 -1.2 2.2 2.2"
        >
          <g strokeWidth="0.009">
            <circle r="1"></circle>

            <g id="grid">
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  dur="11s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-0.5s"
                  dur="11s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-1.0s"
                  dur="11s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-1.5s"
                  dur="11s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-2.0s"
                  dur="11s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-2.5s"
                  dur="11s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-3.0s"
                  dur="11s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-3.5s"
                  dur="11s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-4.0s"
                  dur="11s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-4.5s"
                  dur="11s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-5.0s"
                  dur="11s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-5.5s"
                  dur="11s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-6.0s"
                  dur="11s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-6.5s"
                  dur="11s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-7.0s"
                  dur="11s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-7.5s"
                  dur="11s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-8.0s"
                  dur="11s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-8.5s"
                  dur="11s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-9.0s"
                  dur="11s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
              <path d="M0 1A1 1 0 0 1 0-1">
                <animateTransform
                  attributeName="transform"
                  type="scale"
                  begin="-9.5s"
                  dur="11s"
                  values="1 1; -1 1"
                  repeatCount="indefinite"
                  keySplines="0.64 0 0.36 1"
                ></animateTransform>
              </path>
            </g>
          </g>
        </svg>
        <div
          className={styles["sphere_lines"] + styles[""] + styles["mars_input"]}
        ></div>
        <div
          className={
            styles["sphere_lines_back"] + styles[""] + styles["mars_input"]
          }
        ></div>
        <label for="value-3" className={styles["pointer"]}>
          Mars
        </label>
      </div>
      <svg
        className={styles["bottom_hand"]}
        width="60"
        height="30"
        viewBox="0 0 135 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M134.909 53.0073C134.809 52.1543 134.083 50.2045 133.394 48.9643C131.686 45.9204 128.623 42.2177 125.312 39.2371C120.091 34.5423 111.981 28.8235 106.772 26.1666C105.915 25.7339 105.287 25.304 104.94 24.9126C103.966 23.8309 101.89 21.9651 100.796 21.1934C96.8913 18.4291 92.9132 17.6367 88.0669 18.641C86.0592 19.0585 84.9087 19.1783 84.0447 19.0253C82.6695 18.7993 80.0225 17.5108 76.5005 15.3777C70.1993 11.5426 68.4162 10.5532 65.9442 9.49207C64.288 8.78926 62.097 8.20494 60.8679 8.12498C58.0597 7.94851 55.9238 9.21615 54.7139 11.7708C54.5402 12.1594 54.4341 12.4942 54.4934 12.5425C54.5581 12.5714 54.4561 13.0013 54.2618 13.4988C53.5025 15.4623 53.4653 16.3594 54.0702 17.7112C54.5469 18.7446 55.3516 19.7258 56.9596 21.2181C58.4491 22.614 60.3741 23.9466 63.4951 25.767C67.0391 27.823 68.3096 28.4155 70.145 28.8566C71.0627 29.0771 71.8012 29.2672 71.8026 29.2989C71.7847 29.3251 70.2745 29.7908 68.4307 30.3281C64.7943 31.407 64.3947 31.564 64.0075 32.1524C63.787 32.4859 63.725 32.5203 63.6492 32.3839C63.5045 32.1235 63.7346 31.5737 64.1549 31.1617C64.4719 30.8558 64.9969 30.6615 67.0845 30.0374C68.4886 29.6144 69.6792 29.2451 69.7412 29.2107C69.8032 29.1762 69.095 28.953 68.1704 28.7201C66.809 28.3728 66.1172 28.0917 64.4706 27.1725C63.3573 26.5414 61.741 25.5892 60.8729 25.049C58.6337 23.6475 57.5217 23.3402 55.0373 23.4545C53.6304 23.522 52.5652 23.7079 50.4556 24.2632C47.5922 25.0099 45.7554 25.2676 43.9034 25.1766L43.3178 25.1448L44.1087 25.5169C51.7259 29.0916 52.0745 29.2225 53.2527 29.2983C53.8383 29.33 55.0881 29.5933 56.0471 29.8882C56.9938 30.19 58.2904 30.5083 58.9229 30.5952C61.1152 30.919 62.4862 31.4882 63.3143 32.4238C63.5472 32.6677 63.7718 33.0136 63.8049 33.19C63.8655 33.416 63.7484 33.3512 63.2978 32.9199C62.3305 31.9966 60.7927 31.3903 58.4268 31.0168C57.9473 30.9424 57.3506 30.8032 57.1178 30.7053C56.0113 30.2327 53.8397 29.6538 52.9481 29.5973C51.8141 29.5132 51.07 29.1963 44.8734 26.1632C42.7128 25.1076 40.854 24.1278 40.7342 23.9997C40.6336 23.877 40.019 23.0337 39.3769 22.1408C37.1861 19.0734 34.6315 15.8186 33.4933 14.617C32.0961 13.1535 31.3204 11.6695 30.1162 8.07021C29.1338 5.19164 28.1114 3.58492 26.265 2.014C23.9777 0.0875452 20.9104 -0.49681 19.2665 0.692307C18.4479 1.29307 17.8471 2.08124 17.8554 2.56352C17.8595 2.80466 18.2108 3.58321 18.8392 4.74347C19.7582 6.45629 19.8381 6.68779 20.4361 9.04961C21.2641 12.3223 22.1349 15.4089 22.4352 16.1833C22.5647 16.5333 28.8043 26.0931 28.8222 26.213C28.8801 26.5216 21.7311 16.6394 20.8561 15.7947C19.3445 14.3299 18.628 13.3322 16.5516 9.82803C14.2698 5.98347 14.0149 5.67067 12.1217 4.33675C10.6018 3.26603 9.01995 2.66795 7.38157 2.52321C5.85205 2.39914 4.72488 2.61958 3.88017 3.20242C3.1278 3.71775 2.22107 4.77323 2.01987 5.40432C1.82969 5.99684 2.10803 6.55629 3.28889 7.864C3.87587 8.51166 4.3843 9.25164 4.99745 10.3554L11.4916 19.5599L17.2091 26.5729L12.3964 21.4929L7.31448 14.8198L5.21578 12.8262C4.36414 12.4805 2.85457 12.4164 1.82255 12.7349C1.37609 13.129 0.345356 14.5139 0.258529 15.0003C0.217183 15.218 0.313634 15.3917 0.660864 15.783C0.914398 16.0641 1.51516 16.7366 1.98916 17.2685C2.62299 17.9713 3.36153 19.0378 4.65949 21.1406C7.58472 25.9098 8.98329 27.697 12.3674 31.0428C13.4422 32.1011 16.1057 34.7923 18.2786 37.0095C22.2194 41.036 23.1468 41.9166 24.2133 42.6387C25.7304 43.646 27.6044 43.8059 33.7542 43.4244L36.1794 43.2619L37.9404 43.8903C40.9718 44.9652 42.7659 45.916 46.7357 48.5632C49.5411 50.4291 51.4909 51.4557 53.1692 51.9353C55.4718 52.6037 56.9489 52.6919 60.6129 52.393C63.8842 52.1175 65.8657 52.1203 70.406 52.4057C72.3985 52.516 75.3046 52.6057 76.8341 52.5837C80.268 52.5425 81.1016 52.5825 83.3284 52.9684C89.503 54.0337 95.5272 57.195 103.435 63.5131L105.738 65.35L108.059 64.7093C116.167 62.4773 123.67 59.4778 131.544 55.3635L134.971 53.5571L134.909 53.0073ZM119.772 39.3127C114.467 33.2688 110.664 29.6364 108.35 28.4224L107.635 28.0407L108.434 28.3108C109.517 28.6829 111.519 30.0375 113.098 31.4485C115.67 33.7691 118.012 36.379 121.428 40.7458C124.561 44.7503 124.41 44.6235 119.772 39.3127ZM1.86107 15.6356C0.902028 15.1946 0.875851 15.1767 1.58411 15.4C2.003 15.5405 2.55968 15.7831 2.80771 15.9374C3.42777 16.3232 3.13152 16.2282 1.86107 15.6356Z"
          fill="url(#paint0_linear_16_27)"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_16_27"
            x1="40.2231"
            y1="-13.6579"
            x2="116.323"
            y2="86.0298"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white"></stop>
            <stop
              offset="0.999442"
              stop-color="#212121"
              stop-opacity="0.3"
            ></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
);

export default Radio_kind;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_kind = () => (
         <div>
          <div className="radio-input">
  <svg className="top_hand" width="60" height="29" viewBox="0 0 137 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.809473 14.0106C0.932949 14.8606 1.71126 16.7901 2.43332 18.0113C4.22178 21.0082 7.38337 24.6271 10.7735 27.5176C16.1188 32.0703 24.3802 37.5687 29.6583 40.0845C30.5268 40.494 31.1664 40.9069 31.5241 41.2887C32.527 42.3438 34.6516 44.1531 35.766 44.8951C39.744 47.5533 43.742 48.2385 48.5595 47.1041C50.5552 46.6327 51.7022 46.482 52.5699 46.6117C53.9507 46.8006 56.6314 48.0174 60.2095 50.055C66.6117 53.7191 68.4207 54.6602 70.9203 55.6544C72.5949 56.3124 74.8008 56.8376 76.0316 56.8845C78.8436 56.9853 80.9446 55.6606 82.0853 53.0743C82.2485 52.6812 82.3455 52.3437 82.285 52.297C82.2195 52.2699 82.3099 51.8373 82.4907 51.3349C83.1969 49.3516 83.21 48.4539 82.569 47.1188C82.0646 46.0986 81.2338 45.1394 79.5862 43.6909C78.0597 42.3355 76.0996 41.0553 72.9307 39.3195C69.3327 37.3596 68.0467 36.8015 66.2001 36.41C65.2768 36.2143 64.5334 36.044 64.5311 36.0124C64.5483 35.9857 66.0455 35.4796 67.8741 34.8928C71.4802 33.7165 71.8754 33.5488 72.2467 32.9502C72.4581 32.6109 72.5192 32.5748 72.5986 32.7092C72.7502 32.9656 72.535 33.5214 72.1259 33.9446C71.8173 34.2589 71.2978 34.4672 69.2277 35.1473C67.8354 35.6079 66.6552 36.009 66.5942 36.0451C66.5331 36.0813 67.2471 36.2854 68.1777 36.4933C69.5479 36.8038 70.2469 37.0663 71.9177 37.9408C73.0476 38.5417 74.689 39.4501 75.5713 39.9667C77.8473 41.3074 78.9672 41.5847 81.4477 41.4036C82.8522 41.2983 83.912 41.0837 86.0059 40.4719C88.8482 39.6484 90.6774 39.3414 92.5312 39.3826L93.1175 39.3985L92.3168 39.0479C84.6062 35.6795 84.2542 35.558 83.0744 35.5139C82.4881 35.4979 81.2317 35.2684 80.2651 34.9994C79.3107 34.7232 78.0059 34.4399 77.3713 34.3701C75.1711 34.1053 73.7853 33.5733 72.9323 32.6602C72.6929 32.4227 72.4591 32.083 72.4213 31.9075C72.3546 31.6833 72.4734 31.7449 72.9355 32.1639C73.9272 33.0608 75.4808 33.6255 77.8559 33.9353C78.3372 33.9967 78.9374 34.1198 79.1728 34.2114C80.2916 34.6541 82.4781 35.1743 83.3708 35.2068C84.5067 35.2603 85.259 35.5572 91.5349 38.4224C93.7232 39.4195 95.6077 40.3489 95.731 40.4738C95.8348 40.5937 96.4718 41.4201 97.1377 42.2955C99.4103 45.3028 102.052 48.4877 103.222 49.6582C104.658 51.0836 105.473 52.5462 106.774 56.1118C107.833 58.9629 108.898 60.5415 110.786 62.0622C113.125 63.9264 116.207 64.428 117.818 63.1951C118.62 62.5725 119.199 61.7685 119.178 61.2866C119.168 61.0456 118.795 60.2768 118.136 59.1339C117.171 57.4464 117.085 57.2171 116.424 54.8723C115.508 51.6231 114.555 48.561 114.234 47.7949C114.095 47.4485 107.6 38.0601 107.579 37.9408C107.513 37.6338 114.925 47.3201 115.823 48.1409C117.373 49.5645 118.116 50.5425 120.286 53.9896C122.67 57.7714 122.934 58.0772 124.862 59.3597C126.41 60.3891 128.008 60.9444 129.649 61.045C131.182 61.1279 132.302 60.8772 133.131 60.2719C133.869 59.7365 134.747 58.657 134.932 58.0207C135.106 57.4233 134.812 56.8715 133.597 55.5961C132.993 54.9644 132.464 54.2384 131.822 53.1515L125.082 44.1252L119.178 37.2685L124.126 42.2172L129.386 48.7511L131.537 50.6875C132.398 51.0102 133.908 51.0336 134.932 50.6875C135.367 50.2815 136.36 48.8694 136.434 48.3808C136.47 48.162 136.368 47.9911 136.011 47.6092C135.75 47.335 135.131 46.679 134.643 46.16C133.991 45.4746 133.224 44.4283 131.869 42.3611C128.817 37.6724 127.371 35.9234 123.898 32.6699C122.795 31.6409 120.06 29.0223 117.828 26.8644C113.781 22.9454 112.83 22.0901 111.744 21.397C110.201 20.4309 108.323 20.3214 102.186 20.8683L99.7658 21.096L97.9885 20.5152C94.9292 19.5222 93.1102 18.62 89.0707 16.0806C86.216 14.2909 84.2393 13.3171 82.5487 12.8829C80.229 12.2767 78.75 12.2282 75.0954 12.6256C71.8328 12.989 69.8519 13.0395 65.3055 12.8764C63.3108 12.8197 60.4033 12.8083 58.8749 12.8714C55.4434 13.005 54.609 12.9875 52.3727 12.6616C46.1717 11.7628 40.0645 8.76483 31.9895 2.66172L29.6384 0.887458L27.3346 1.59036C19.2897 4.03973 11.8701 7.24008 4.10989 11.5647L0.732716 13.4627L0.809473 14.0106ZM16.3102 27.2929C21.7758 33.1919 25.6752 36.7206 28.0205 37.872L28.7457 38.2343L27.9395 37.9858C26.8468 37.643 24.809 36.3428 23.1925 34.9747C20.5598 32.7242 18.148 30.1782 14.616 25.9049C11.376 21.9862 11.531 22.1089 16.3102 27.2929ZM134.815 47.7889C135.786 48.2039 135.812 48.2211 135.098 48.017C134.676 47.8877 134.113 47.6602 133.861 47.5126C133.23 47.1436 133.529 47.2307 134.815 47.7889Z" fill="url(#paint0_linear_16_22)">
    </path>
    <defs>
      <linearGradient id="paint0_linear_16_22" x1="116.5" y1="66.5" x2="18.5" y2="-19.5" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"></stop>
        <stop offset="1" stop-color="#212121" stop-opacity="0.3"></stop>
      </linearGradient>
    </defs>
  </svg>

  <div className="radio_item">
    <input type="radio" id="value-1" name="value-radio" value="Earth" className="radio" />
    <div className="sphere_lines  earth_input"></div>
    <div className="sphere_lines_back  earth_input"></div>
    <svg className="sphere earth_input_planet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="50" height="50" viewBox="-1.2 -1.2 2.2 2.2">
      <g strokeWidth="0.009">
        <circle r="1"></circle>
        <g id="grid">
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-0.5s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-1.0s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-1.5s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-2.0s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-2.5s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-3.0s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-3.5s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-4.0s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-4.5s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-5.0s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-5.5s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-6.0s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-6.5s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-7.0s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-7.5s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-8.0s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-8.5s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-9.0s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-9.5s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
        </g>

      </g>
    </svg>
    <label for="value-1" className="pointer">Earth</label>
  </div>


  <div className="radio_item">
    <input type="radio" id="value-2" name="value-radio" value="Moon" className="radio" />
    <svg className="sphere moon_input_planet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="25" height="25" viewBox="-1.2 -1.2 2.2 2.2">
      <g stroke="rgba(0, 0, 0, 0.2)" strokeWidth="0.009">
        <circle r="1"></circle>
        <g id="grid">
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-0.5s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-1.0s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-1.5s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-2.0s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-2.5s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-3.0s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-3.5s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-4.0s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-4.5s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-5.0s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-5.5s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-6.0s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-6.5s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-7.0s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-7.5s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-8.0s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-8.5s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-9.0s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-9.5s" dur="5s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
        </g>

      </g>
    </svg>
    <div className="sphere_lines  moon_input"></div>
    <div className="sphere_lines_back  moon_input"></div>
    <label for="value-2" className="pointer">Moon</label>
  </div>



  <div className="radio_item">
    <input type="radio" id="value-3" name="value-radio" value="Mars" className="radio" />
    <svg className="sphere mars_input_planet" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="35" height="35" viewBox="-1.2 -1.2 2.2 2.2">
      <g strokeWidth="0.009">
        <circle r="1"></circle>

        <g id="grid">
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" dur="11s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-0.5s" dur="11s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-1.0s" dur="11s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-1.5s" dur="11s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-2.0s" dur="11s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-2.5s" dur="11s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-3.0s" dur="11s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-3.5s" dur="11s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-4.0s" dur="11s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-4.5s" dur="11s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-5.0s" dur="11s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-5.5s" dur="11s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-6.0s" dur="11s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-6.5s" dur="11s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-7.0s" dur="11s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-7.5s" dur="11s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-8.0s" dur="11s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-8.5s" dur="11s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-9.0s" dur="11s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
          <path d="M0 1A1 1 0 0 1 0-1">
            <animateTransform attributeName="transform" type="scale" begin="-9.5s" dur="11s" values="1 1; -1 1" repeatCount="indefinite" keySplines="0.64 0 0.36 1"></animateTransform>
          </path>
        </g>

      </g>
    </svg>
    <div className="sphere_lines  mars_input"></div>
    <div className="sphere_lines_back  mars_input"></div>
    <label for="value-3" className="pointer">Mars</label>
  </div>
  <svg className="bottom_hand" width="60" height="30" viewBox="0 0 135 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M134.909 53.0073C134.809 52.1543 134.083 50.2045 133.394 48.9643C131.686 45.9204 128.623 42.2177 125.312 39.2371C120.091 34.5423 111.981 28.8235 106.772 26.1666C105.915 25.7339 105.287 25.304 104.94 24.9126C103.966 23.8309 101.89 21.9651 100.796 21.1934C96.8913 18.4291 92.9132 17.6367 88.0669 18.641C86.0592 19.0585 84.9087 19.1783 84.0447 19.0253C82.6695 18.7993 80.0225 17.5108 76.5005 15.3777C70.1993 11.5426 68.4162 10.5532 65.9442 9.49207C64.288 8.78926 62.097 8.20494 60.8679 8.12498C58.0597 7.94851 55.9238 9.21615 54.7139 11.7708C54.5402 12.1594 54.4341 12.4942 54.4934 12.5425C54.5581 12.5714 54.4561 13.0013 54.2618 13.4988C53.5025 15.4623 53.4653 16.3594 54.0702 17.7112C54.5469 18.7446 55.3516 19.7258 56.9596 21.2181C58.4491 22.614 60.3741 23.9466 63.4951 25.767C67.0391 27.823 68.3096 28.4155 70.145 28.8566C71.0627 29.0771 71.8012 29.2672 71.8026 29.2989C71.7847 29.3251 70.2745 29.7908 68.4307 30.3281C64.7943 31.407 64.3947 31.564 64.0075 32.1524C63.787 32.4859 63.725 32.5203 63.6492 32.3839C63.5045 32.1235 63.7346 31.5737 64.1549 31.1617C64.4719 30.8558 64.9969 30.6615 67.0845 30.0374C68.4886 29.6144 69.6792 29.2451 69.7412 29.2107C69.8032 29.1762 69.095 28.953 68.1704 28.7201C66.809 28.3728 66.1172 28.0917 64.4706 27.1725C63.3573 26.5414 61.741 25.5892 60.8729 25.049C58.6337 23.6475 57.5217 23.3402 55.0373 23.4545C53.6304 23.522 52.5652 23.7079 50.4556 24.2632C47.5922 25.0099 45.7554 25.2676 43.9034 25.1766L43.3178 25.1448L44.1087 25.5169C51.7259 29.0916 52.0745 29.2225 53.2527 29.2983C53.8383 29.33 55.0881 29.5933 56.0471 29.8882C56.9938 30.19 58.2904 30.5083 58.9229 30.5952C61.1152 30.919 62.4862 31.4882 63.3143 32.4238C63.5472 32.6677 63.7718 33.0136 63.8049 33.19C63.8655 33.416 63.7484 33.3512 63.2978 32.9199C62.3305 31.9966 60.7927 31.3903 58.4268 31.0168C57.9473 30.9424 57.3506 30.8032 57.1178 30.7053C56.0113 30.2327 53.8397 29.6538 52.9481 29.5973C51.8141 29.5132 51.07 29.1963 44.8734 26.1632C42.7128 25.1076 40.854 24.1278 40.7342 23.9997C40.6336 23.877 40.019 23.0337 39.3769 22.1408C37.1861 19.0734 34.6315 15.8186 33.4933 14.617C32.0961 13.1535 31.3204 11.6695 30.1162 8.07021C29.1338 5.19164 28.1114 3.58492 26.265 2.014C23.9777 0.0875452 20.9104 -0.49681 19.2665 0.692307C18.4479 1.29307 17.8471 2.08124 17.8554 2.56352C17.8595 2.80466 18.2108 3.58321 18.8392 4.74347C19.7582 6.45629 19.8381 6.68779 20.4361 9.04961C21.2641 12.3223 22.1349 15.4089 22.4352 16.1833C22.5647 16.5333 28.8043 26.0931 28.8222 26.213C28.8801 26.5216 21.7311 16.6394 20.8561 15.7947C19.3445 14.3299 18.628 13.3322 16.5516 9.82803C14.2698 5.98347 14.0149 5.67067 12.1217 4.33675C10.6018 3.26603 9.01995 2.66795 7.38157 2.52321C5.85205 2.39914 4.72488 2.61958 3.88017 3.20242C3.1278 3.71775 2.22107 4.77323 2.01987 5.40432C1.82969 5.99684 2.10803 6.55629 3.28889 7.864C3.87587 8.51166 4.3843 9.25164 4.99745 10.3554L11.4916 19.5599L17.2091 26.5729L12.3964 21.4929L7.31448 14.8198L5.21578 12.8262C4.36414 12.4805 2.85457 12.4164 1.82255 12.7349C1.37609 13.129 0.345356 14.5139 0.258529 15.0003C0.217183 15.218 0.313634 15.3917 0.660864 15.783C0.914398 16.0641 1.51516 16.7366 1.98916 17.2685C2.62299 17.9713 3.36153 19.0378 4.65949 21.1406C7.58472 25.9098 8.98329 27.697 12.3674 31.0428C13.4422 32.1011 16.1057 34.7923 18.2786 37.0095C22.2194 41.036 23.1468 41.9166 24.2133 42.6387C25.7304 43.646 27.6044 43.8059 33.7542 43.4244L36.1794 43.2619L37.9404 43.8903C40.9718 44.9652 42.7659 45.916 46.7357 48.5632C49.5411 50.4291 51.4909 51.4557 53.1692 51.9353C55.4718 52.6037 56.9489 52.6919 60.6129 52.393C63.8842 52.1175 65.8657 52.1203 70.406 52.4057C72.3985 52.516 75.3046 52.6057 76.8341 52.5837C80.268 52.5425 81.1016 52.5825 83.3284 52.9684C89.503 54.0337 95.5272 57.195 103.435 63.5131L105.738 65.35L108.059 64.7093C116.167 62.4773 123.67 59.4778 131.544 55.3635L134.971 53.5571L134.909 53.0073ZM119.772 39.3127C114.467 33.2688 110.664 29.6364 108.35 28.4224L107.635 28.0407L108.434 28.3108C109.517 28.6829 111.519 30.0375 113.098 31.4485C115.67 33.7691 118.012 36.379 121.428 40.7458C124.561 44.7503 124.41 44.6235 119.772 39.3127ZM1.86107 15.6356C0.902028 15.1946 0.875851 15.1767 1.58411 15.4C2.003 15.5405 2.55968 15.7831 2.80771 15.9374C3.42777 16.3232 3.13152 16.2282 1.86107 15.6356Z" fill="url(#paint0_linear_16_27)">
    </path>
    <defs>
      <linearGradient id="paint0_linear_16_27" x1="40.2231" y1="-13.6579" x2="116.323" y2="86.0298" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"></stop>
        <stop offset="0.999442" stop-color="#212121" stop-opacity="0.3"></stop>
      </linearGradient>
    </defs>
  </svg>
</div>
        </div>
        );

        export default Radio_kind;
        
        
         */
}
