import React from "react";
import styles from "./Input_place.module.css";

const Input_place = () => (
  <div>
    <div className={styles["textInputWrapper"]}>
      <input
        placeholder="Type Here"
        type="text"
        className={styles["textInput"]}
      />
    </div>
  </div>
);

export default Input_place;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_place = () => (
         <div>
          <div className="textInputWrapper">
    <input placeholder="Type Here" type="text" className="textInput" />
</div>
        </div>
        );

        export default Input_place;
        
        
         */
}
