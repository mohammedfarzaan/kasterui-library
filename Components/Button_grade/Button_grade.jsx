import React from "react";
import styles from "./Button_grade.module.css";

const Button_grade = () => (
  <div>
    <button className={styles["button"]}>
      <p className={styles["submit"]}>submit</p>
    </button>
  </div>
);

export default Button_grade;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_grade = () => (
         <div>
          <button className="button">
<p className="submit">submit</p>

</button>
        </div>
        );

        export default Button_grade;
        
        
         */
}
