import React from "react";
import styles from "./Button_brush.module.css";

const Button_brush = () => (
  <div>
    <button>
      <a href="#" className={styles["btn2"]}>
        <span className={styles["spn2"]}>HELLO !</span>
      </a>
    </button>
  </div>
);

export default Button_brush;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_brush = () => (
         <div>
          <button>
  <a href="#" className="btn2"><span className="spn2">HELLO !</span></a>
</button>
        </div>
        );

        export default Button_brush;
        
        
         */
}
