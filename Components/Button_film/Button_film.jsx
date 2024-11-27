import React from "react";
import styles from "./Button_film.module.css";

const Button_film = () => (
  <div>
    <button className={styles["button"] + styles["type1"]}>
      <span className={styles["btn-txt"]}>Hello</span>
    </button>
  </div>
);

export default Button_film;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_film = () => (
         <div>
          <button className="button type1">
  <span className="btn-txt">Hello</span>
</button>
        </div>
        );

        export default Button_film;
        
        
         */
}
