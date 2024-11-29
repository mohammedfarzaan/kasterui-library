import React from "react";
import styles from "./Card_aloud.module.css";

const Card_aloud = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["bg"] + styles["uwu"]}></div>
      <div className={styles["bg"]}></div>
      <div className={styles["content"]}>
        <div className={styles["img"]}>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></path>
          </svg>
        </div>
        <div className={styles["h1"]}>
          Johnathon
          <br />
          F. Stag
        </div>
        <div className={styles["p"]}>
          Professional human
          <p>I do human things such as exist, eat foot, and work.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Card_aloud;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_aloud = () => (
         <div>
          <div className="card">
      <div className="bg uwu"></div>
      <div className="bg"></div>
      <div className="content">
            <div className="img">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></path></svg>
            </div>
            <div className="h1">
                  Johnathon<br />F. Stag
            </div>
            <div className="p">
                  Professional human
                  <p>
                        I do human things such as exist, eat foot, and work.
                  </p>
            </div>
      </div>
</div>
        </div>
        );

        export default Card_aloud;
        
        
         */
}
