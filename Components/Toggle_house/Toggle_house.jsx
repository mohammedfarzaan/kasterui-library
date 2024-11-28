import React from "react";
import styles from "./Toggle_house.module.css";

const Toggle_house = () => (
  <div>
    <input
      type="checkbox"
      checked="checked"
      id="favorite"
      name="favorite-checkbox"
      value="favorite-button"
    />
    <label for="favorite" className={styles["container"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-heart"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
      <div className={styles["action"]}>
        <span className={styles["option-1"]}>Add to Favorites</span>
        <span className={styles["option-2"]}>Added to Favorites</span>
      </div>
    </label>
  </div>
);

export default Toggle_house;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_house = () => (
         <div>
          <input type="checkbox" checked="checked" id="favorite" name="favorite-checkbox" value="favorite-button" />
<label for="favorite" className="container">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
  <div className="action">
    <span className="option-1">Add to Favorites</span>
    <span className="option-2">Added to Favorites</span>
  </div>
</label>
        </div>
        );

        export default Toggle_house;
        
        
         */
}
