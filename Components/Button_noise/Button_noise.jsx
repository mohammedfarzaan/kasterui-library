import React from "react";
import styles from "./Button_noise.module.css";

const Button_noise = () => (
  <div>
    <div className={styles["container"]}>
      <button className={styles["btn"]}>
        <div className={styles["btn-text"] + styles["default"]}>EXPLORE..</div>
        <div className={styles["btn-text"] + styles["active"]}>LAUNCH..</div>
        <div className={styles["spaceship1"]}>
          <svg
            viewBox="0 0 24 24"
            height="22"
            width="22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.88 18.054a35.897 35.897 0 0 1 8.531-16.32a.8.8 0 0 1 1.178 0c.166.18.304.332.413.455a35.897 35.897 0 0 1 8.118 15.865c-2.141.451-4.34.747-6.584.874l-2.089 4.178a.5.5 0 0 1-.894 0l-2.089-4.178a44.019 44.019 0 0 1-6.584-.874zM12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className={styles["spaceship2"]}>
          <svg
            viewBox="0 0 24 24"
            height="18"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.88 18.054a35.897 35.897 0 0 1 8.531-16.32a.8.8 0 0 1 1.178 0c.166.18.304.332.413.455a35.897 35.897 0 0 1 8.118 15.865c-2.141.451-4.34.747-6.584.874l-2.089 4.178a.5.5 0 0 1-.894 0l-2.089-4.178a44.019 44.019 0 0 1-6.584-.874zM12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </button>
      <div className={styles["spaceship3"]}>
        <svg
          viewBox="0 0 24 24"
          height="40"
          width="40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.88 18.054a35.897 35.897 0 0 1 8.531-16.32a.8.8 0 0 1 1.178 0c.166.18.304.332.413.455a35.897 35.897 0 0 1 8.118 15.865c-2.141.451-4.34.747-6.584.874l-2.089 4.178a.5.5 0 0 1-.894 0l-2.089-4.178a44.019 44.019 0 0 1-6.584-.874zM12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  </div>
);

export default Button_noise;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_noise = () => (
         <div>
          <div className="container">
        <button className="btn">
          <div className="btn-text default">EXPLORE..</div>
          <div className="btn-text active">LAUNCH..</div>
          <div className="spaceship1">
            <svg viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.88 18.054a35.897 35.897 0 0 1 8.531-16.32a.8.8 0 0 1 1.178 0c.166.18.304.332.413.455a35.897 35.897 0 0 1 8.118 15.865c-2.141.451-4.34.747-6.584.874l-2.089 4.178a.5.5 0 0 1-.894 0l-2.089-4.178a44.019 44.019 0 0 1-6.584-.874zM12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6z" fill="currentColor"></path>
            </svg>
          </div>
          <div className="spaceship2">
            <svg viewBox="0 0 24 24" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.88 18.054a35.897 35.897 0 0 1 8.531-16.32a.8.8 0 0 1 1.178 0c.166.18.304.332.413.455a35.897 35.897 0 0 1 8.118 15.865c-2.141.451-4.34.747-6.584.874l-2.089 4.178a.5.5 0 0 1-.894 0l-2.089-4.178a44.019 44.019 0 0 1-6.584-.874zM12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6z" fill="currentColor"></path>
            </svg>
          </div>
        </button>
        <div className="spaceship3">
            <svg viewBox="0 0 24 24" height="40" width="40" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.88 18.054a35.897 35.897 0 0 1 8.531-16.32a.8.8 0 0 1 1.178 0c.166.18.304.332.413.455a35.897 35.897 0 0 1 8.118 15.865c-2.141.451-4.34.747-6.584.874l-2.089 4.178a.5.5 0 0 1-.894 0l-2.089-4.178a44.019 44.019 0 0 1-6.584-.874zM12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6z" fill="currentColor"></path>
            </svg>
        </div>
    </div>
        </div>
        );

        export default Button_noise;
        
        
         */
}
