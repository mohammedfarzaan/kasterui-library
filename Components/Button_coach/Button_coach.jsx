import React from "react";
import styles from "./Button_coach.module.css";

const Button_coach = () => (
  <div>
    <button className={styles["continue-application"]}>
      <div>
        <div className={styles["pencil"]}></div>
        <div className={styles["folder"]}>
          <div className={styles["top"]}>
            <svg viewBox="0 0 24 27">
              <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
            </svg>
          </div>
          <div className={styles["paper"]}></div>
        </div>
      </div>
      Continue Application
    </button>
  </div>
);

export default Button_coach;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_coach = () => (
         <div>
          <button className="continue-application">
    <div>
        <div className="pencil"></div>
        <div className="folder">
            <div className="top">
                <svg viewBox="0 0 24 27">
                    <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                </svg>
            </div>
            <div className="paper"></div>
        </div>
    </div>
    Continue Application
</button>
        </div>
        );

        export default Button_coach;
        
        
         */
}