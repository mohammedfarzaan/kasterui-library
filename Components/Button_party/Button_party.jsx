import React from "react";
import styles from "./Button_party.module.css";

const Button_party = () => (
  <div>
    <button className={styles["morph-button"]}></button>
  </div>
);

export default Button_party;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_party = () => (
         <div>
          <button className="morph-button"></button>
        </div>
        );

        export default Button_party;
        
        
         */
}
