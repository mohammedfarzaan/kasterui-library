import React from "react";
import styles from "./Radio_escape.module.css";

const Radio_escape = () => (
  <div>
    <div>
      <div className={styles["Radio"]}>
        <input
          checked=""
          value="radio1"
          type="radio"
          name="radio"
          id="Radio1"
        />
        <label for="Radio1">Bubble 1</label>
      </div>
      <div className={styles["Radio"]}>
        <input value="radio2" type="radio" name="radio" id="Radio2" />
        <label for="Radio2">Bubble 2</label>
      </div>
    </div>
  </div>
);

export default Radio_escape;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_escape = () => (
         <div>
          <div>
  <div className="Radio">
    <input checked="" value="radio1" type="radio" name="radio" id="Radio1" />
    <label for="Radio1">Bubble 1</label>
  </div>
  <div className="Radio">
    <input value="radio2" type="radio" name="radio" id="Radio2" />
    <label for="Radio2">Bubble 2</label>
  </div>
</div>
        </div>
        );

        export default Radio_escape;
        
        
         */
}
