import React from "react";
import styles from "./Button_pound.module.css";

const Button_pound = () => (
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

export default Button_pound;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_pound = () => (
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

        export default Button_pound;
        
        
         */
}
