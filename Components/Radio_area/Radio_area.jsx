import React from "react";
import styles from "./Radio_area.module.css";

const Radio_area = () => (
  <div>
    <div className={styles["mydict"]}>
      <div>
        <label>
          <input type="radio" name="radio" checked="" />
          <span>Women</span>
        </label>
        <label>
          <input type="radio" name="radio" />
          <span>Men</span>
        </label>
        <label>
          <input type="radio" name="radio" />
          <span>Divided</span>
        </label>
      </div>
    </div>
  </div>
);

export default Radio_area;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_area = () => (
         <div>
          <div className="mydict">
	<div>
		<label>
			<input type="radio" name="radio" checked="" />
			<span>Women</span>
		</label>
		<label>
			<input type="radio" name="radio" />
			<span>Men</span>
		</label>
		<label>
			<input type="radio" name="radio" />
			<span>Divided</span>
		</label>
		
	</div>
</div>
        </div>
        );

        export default Radio_area;
        
        
         */
}
