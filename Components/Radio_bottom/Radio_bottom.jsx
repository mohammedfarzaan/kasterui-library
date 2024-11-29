import React from "react";
import styles from "./Radio_bottom.module.css";

const Radio_bottom = () => (
  <div>
    <div className={styles["rating"]}>
      <input value="5" name="rate" id="star5" type="radio" />
      <label title="text" for="star5"></label>
      <input value="4" name="rate" id="star4" type="radio" />
      <label title="text" for="star4"></label>
      <input value="3" name="rate" id="star3" type="radio" checked="" />
      <label title="text" for="star3"></label>
      <input value="2" name="rate" id="star2" type="radio" />
      <label title="text" for="star2"></label>
      <input value="1" name="rate" id="star1" type="radio" />
      <label title="text" for="star1"></label>
    </div>
  </div>
);

export default Radio_bottom;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_bottom = () => (
         <div>
          <div className="rating">
  <input value="5" name="rate" id="star5" type="radio" />
  <label title="text" for="star5"></label>
  <input value="4" name="rate" id="star4" type="radio" />
  <label title="text" for="star4"></label>
  <input value="3" name="rate" id="star3" type="radio" checked="" />
  <label title="text" for="star3"></label>
  <input value="2" name="rate" id="star2" type="radio" />
  <label title="text" for="star2"></label>
  <input value="1" name="rate" id="star1" type="radio" />
  <label title="text" for="star1"></label>
</div>
        </div>
        );

        export default Radio_bottom;
        
        
         */
}
