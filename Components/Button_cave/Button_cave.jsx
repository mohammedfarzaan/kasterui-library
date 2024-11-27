import React from "react";
import styles from "./Button_cave.module.css";

const Button_cave = () => (
  <div>
    <button className={styles["button"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 97 162"
        height="162"
        width="97"
        className="svg"
      >
        <path
          fill="#262626"
          d="M47.2124 0H54.0796V151.644L86.6991 128.712H97L50.646 162L0 128.712H10.3009L47.2124 151.644V0Z"
        ></path>
      </svg>
    </button>
  </div>
);

export default Button_cave;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_cave = () => (
         <div>
          <button className="button">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 97 162" height="162" width="97" className="svg">
<path fill="#262626" d="M47.2124 0H54.0796V151.644L86.6991 128.712H97L50.646 162L0 128.712H10.3009L47.2124 151.644V0Z"></path>
</svg>

</button>
        </div>
        );

        export default Button_cave;
        
        
         */
}
