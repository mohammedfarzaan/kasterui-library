import React from "react";
import styles from "./Toggle_saved.module.css";

const Toggle_saved = () => (
  <div>
    <label for="theme" className={styles["theme"]}>
      <span className={styles["theme__toggle-wrap"]}>
        <input
          id="theme"
          className={styles["theme__toggle"]}
          type="checkbox"
          role="switch"
          name="theme"
          value="dark"
        />
        <span className={styles["theme__fill"]}></span>
        <span className={styles["theme__icon"]}>
          <span className={styles["theme__icon-part"]}></span>
          <span className={styles["theme__icon-part"]}></span>
          <span className={styles["theme__icon-part"]}></span>
          <span className={styles["theme__icon-part"]}></span>
          <span className={styles["theme__icon-part"]}></span>
          <span className={styles["theme__icon-part"]}></span>
          <span className={styles["theme__icon-part"]}></span>
          <span className={styles["theme__icon-part"]}></span>
          <span className={styles["theme__icon-part"]}></span>
        </span>
      </span>
    </label>
  </div>
);

export default Toggle_saved;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Toggle_saved = () => (
         <div>
          <label for="theme" className="theme">
	<span className="theme__toggle-wrap">
		<input id="theme" className="theme__toggle" type="checkbox" role="switch" name="theme" value="dark" />
		<span className="theme__fill"></span>
		<span className="theme__icon">
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
		</span>
	</span>
</label>
        </div>
        );

        export default Toggle_saved;
        
        
         */
}
