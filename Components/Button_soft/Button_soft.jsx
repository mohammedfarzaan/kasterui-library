import React from "react";
import styles from "./Button_soft.module.css";

const Button_soft = () => (
  <div>
    <button className={styles["button"]}>
      <div className={styles["inner"]}>
        <div className={styles["roundInner"]}>
          <svg
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m5 12l-.604-5.437C4.223 5.007 5.825 3.864 7.24 4.535l11.944 5.658c1.525.722 1.525 2.892 0 3.614L7.24 19.466c-1.415.67-3.017-.472-2.844-2.028zm0 0h7"
            ></path>
          </svg>
          Send Message
        </div>
      </div>
    </button>
  </div>
);

export default Button_soft;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_soft = () => (
         <div>
          <button className="button">
  <div className="inner">
    <div className="roundInner">
      <svg
        className="svg"
        xmlns="http://www.w3.org/2000/svg"
        width="1.3em"
        height="1.3em"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="m5 12l-.604-5.437C4.223 5.007 5.825 3.864 7.24 4.535l11.944 5.658c1.525.722 1.525 2.892 0 3.614L7.24 19.466c-1.415.67-3.017-.472-2.844-2.028zm0 0h7"
        ></path>
      </svg>
      Send Message
    </div>
  </div>
</button>
        </div>
        );

        export default Button_soft;
        
        
         */
}
