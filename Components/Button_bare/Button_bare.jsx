import React from "react";
import styles from "./Button_bare.module.css";

const Button_bare = () => (
  <div>
    <div className={styles["main-section"]}>
      <button className={styles["first-button"]}> Hover Me </button>
      <button className={styles["second-button"]}>
        {" "}
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          stroke="#ffd300"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="css-i6dzq1"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>{" "}
        Add To Cart
      </button>
    </div>
  </div>
);

export default Button_bare;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_bare = () => (
         <div>
          <div className="main-section">
  <button className="first-button"> Hover Me </button>
  <button className="second-button"> <svg viewBox="0 0 24 24" width="20" height="20" stroke="#ffd300" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg> Add To Cart</button>
</div>
        </div>
        );

        export default Button_bare;
        
        
         */
}
