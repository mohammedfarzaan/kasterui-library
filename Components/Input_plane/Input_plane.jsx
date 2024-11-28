import React from "react";
import styles from "./Input_plane.module.css";

const Input_plane = () => (
  <div>
    <div className={styles["mat-input"]}>
      <label for="food">Favorite food</label>
      <input id="food" type="text" placeholder="Ex. Pizza" />
    </div>
  </div>
);

export default Input_plane;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_plane = () => (
         <div>
          <div className="mat-input">
  <label for="food">Favorite food</label>
  <input id="food" type="text" placeholder="Ex. Pizza" />
</div>
        </div>
        );

        export default Input_plane;
        
        
         */
}
