import React from "react";
import styles from "./Button_season.module.css";

const Button_season = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        id="UploadToCloud"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        height="16px"
        width="16px"
        className="icon"
      >
        <path d="M0 0h24v24H0V0z" fill="none"></path>
        <path
          className="color000000 svgShape"
          fill="#000000"
          d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l4.65-4.65c.2-.2.51-.2.71 0L17 13h-3z"
        ></path>
      </svg>
      Upload CV
    </button>
  </div>
);

export default Button_season;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_season = () => (
         <div>
          <button className="button">
  <svg
    id="UploadToCloud"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    height="16px"
    width="16px"
    className="icon"
  >
    <path d="M0 0h24v24H0V0z" fill="none"></path>
    <path
      className="color000000 svgShape"
      fill="#000000"
      d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l4.65-4.65c.2-.2.51-.2.71 0L17 13h-3z"
    ></path>
  </svg>
  Upload CV
</button>
        </div>
        );

        export default Button_season;
        
        
         */
}
