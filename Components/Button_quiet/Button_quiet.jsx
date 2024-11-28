import React from "react";
import styles from "./Button_quiet.module.css";

const Button_quiet = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["border"]}>
        <div className={styles["outer"]}>
          <div className={styles["inner"]}>
            <svg
              className="icon"
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_253_3447)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.8417 5.93711C23.5329 3.62302 21.377 1.46711 19.0629 2.15834L5.19469 6.30079C2.9915 6.95888 2.29064 9.7318 3.91654 11.3577L5.29411 12.7353C6.54198 13.9831 8.43704 14.3033 10.0203 13.5481L14.8037 8.76481C15.199 8.36951 15.8399 8.36951 16.2352 8.76481C16.6305 9.16011 16.6305 9.80102 16.2352 10.1963L11.4519 14.9797C10.6967 16.563 11.0169 18.458 12.2647 19.7059L13.6423 21.0835C15.2682 22.7094 18.0411 22.0085 18.6992 19.8053L22.8417 5.93711ZM9.08131 15.9187C7.20189 16.1789 5.25956 15.5637 3.8626 14.1668L2.48504 12.7892C-0.224811 10.0794 0.943288 5.45784 4.61528 4.36102L18.4835 0.218565C22.3403 -0.933473 25.9335 2.65971 24.7814 6.51653L20.639 20.3847C19.5422 24.0567 14.9206 25.2248 12.2108 22.515L10.8332 21.1374C9.43626 19.7404 8.82111 17.7981 9.08131 15.9187Z"
                  fill="#171717"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_d_253_3447"
                  x="0"
                  y="0"
                  width="26"
                  height="26"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  ></feColorMatrix>
                  <feOffset dy="1"></feOffset>
                  <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                  <feComposite in2="hardAlpha" operator="out"></feComposite>
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  ></feColorMatrix>
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_253_3447"
                  ></feBlend>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_253_3447"
                    result="shape"
                  ></feBlend>
                </filter>
              </defs>
            </svg>
            <span>Send Message</span>
          </div>
        </div>
      </div>
    </button>
  </div>
);

export default Button_quiet;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_quiet = () => (
         <div>
          <button className="button">
  <div className="border">
    <div className="outer">
      <div className="inner">
        <svg
          className="icon"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_253_3447)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.8417 5.93711C23.5329 3.62302 21.377 1.46711 19.0629 2.15834L5.19469 6.30079C2.9915 6.95888 2.29064 9.7318 3.91654 11.3577L5.29411 12.7353C6.54198 13.9831 8.43704 14.3033 10.0203 13.5481L14.8037 8.76481C15.199 8.36951 15.8399 8.36951 16.2352 8.76481C16.6305 9.16011 16.6305 9.80102 16.2352 10.1963L11.4519 14.9797C10.6967 16.563 11.0169 18.458 12.2647 19.7059L13.6423 21.0835C15.2682 22.7094 18.0411 22.0085 18.6992 19.8053L22.8417 5.93711ZM9.08131 15.9187C7.20189 16.1789 5.25956 15.5637 3.8626 14.1668L2.48504 12.7892C-0.224811 10.0794 0.943288 5.45784 4.61528 4.36102L18.4835 0.218565C22.3403 -0.933473 25.9335 2.65971 24.7814 6.51653L20.639 20.3847C19.5422 24.0567 14.9206 25.2248 12.2108 22.515L10.8332 21.1374C9.43626 19.7404 8.82111 17.7981 9.08131 15.9187Z"
              fill="#171717"
            ></path>
          </g>
          <defs>
            <filter
              id="filter0_d_253_3447"
              x="0"
              y="0"
              width="26"
              height="26"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              ></feColorMatrix>
              <feOffset dy="1"></feOffset>
              <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
              <feComposite in2="hardAlpha" operator="out"></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_253_3447"
              ></feBlend>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_253_3447"
                result="shape"
              ></feBlend>
            </filter>
          </defs>
        </svg>
        <span>Send Message</span>
      </div>
    </div>
  </div>
</button>
        </div>
        );

        export default Button_quiet;
        
        
         */
}
