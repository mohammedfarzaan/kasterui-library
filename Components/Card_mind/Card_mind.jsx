import React from "react";
import styles from "./Card_mind.module.css";

const Card_mind = () => (
  <div>
    <div className={styles["card"]}>
      <p>Write here</p>
    </div>
    <svg className={styles["filter"]}>
      <filter id="wavy2">
        <feTurbulence
          x="0"
          y="0"
          baseFrequency="0.02"
          numOctaves="5"
          seed="1"
        ></feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="20"></feDisplacementMap>
      </filter>
    </svg>
  </div>
);

export default Card_mind;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_mind = () => (
         <div>
          <div className="card">
  <p>Write here</p>
</div>
<svg className="filter">
  <filter id="wavy2">
    <feTurbulence x="0" y="0" baseFrequency="0.02" numOctaves="5" seed="1"></feTurbulence>
    <feDisplacementMap in="SourceGraphic" scale="20"></feDisplacementMap>
  </filter>
</svg>
        </div>
        );

        export default Card_mind;
        
        
         */
}
