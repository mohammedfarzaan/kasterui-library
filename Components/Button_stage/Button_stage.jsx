import React from "react";
import styles from "./Button_stage.module.css";

const Button_stage = () => (
  <div>
    <div className={styles["main"]}>
      <div className={styles["buttons"]}>
        <div className={styles["button_pair"]}>
          <div className={styles["btn"]}>
            <button className={styles["button1"]}>
              <svg
                viewBox="0 -960 960 960"
                className={styles["svg1"]}
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
                className={styles["svg2"]}
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

export default Button_stage;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_stage = () => (
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

        export default Button_stage;
        
        
         */
}
