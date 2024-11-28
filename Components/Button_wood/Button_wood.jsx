import React from "react";
import styles from "./Button_wood.module.css";

const Button_wood = () => (
  <div>
    <button className={styles["Btn"]}>
      <div className={styles["sign"]}>+</div>

      <div className={styles["text"]}>Create</div>
    </button>
  </div>
);

export default Button_wood;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_wood = () => (
         <div>
          <button className="Btn">
  
  <div className="sign">+</div>
  
  <div className="text">Create</div>
</button>
        </div>
        );

        export default Button_wood;
        
        
         */
}
