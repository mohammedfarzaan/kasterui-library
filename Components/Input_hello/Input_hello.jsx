import React from "react";
import styles from "./Input_hello.module.css";

const Input_hello = () => (
  <div>
    <div className={styles["rating"]}>
      <input value="5" name="rating" id="star5" type="radio" />
      <label for="star5"></label>
      <input value="4" name="rating" id="star4" type="radio" />
      <label for="star4"></label>
      <input value="3" name="rating" id="star3" type="radio" />
      <label for="star3"></label>
      <input value="2" name="rating" id="star2" type="radio" />
      <label for="star2"></label>
      <input value="1" name="rating" id="star1" type="radio" />
      <label for="star1"></label>
    </div>
  </div>
);

export default Input_hello;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Input_hello = () => (
         <div>
          <div className="rating">
  <input value="5" name="rating" id="star5" type="radio" />
  <label for="star5"></label>
  <input value="4" name="rating" id="star4" type="radio" />
  <label for="star4"></label>
  <input value="3" name="rating" id="star3" type="radio" />
  <label for="star3"></label>
  <input value="2" name="rating" id="star2" type="radio" />
  <label for="star2"></label>
  <input value="1" name="rating" id="star1" type="radio" />
  <label for="star1"></label>
</div>
        </div>
        );

        export default Input_hello;
        
        
         */
}
