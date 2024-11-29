import React from "react";
import styles from "./Button_thus.module.css";

const Button_thus = () => (
  <div>
    <button className={styles["button-with-icon"]}>
      <svg
        className={styles["icon"]}
        id="Play"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={styles["color000000"] + styles["svgShape"]}
          fill="#ffffff"
          d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"
        ></path>
      </svg>
      <span className={styles["text"]}>Play</span>
    </button>
  </div>
);

export default Button_thus;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_thus = () => (
         <div>
          <button className="button-with-icon">
  <svg
    className="icon"
    id="Play"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="color000000 svgShape"
      fill="#ffffff"
      d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z"
    ></path>
  </svg>
  <span className="text">Play</span>
</button>
        </div>
        );

        export default Button_thus;
        
        
         */
}
