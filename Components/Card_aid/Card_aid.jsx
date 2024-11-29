import React from "react";
import styles from "./Card_aid.module.css";

const Card_aid = () => (
  <div>
    <div className={styles["login-card"]}>
      <button className={styles["normal-signin"]}>Sign in</button>
      <div className={styles["instruction-text"]}>Don't have an Account?</div>
      <button className={styles["create-account"]}>Create Account</button>
      <div className={styles["instruction-text"]}>Or sign in with</div>
      <div className={styles["alternate-login"]}>
        <button className={styles["m-sign"]}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H11.5V11.5H4V4ZM12.5 4H20V11.5H12.5V4ZM4 12.5H11.5V20H4V12.5ZM12.5 12.5H20V20H12.5V12.5Z"></path>
          </svg>
        </button>
        <button className={styles["g-sign"]}>
          <svg
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-300.000000, -7399.000000)"
              >
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path
                    d="M263.821537,7247.00386 L254.211298,7247.00386 C254.211298,7248.0033 254.211298,7250.00218 254.205172,7251.00161 L259.774046,7251.00161 C259.560644,7252.00105 258.804036,7253.40026 257.734984,7254.10487 C257.733963,7254.10387 257.732942,7254.11086 257.7309,7254.10986 C256.309581,7255.04834 254.43389,7255.26122 253.041161,7254.98137 C250.85813,7254.54762 249.130492,7252.96451 248.429023,7250.95364 C248.433107,7250.95064 248.43617,7250.92266 248.439233,7250.92066 C248.000176,7249.67336 248.000176,7248.0033 248.439233,7247.00386 L248.438212,7247.00386 C249.003881,7245.1669 250.783592,7243.49084 252.969687,7243.0321 C254.727956,7242.65931 256.71188,7243.06308 258.170978,7244.42831 C258.36498,7244.23842 260.856372,7241.80579 261.043226,7241.6079 C256.0584,7237.09344 248.076756,7238.68155 245.090149,7244.51127 L245.089128,7244.51127 C245.089128,7244.51127 245.090149,7244.51127 245.084023,7244.52226 L245.084023,7244.52226 C243.606545,7247.38565 243.667809,7250.75975 245.094233,7253.48622 C245.090149,7253.48921 245.087086,7253.49121 245.084023,7253.49421 C246.376687,7256.0028 248.729215,7257.92672 251.563684,7258.6593 C254.574796,7259.44886 258.406843,7258.90916 260.973794,7256.58747 C260.974815,7256.58847 260.975836,7256.58947 260.976857,7256.59047 C263.15172,7254.63157 264.505648,7251.29445 263.821537,7247.00386"
                    id="google-[#178]"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </button>
        <button className={styles["a-sign"]}>
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="-145 129 220 256"
            xml:space="preserve"
          >
            <path
              d="M75,316.8c-6,13.3-8.9,19.3-16.6,31c-10.8,16.4-26,36.9-44.9,37.1c-16.8,0.2-21.1-10.9-43.8-10.8
	c-22.7,0.1-27.5,11-44.3,10.8c-18.9-0.2-33.3-18.7-44.1-35.1c-30.2-46-33.4-99.9-14.7-128.6c13.2-20.4,34.1-32.3,53.8-32.3
	c20,0,32.5,11,49.1,11c16,0,25.8-11,48.9-11c17.5,0,36,9.5,49.2,26C24.3,238.6,31.3,300.3,75,316.8L75,316.8z M0.8,170.6
	c8.4-10.8,14.8-26,12.5-41.6c-13.7,0.9-29.8,9.7-39.1,21.1c-8.5,10.3-15.5,25.6-12.8,40.5C-23.7,191.1-8.2,182.1,0.8,170.6
	L0.8,170.6z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default Card_aid;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_aid = () => (
         <div>
          <div className="login-card">
  <button className="normal-signin">Sign in</button>
  <div className="instruction-text">Don't have an Account?</div>
  <button className="create-account">Create Account</button>
  <div className="instruction-text">Or sign in with</div>
  <div className="alternate-login">
    <button className="m-sign">
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H11.5V11.5H4V4ZM12.5 4H20V11.5H12.5V4ZM4 12.5H11.5V20H4V12.5ZM12.5 12.5H20V20H12.5V12.5Z"></path>
</svg>
    </button>
    <button className="g-sign">
      <svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7399.000000)">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M263.821537,7247.00386 L254.211298,7247.00386 C254.211298,7248.0033 254.211298,7250.00218 254.205172,7251.00161 L259.774046,7251.00161 C259.560644,7252.00105 258.804036,7253.40026 257.734984,7254.10487 C257.733963,7254.10387 257.732942,7254.11086 257.7309,7254.10986 C256.309581,7255.04834 254.43389,7255.26122 253.041161,7254.98137 C250.85813,7254.54762 249.130492,7252.96451 248.429023,7250.95364 C248.433107,7250.95064 248.43617,7250.92266 248.439233,7250.92066 C248.000176,7249.67336 248.000176,7248.0033 248.439233,7247.00386 L248.438212,7247.00386 C249.003881,7245.1669 250.783592,7243.49084 252.969687,7243.0321 C254.727956,7242.65931 256.71188,7243.06308 258.170978,7244.42831 C258.36498,7244.23842 260.856372,7241.80579 261.043226,7241.6079 C256.0584,7237.09344 248.076756,7238.68155 245.090149,7244.51127 L245.089128,7244.51127 C245.089128,7244.51127 245.090149,7244.51127 245.084023,7244.52226 L245.084023,7244.52226 C243.606545,7247.38565 243.667809,7250.75975 245.094233,7253.48622 C245.090149,7253.48921 245.087086,7253.49121 245.084023,7253.49421 C246.376687,7256.0028 248.729215,7257.92672 251.563684,7258.6593 C254.574796,7259.44886 258.406843,7258.90916 260.973794,7256.58747 C260.974815,7256.58847 260.975836,7256.58947 260.976857,7256.59047 C263.15172,7254.63157 264.505648,7251.29445 263.821537,7247.00386" id="google-[#178]">

</path>
            </g>
        </g>
    </g>
</svg>
    </button>
    <button className="a-sign">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-145 129 220 256" xml:space="preserve">
<path d="M75,316.8c-6,13.3-8.9,19.3-16.6,31c-10.8,16.4-26,36.9-44.9,37.1c-16.8,0.2-21.1-10.9-43.8-10.8
	c-22.7,0.1-27.5,11-44.3,10.8c-18.9-0.2-33.3-18.7-44.1-35.1c-30.2-46-33.4-99.9-14.7-128.6c13.2-20.4,34.1-32.3,53.8-32.3
	c20,0,32.5,11,49.1,11c16,0,25.8-11,48.9-11c17.5,0,36,9.5,49.2,26C24.3,238.6,31.3,300.3,75,316.8L75,316.8z M0.8,170.6
	c8.4-10.8,14.8-26,12.5-41.6c-13.7,0.9-29.8,9.7-39.1,21.1c-8.5,10.3-15.5,25.6-12.8,40.5C-23.7,191.1-8.2,182.1,0.8,170.6
	L0.8,170.6z"></path>
</svg>
    </button>
  </div>
</div>
        </div>
        );

        export default Card_aid;
        
        
         */
}
