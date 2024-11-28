import React from "react";
import styles from "./Input_orange.module.css";

const Input_orange = () => (
  <div>
    <div className={styles["PB-range-slider-div"]}>
      <input
        type="range"
        min="0"
        max="100"
        value="50"
        className={styles["PB-range-slider"]}
        id="myRange"
      />
      <p className={styles["PB-range-slidervalue"]}>50px</p>
    </div>
  </div>
);

export default Input_orange;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_orange = () => (
         <div>
          <div className="PB-range-slider-div">
<input type="range" min="0" max="100" value="50" className="PB-range-slider" id="myRange" />
<p className="PB-range-slidervalue">50px</p>
</div>
        </div>
        );

        export default Input_orange;
        
        
         */
}
