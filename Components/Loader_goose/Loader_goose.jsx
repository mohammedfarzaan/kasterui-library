import React from "react";
import styles from "./Loader_goose.module.css";

const Loader_goose = () => (
  <div>
    <div className={styles["loader"]}>
      <svg
        viewBox="0 0 16 16"
        className="light bi bi-lightning-charge-fill"
        fill="currentColor"
        height="28"
        width="28"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path>
      </svg>
    </div>
  </div>
);

export default Loader_goose;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_goose = () => (
         <div>
          <div className="loader">
  <svg
    viewBox="0 0 16 16"
    className="light bi bi-lightning-charge-fill"
    fill="currentColor"
    height="28"
    width="28"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"
    ></path>
  </svg>
</div>
        </div>
        );

        export default Loader_goose;
        
        
         */
}
