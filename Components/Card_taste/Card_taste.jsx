import React from "react";
import styles from "./Card_taste.module.css";

const Card_taste = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["palette"]}>
        <div className={styles["color"]}>
          <span>264653</span>
        </div>
        <div className={styles["color"]}>
          <span>2A9D8F</span>
        </div>
        <div className={styles["color"]}>
          <span>E9C46A</span>
        </div>
        <div className={styles["color"]}>
          <span>F4A261</span>
        </div>
        <div className={styles["color"]}>
          <span>E76F51</span>
        </div>
      </div>
      <div id="stats">
        <span>53421 saves</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path d="M4 7.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S5.5 9.83 5.5 9 4.83 7.5 4 7.5zm10 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S9.83 7.5 9 7.5z"></path>
        </svg>
      </div>
    </div>
  </div>
);

export default Card_taste;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_taste = () => (
         <div>
          <div className="container">
  <div className="palette">
    <div className="color"><span>264653</span></div>
    <div className="color"><span>2A9D8F</span></div>
    <div className="color"><span>E9C46A</span></div>
    <div className="color"><span>F4A261</span></div>
    <div className="color"><span>E76F51</span></div>
  </div>
  <div id="stats">
    <span>53421 saves</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
      <path d="M4 7.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S5.5 9.83 5.5 9 4.83 7.5 4 7.5zm10 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S9.83 7.5 9 7.5z"></path>
    </svg>
  </div>
</div>
        </div>
        );

        export default Card_taste;
        
        
         */
}
