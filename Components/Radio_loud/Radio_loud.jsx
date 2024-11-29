import React from "react";
import styles from "./Radio_loud.module.css";

const Radio_loud = () => (
  <div>
    <div className={styles["body"]}>
      <div className={styles["tabs"]}>
        <input
          checked=""
          value="HTML"
          name="fav_language"
          id="html"
          type="radio"
          className={styles["input"]}
        />
        <label for="html" className={styles["label"]}>
          HTML
        </label>
        <input
          value="CSS"
          name="fav_language"
          id="css"
          type="radio"
          className={styles["input"]}
        />
        <label for="css" className={styles["label"]}>
          CSS
        </label>
        <input
          value="JavaScript"
          name="fav_language"
          id="javascript"
          type="radio"
          className={styles["input"]}
        />
        <label for="javascript" className={styles["label"]}>
          JavaScript
        </label>
      </div>
    </div>
  </div>
);

export default Radio_loud;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_loud = () => (
         <div>
          <div className="body">
  <div className="tabs">
    <input
      checked=""
      value="HTML"
      name="fav_language"
      id="html"
      type="radio"
      className="input"
    />
    <label for="html" className="label">HTML</label>
    <input
      value="CSS"
      name="fav_language"
      id="css"
      type="radio"
      className="input"
    />
    <label for="css" className="label">CSS</label>
    <input
      value="JavaScript"
      name="fav_language"
      id="javascript"
      type="radio"
      className="input"
    />
    <label for="javascript" className="label">JavaScript</label>
  </div>
</div>
        </div>
        );

        export default Radio_loud;
        
        
         */
}
