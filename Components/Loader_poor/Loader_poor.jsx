import React from "react";
import styles from "./Loader_poor.module.css";

const Loader_poor = () => (
  <div>
    <div className={styles["loader"]}>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <path
            fill="#470BA9"
            d="M158 77c6 23-8 48-28 63-21 16-49 21-68 8-19-12-28-43-20-68s33-45 58-45c26 0 52 20 58 42z"
          ></path>
        </svg>
      </span>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <path
            fill="#470BA9"
            d="M158 77c6 23-8 48-28 63-21 16-49 21-68 8-19-12-28-43-20-68s33-45 58-45c26 0 52 20 58 42z"
          ></path>
        </svg>
      </span>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
          <path
            fill="#470BA9"
            d="M158 77c6 23-8 48-28 63-21 16-49 21-68 8-19-12-28-43-20-68s33-45 58-45c26 0 52 20 58 42z"
          ></path>
        </svg>
      </span>
    </div>
  </div>
);

export default Loader_poor;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_poor = () => (
         <div>
          <div className="loader">
    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <path fill="#470BA9" d="M158 77c6 23-8 48-28 63-21 16-49 21-68 8-19-12-28-43-20-68s33-45 58-45c26 0 52 20 58 42z"></path>
        </svg></span>
    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <path fill="#470BA9" d="M158 77c6 23-8 48-28 63-21 16-49 21-68 8-19-12-28-43-20-68s33-45 58-45c26 0 52 20 58 42z"></path>
        </svg></span>
    <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
            <path fill="#470BA9" d="M158 77c6 23-8 48-28 63-21 16-49 21-68 8-19-12-28-43-20-68s33-45 58-45c26 0 52 20 58 42z"></path>
        </svg></span>
</div>
        </div>
        );

        export default Loader_poor;
        
        
         */
}
