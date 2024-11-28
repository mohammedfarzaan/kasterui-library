import React from "react";
import styles from "./Toggle_meal.module.css";

const Toggle_meal = () => (
  <div>
    <div className={styles["rating"]}>
      <input type="radio" id="star5" name="rating" value="5" />
      <label for="star5"></label>
      <input type="radio" id="star4" name="rating" value="4" />
      <label for="star4"></label>
      <input type="radio" id="star3" name="rating" value="3" />
      <label for="star3"></label>
      <input type="radio" id="star2" name="rating" value="2" />
      <label for="star2"></label>
      <input type="radio" id="star1" name="rating" value="1" />
      <label for="star1"></label>
    </div>
  </div>
);

export default Toggle_meal;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_meal = () => (
         <div>
          <div className="rating">
  <input type="radio" id="star5" name="rating" value="5" />
  <label for="star5"></label>
  <input type="radio" id="star4" name="rating" value="4" />
  <label for="star4"></label>
  <input type="radio" id="star3" name="rating" value="3" />
  <label for="star3"></label>
  <input type="radio" id="star2" name="rating" value="2" />
  <label for="star2"></label>
  <input type="radio" id="star1" name="rating" value="1" />
  <label for="star1"></label>
</div>
        </div>
        );

        export default Toggle_meal;
        
        
         */
}
