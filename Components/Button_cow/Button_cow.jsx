import React from "react";
import styles from "./Button_cow.module.css";

const Button_cow = () => (
  <div>
    <button>
      <div className={styles["default-btn"]}>
        <svg
          className={styles["css-i6dzq1"]}
          stroke-linejoin="round"
          stroke-linecap="round"
          fill="none"
          stroke-width="2"
          stroke="#FFF"
          height="20"
          width="20"
          viewBox="0 0 24 24"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle r="3" cy="12" cx="12"></circle>
        </svg>
        <span>Quick View</span>
      </div>
      <div className={styles["hover-btn"]}>
        <svg
          className={styles["css-i6dzq1"]}
          stroke-linejoin="round"
          stroke-linecap="round"
          fill="none"
          stroke-width="2"
          stroke="#ffd300"
          height="20"
          width="20"
          viewBox="0 0 24 24"
        >
          <circle r="1" cy="21" cx="9"></circle>
          <circle r="1" cy="21" cx="20"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <span>Shop Now</span>
      </div>
    </button>
  </div>
);

export default Button_cow;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_cow = () => (
         <div>
          <button>
  <div className="default-btn">
    <svg className="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFF" height="20" width="20" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle r="3" cy="12" cx="12"></circle></svg>
    <span>Quick View</span>
  </div>
  <div className="hover-btn">
    <svg className="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#ffd300" height="20" width="20" viewBox="0 0 24 24"><circle r="1" cy="21" cx="9"></circle><circle r="1" cy="21" cx="20"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
    <span>Shop Now</span>
  </div>
</button>
        </div>
        );

        export default Button_cow;
        
        
         */
}
