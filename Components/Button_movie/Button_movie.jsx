import React from "react";
import styles from "./Button_movie.module.css";

const Button_movie = () => (
  <div>
    <button>
      <span className={styles["shadow"]}></span>
      <span className={styles["edge"]}></span>
      <span className={styles["front"] + styles["text"]}> Click me</span>
    </button>
  </div>
);

export default Button_movie;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_movie = () => (
         <div>
          <button>
  <span className="shadow"></span>
  <span className="edge"></span>
  <span className="front text"> Click me
  </span>
</button>
        </div>
        );

        export default Button_movie;
        
        
         */
}
