import React from "react";
import styles from "./Button_break.module.css";

const Button_break = () => (
  <div>
    <div className={styles["main"]}>
      <div className={styles["buttons"]}>
        <div className={styles["button_pair"]}>
          <div className={styles["btn"]}>
            <button className={styles["button1"]}>
              <svg
                viewBox="0 -960 960 960"
                className="svg1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M200-440v-80h560v80H200Z"></path>
              </svg>
            </button>
          </div>
          <div className={styles["btn"]}>
            <button className={styles["button2"]}>
              <svg
                viewBox="0 -960 960 960"
                xmlns="http://www.w3.org/2000/svg"
                className="svg2"
              >
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={styles["button_pair"]}>
          <div className={styles["btn"]}>
            <button className={styles["button3"]}>
              <span className={styles["button_text"]}>RECORD</span>
            </button>
          </div>
          <div className={styles["btn"]}>
            <button className={styles["button4"]}>
              <span className={styles["button_text"]}>PLAY</span>
            </button>
          </div>
        </div>
      </div>
      <div className={styles["text"]}>
        Teenage Engineering [EP-133 K.O. II] - Buttons
      </div>
    </div>
  </div>
);

export default Button_break;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_break = () => (
         <div>
          <div className="main">
  <div className="buttons">
    <div className="button_pair">
      <div className="btn">
        <button className="button1">
          <svg
            viewBox="0 -960 960 960"
            className="svg1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M200-440v-80h560v80H200Z"></path>
          </svg>
        </button>
      </div>
      <div className="btn">
        <button className="button2">
          <svg
            viewBox="0 -960 960 960"
            xmlns="http://www.w3.org/2000/svg"
            className="svg2"
          >
            <path
              d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div className="button_pair">
      <div className="btn">
        <button className="button3">
          <span className="button_text">RECORD</span>
        </button>
      </div>
      <div className="btn">
        <button className="button4">
          <span className="button_text">PLAY</span>
        </button>
      </div>
    </div>
  </div>
  <div className="text">Teenage Engineering [EP-133 K.O. II] - Buttons</div>
</div>
        </div>
        );

        export default Button_break;
        
        
         */
}
