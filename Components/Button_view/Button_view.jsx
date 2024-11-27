import React from "react";
import styles from "./Button_view.module.css";

const Button_view = () => (
  <div>
    <button>
      <span className={styles["circle1"]}></span>
      <span className={styles["circle2"]}></span>
      <span className={styles["circle3"]}></span>
      <span className={styles["circle4"]}></span>
      <span className={styles["circle5"]}></span>
      <span className={styles["text"]}>Submit</span>
    </button>
  </div>
);

export default Button_view;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_view = () => (
         <div>
          <button>
    <span className="circle1"></span>
    <span className="circle2"></span>
    <span className="circle3"></span>
    <span className="circle4"></span>
    <span className="circle5"></span>
    <span className="text">Submit</span>
</button>
        </div>
        );

        export default Button_view;
        
        
         */
}
