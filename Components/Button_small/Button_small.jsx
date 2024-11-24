import React from "react";
import styles from "./Button_small.module.css";

const Button_small = () => (
  <div>
    <button>
      <svg
        className={styles["css-i6dzq1"]}
        stroke-linejoin="round"
        stroke-linecap="round"
        fill="none"
        stroke-width="2"
        stroke="#FFFFFF"
        height="24"
        width="24"
        viewBox="0 0 24 24"
      >
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
      </svg>
      Edit
    </button>
  </div>
);

export default Button_small;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_small = () => (
         <div>
          <button>
    <svg className="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="#FFFFFF" height="24" width="24" viewBox="0 0 24 24">
        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </svg>
    Edit
</button>
        </div>
        );

        export default Button_small;
        
        
         */
}
