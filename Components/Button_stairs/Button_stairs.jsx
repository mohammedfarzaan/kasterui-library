import React from "react";
import styles from "./Button_stairs.module.css";

const Button_stairs = () => (
  <div>
    <button className={styles["learn-more"]}> Learn More</button>
  </div>
);

export default Button_stairs;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_stairs = () => (
         <div>
          <button className="learn-more"> Learn More
</button>
        </div>
        );

        export default Button_stairs;
        
        
         */
}
