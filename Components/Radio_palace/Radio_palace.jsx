import React from "react";
import styles from "./Radio_palace.module.css";

const Radio_palace = () => (
  <div>
    <div className={styles["radio"]}>
      <input
        checked=""
        value="male"
        name="gender"
        id="male"
        type="radio"
        label="Yes"
      />
      <input value="female" name="gender" id="female" type="radio" label="No" />
      <input
        value="other"
        name="gender"
        id="other"
        type="radio"
        label="I hate making decisions 🤷🏻‍♂️"
      />
    </div>
  </div>
);

export default Radio_palace;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_palace = () => (
         <div>
          <div className="radio">
	<input checked="" value="male" name="gender" id="male" type="radio" label="Yes" />
	<input value="female" name="gender" id="female" type="radio" label="No" />
	<input value="other" name="gender" id="other" type="radio" label="I hate making decisions 🤷🏻‍♂️" />
</div>
        </div>
        );

        export default Radio_palace;
        
        
         */
}
