import React from "react";
import styles from "./Radio_heat.module.css";

const Radio_heat = () => (
  <div>
    <form className={styles["form"]}>
      <label className={styles["label"]}>
        <input
          checked=""
          value="am"
          name="band"
          type="radio"
          className={styles["input"]}
        />
        <span className={styles["span"]}>AM</span>
      </label>
      <label className={styles["label"]}>
        <input
          value="fm"
          name="band"
          type="radio"
          className={styles["input"]}
        />
        <span className={styles["span"]}>FM</span>
      </label>
      <label className={styles["label"]}>
        <input
          value="sw"
          name="band"
          type="radio"
          className={styles["input"]}
        />
        <span className={styles["span"]}>SW</span>
      </label>
      <label className={styles["label"]}>
        <input
          value="mw"
          name="band"
          type="radio"
          className={styles["input"]}
        />
        <span className={styles["span"]}>MW</span>
      </label>
      <label className={styles["label"]}>
        <input
          value="mw"
          name="band"
          type="radio"
          className={styles["input"]}
        />
        <span className={styles["span"]}>LW</span>
      </label>
    </form>
  </div>
);

export default Radio_heat;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_heat = () => (
         <div>
          <form className="form">
	<label className="label"><input checked="" value="am" name="band" type="radio" className="input" /><span className="span">AM</span></label>
	<label className="label"><input value="fm" name="band" type="radio" className="input" /><span className="span">FM</span></label>
	<label className="label"><input value="sw" name="band" type="radio" className="input" /><span className="span">SW</span></label>
	<label className="label"><input value="mw" name="band" type="radio" className="input" /><span className="span">MW</span></label>
	<label className="label"><input value="mw" name="band" type="radio" className="input" /><span className="span">LW</span></label>
</form>
        </div>
        );

        export default Radio_heat;
        
        
         */
}
