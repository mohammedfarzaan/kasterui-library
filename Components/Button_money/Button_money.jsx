import React from "react";
import styles from "./Button_money.module.css";

const Button_money = () => (
  <div>
    <button>
      <span className={styles["night"]}>Night</span>
      <span className={styles["day"]}>Day</span>
      <svg
        className={styles["lightning"]}
        style={{ color: "rgb(255, 228, 56)" }}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z"
          fill="#ffe438"
        ></path>
      </svg>
      <svg
        className={styles["mini-cloud"]}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"></path>
      </svg>
      <svg
        className={styles["stars"] + styles["star1"]}
        id="IconChangeColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        height="20"
        width="20"
      >
        <path
          d="M208,512,155.62,372.38,16,320l139.62-52.38L208,128l52.38,139.62L400,320,260.38,372.38Z"
          id="mainIconPathAttribute"
          fill="yellow"
        ></path>
        <path
          d="M88,176,64.43,111.57,0,88,64.43,64.43,88,0l23.57,64.43L176,88l-64.43,23.57Z"
          id="mainIconPathAttribute"
          fill="yellow"
        ></path>
        <path
          d="M400,256l-31.11-80.89L288,144l80.89-31.11L400,32l31.11,80.89L512,144l-80.89,31.11Z"
          id="mainIconPathAttribute"
          fill="yellow"
        ></path>
      </svg>
      <svg
        className={styles["stars"] + styles["star2"]}
        id="IconChangeColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        height="20"
        width="20"
      >
        <path
          d="M208,512,155.62,372.38,16,320l139.62-52.38L208,128l52.38,139.62L400,320,260.38,372.38Z"
          id="mainIconPathAttribute"
          fill="yellow"
        ></path>
        <path
          d="M88,176,64.43,111.57,0,88,64.43,64.43,88,0l23.57,64.43L176,88l-64.43,23.57Z"
          id="mainIconPathAttribute"
          fill="yellow"
        ></path>
        <path
          d="M400,256l-31.11-80.89L288,144l80.89-31.11L400,32l31.11,80.89L512,144l-80.89,31.11Z"
          id="mainIconPathAttribute"
          fill="yellow"
        ></path>
      </svg>
      <span className={styles["cloud"] + styles["left-side"]}></span>
      <span className={styles["cloud"] + styles["left-side1"]}></span>
      <span className={styles["cloud"] + styles["middle-side"]}></span>
      <span className={styles["cloud"] + styles["middle-side1"]}></span>
      <span className={styles["cloud"] + styles["right-side"]}></span>
      <span className={styles["cloud"] + styles["right-side1"]}></span>
      <span className={styles["sun"]}></span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className={styles["sunshine"]}
      >
        <path d="M0 0h256v256H0z" fill="none"></path>
        <path
          className={styles["stroke-000000"]}
          d="M128 32v32M195.9 60.1l-22.6 22.6M224 128h-32M195.9 195.9l-22.6-22.6M128 224v-32M60.1 195.9l22.6-22.6M32 128h32M60.1 60.1l22.6 22.6"
          strokeWidth="8"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="#fe8a1e"
          fill="none"
        ></path>
      </svg>
      <svg
        viewBox="0 0 16 16"
        fill="currentColor"
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: "rgb(92, 236, 255)" }}
        className={styles["cloudflare"] + styles["cloudflare-one"]}
      >
        <path
          fill="#5cecff"
          d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
        ></path>
      </svg>
      <svg
        viewBox="0 0 16 16"
        fill="currentColor"
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: "rgb(92, 236, 255)" }}
        className={styles["cloudflare"] + styles["cloudflare-two"]}
      >
        <path
          fill="#5cecff"
          d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
        ></path>
      </svg>
      <svg
        viewBox="0 0 16 16"
        fill="currentColor"
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: "rgb(92, 236, 255)" }}
        className={styles["cloudflare"] + styles["cloudflare-three"]}
      >
        <path
          fill="#5cecff"
          d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_money;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_money = () => (
         <div>
          <button>
  <span className="night">Night</span>
  <span className="day">Day</span>
    <svg className="lightning" style={{color:"rgb(255, 228, 56)"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5z" fill="#ffe438"></path> 
    </svg>
    <svg className="mini-cloud" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> 
      <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"></path>
    </svg>
    <svg className="stars star1" id="IconChangeColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="20" width="20">
      <path d="M208,512,155.62,372.38,16,320l139.62-52.38L208,128l52.38,139.62L400,320,260.38,372.38Z" id="mainIconPathAttribute" fill="yellow"></path>
      <path d="M88,176,64.43,111.57,0,88,64.43,64.43,88,0l23.57,64.43L176,88l-64.43,23.57Z" id="mainIconPathAttribute" fill="yellow"></path>
      <path d="M400,256l-31.11-80.89L288,144l80.89-31.11L400,32l31.11,80.89L512,144l-80.89,31.11Z" id="mainIconPathAttribute" fill="yellow"></path>
    </svg>
    <svg className="stars star2" id="IconChangeColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="20" width="20">
      <path d="M208,512,155.62,372.38,16,320l139.62-52.38L208,128l52.38,139.62L400,320,260.38,372.38Z" id="mainIconPathAttribute" fill="yellow"></path>
      <path d="M88,176,64.43,111.57,0,88,64.43,64.43,88,0l23.57,64.43L176,88l-64.43,23.57Z" id="mainIconPathAttribute" fill="yellow"></path>
      <path d="M400,256l-31.11-80.89L288,144l80.89-31.11L400,32l31.11,80.89L512,144l-80.89,31.11Z" id="mainIconPathAttribute" fill="yellow"></path>
    </svg>
  <span className="cloud left-side"></span>
  <span className="cloud left-side1"></span>
  <span className="cloud middle-side"></span>
  <span className="cloud middle-side1"></span>
  <span className="cloud right-side"></span>
  <span className="cloud right-side1"></span>
  <span className="sun"></span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="sunshine">
    <path d="M0 0h256v256H0z" fill="none"></path>
    <path className="stroke-000000" d="M128 32v32M195.9 60.1l-22.6 22.6M224 128h-32M195.9 195.9l-22.6-22.6M128 224v-32M60.1 195.9l22.6-22.6M32 128h32M60.1 60.1l22.6 22.6" strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" stroke="#fe8a1e" fill="none">
    </path>
  </svg>
  <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style={{color:"rgb(92, 236, 255)"}} className="cloudflare cloudflare-one">
    <path fill="#5cecff" d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"></path>
  </svg>
  <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style={{color:"rgb(92, 236, 255)"}} className="cloudflare cloudflare-two">
    <path fill="#5cecff" d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"></path>
  </svg>
  <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" style={{color:"rgb(92, 236, 255)"}} className="cloudflare cloudflare-three">
    <path fill="#5cecff" d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"></path>
  </svg>
</button>
        </div>
        );

        export default Button_money;
        
        
         */
}
