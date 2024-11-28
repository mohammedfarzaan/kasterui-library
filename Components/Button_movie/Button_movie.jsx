import React from "react";
import styles from "./Button_movie.module.css";

const Button_movie = () => (
  <div>
    <div className={styles["mybutton"]}>
      <button className={styles["button"]} type="button">
        <span>Hello 😊</span>
      </button>
    </div>
  </div>
);

export default Button_movie;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_movie = () => (
         <div>
          <div className="mybutton">
<button className="button" type="button">
   <span>Hello 😊</span>
</button>
</div>
        </div>
        );

        export default Button_movie;
        
        
         */
}
