import React from "react";
import styles from "./Button_edge.module.css";

const Button_edge = () => (
  <div>
    <button>
      <span>Hover me</span>
    </button>
  </div>
);

export default Button_edge;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_edge = () => (
         <div>
          <button>
  <span>
  Hover me
  </span>
</button>
        </div>
        );

        export default Button_edge;
        
        
         */
}
