import React from "react";
import styles from "./Button_hunter.module.css";

const Button_hunter = () => (
  <div>
    <button>
      <span className={styles["main-text"]}>
        Next Step
        <span>
          {" "}
          <span>→</span>{" "}
        </span>
      </span>
    </button>
  </div>
);

export default Button_hunter;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_hunter = () => (
         <div>
          <button><span className="main-text">Next Step<span> <span>→</span> </span></span></button>
        </div>
        );

        export default Button_hunter;
        
        
         */
}
