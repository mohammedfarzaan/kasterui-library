import React from "react";
import styles from "./Card_held.module.css";

const Card_held = () => (
  <div>
    <div className={styles["card-2"]}>
      <span id="card-2-h1">Welcome</span>
      <div className={styles["h1-circle"]}>
        <ul id="h1-circle-ul-1">
          <li>Easer</li>
          <li>Cheaper</li>
          <li>World Wild</li>
        </ul>
        <ul id="h1-circle-ul-2">
          <li>Secrets</li>
          <li>Expensive</li>
          <li>World Wild</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Card_held;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_held = () => (
         <div>
          <div className="card-2">
        <span id="card-2-h1">Welcome</span>
        <div className="h1-circle">
             <ul id="h1-circle-ul-1">
            <li>Easer</li>
            <li>Cheaper</li>
            <li>World Wild</li>
             </ul>
             <ul id="h1-circle-ul-2">
            <li>Secrets</li>
            <li>Expensive</li>
            <li>World Wild</li>
             </ul>
        </div>
    </div>
        </div>
        );

        export default Card_held;
        
        
         */
}
