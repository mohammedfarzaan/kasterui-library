import React from "react";
import styles from "./Button_drove.module.css";

const Button_drove = () => (
  <div>
    <button className={styles["Btn"]}>
      <svg viewBox="0 0 512 512" className="svgIcon" height="1em">
        <path d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"></path>
      </svg>
      <p className={styles["text"]}>COPY</p>
      <span className={styles["effect"]}></span>
    </button>
  </div>
);

export default Button_drove;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_drove = () => (
         <div>
          <button className="Btn">
  <svg viewBox="0 0 512 512" className="svgIcon" height="1em"><path d="M288 448H64V224h64V160H64c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64zm-64-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"></path></svg>
  <p className="text">COPY</p>
  <span className="effect"></span>
</button>
        </div>
        );

        export default Button_drove;
        
        
         */
}
