import React from "react";
import styles from "./Button_poem.module.css";

const Button_poem = () => (
  <div>
    <button className={styles["button"]}>
      <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
        <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM128,72a12,12,0,1,0-12-12A12,12,0,0,0,128,72Zm0,112a12,12,0,1,0,12,12A12,12,0,0,0,128,184Z"></path>
      </svg>
    </button>
  </div>
);

export default Button_poem;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_poem = () => (
         <div>
          <button className="button">
  <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
  <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM128,72a12,12,0,1,0-12-12A12,12,0,0,0,128,72Zm0,112a12,12,0,1,0,12,12A12,12,0,0,0,128,184Z"></path></svg>
</button>
        </div>
        );

        export default Button_poem;
        
        
         */
}
