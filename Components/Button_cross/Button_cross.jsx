import React from "react";
import styles from "./Button_cross.module.css";

const Button_cross = () => (
  <div>
    <button>
      <span>HoverMe</span>
      <span>HoverMe</span>
    </button>
  </div>
);

export default Button_cross;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_cross = () => (
         <div>
          <button>
     <span>HoverMe</span>
     <span>HoverMe</span>
 </button>
        </div>
        );

        export default Button_cross;
        
        
         */
}
