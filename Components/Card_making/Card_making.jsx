import React from "react";
import styles from "./Card_making.module.css";

const Card_making = () => (
  <div>
    <div className={styles["results-summary-container"]}>
      <div className={styles["confetti"]}>
        <div className={styles["confetti-piece"]}></div>
        <div className={styles["confetti-piece"]}></div>
        <div className={styles["confetti-piece"]}></div>
        <div className={styles["confetti-piece"]}></div>
        <div className={styles["confetti-piece"]}></div>
        <div className={styles["confetti-piece"]}></div>
        <div className={styles["confetti-piece"]}></div>
        <div className={styles["confetti-piece"]}></div>
        <div className={styles["confetti-piece"]}></div>
        <div className={styles["confetti-piece"]}></div>
        <div className={styles["confetti-piece"]}></div>
        <div className={styles["confetti-piece"]}></div>
        <div className={styles["confetti-piece"]}></div>
        <div className={styles["confetti-piece"]}></div>
        <div className={styles["confetti-piece"]}></div>
        <div className={styles["confetti-piece"]}></div>
        <div className={styles["confetti-piece"]}></div>
        <div className={styles["confetti-piece"]}></div>
        <div className={styles["confetti-piece"]}></div>
      </div>
      <div className={styles["results-summary-container__result"]}>
        <div className={styles["heading-tertiary"]}>Your Result</div>
        <div className={styles["result-box"]}>
          <div className={styles["heading-primary"]}>78</div>
          <p className={styles["result"]}>of 100</p>
        </div>
        <div className={styles["result-text-box"]}>
          <div className={styles["heading-secondary"]}>excellent</div>
          <p className={styles["paragraph"]}>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className={styles["summary__cta"]}>
          <button className={styles["btn"] + styles["btn__continue"]}>
            Continue
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Card_making;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_making = () => (
         <div>
          <div className="results-summary-container">
      <div className="confetti">
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
        <div className="confetti-piece"></div>
      </div>
      <div className="results-summary-container__result">
        <div className="heading-tertiary">Your Result</div>
        <div className="result-box">
          <div className="heading-primary">78</div>
          <p className="result">of 100</p>
        </div>
        <div className="result-text-box">
          <div className="heading-secondary">excellent</div>
          <p className="paragraph">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <div className="summary__cta">
          <button className="btn btn__continue">Continue 
        </button>
        </div>
      </div>
    </div>
        </div>
        );

        export default Card_making;
        
        
         */
}
