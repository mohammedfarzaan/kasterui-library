import React from "react";
import styles from "./Radio_vote.module.css";

const Radio_vote = () => (
  <div>
    <div className={styles["container"]}>
      <form>
        <label>
          <input type="radio" name="radio" checked="" />
          <span>HTML</span>
        </label>
        <label>
          <input type="radio" name="radio" />
          <span>CSS</span>
        </label>
        <label>
          <input type="radio" name="radio" />
          <span>Javascript</span>
        </label>
      </form>
    </div>
  </div>
);

export default Radio_vote;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_vote = () => (
         <div>
          <div className="container">
	<form>
		<label>
			<input type="radio" name="radio" checked="" />
			<span>HTML</span>
		</label>
		<label>
			<input type="radio" name="radio" />
			<span>CSS</span>
		</label>
		<label>
			<input type="radio" name="radio" />
			<span>Javascript</span>
		</label>
	</form>
</div>
        </div>
        );

        export default Radio_vote;
        
        
         */
}
