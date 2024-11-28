import React from "react";
import styles from "./Button_strong.module.css";

const Button_strong = () => (
  <div>
    <div className={styles["button-options"]}>
      <div className={styles["content"]}>
        <input name="boldInput" id="boldInput" hidden="" type="checkbox" />
        <label className={styles["label-layout"]} for="boldInput">
          <b>B</b>
        </label>

        <input name="italicInput" id="italicInput" hidden="" type="checkbox" />
        <label className={styles["label-layout"]} for="italicInput">
          <i>i</i>
        </label>

        <input
          name="underlineInput"
          id="underlineInput"
          hidden=""
          type="checkbox"
        />
        <label className={styles["label-layout"]} for="underlineInput">
          <u>U</u>
        </label>
        <span className={styles["title"]}>L❤VE FRONT-END</span>
      </div>
    </div>
  </div>
);

export default Button_strong;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Button_strong = () => (
         <div>
          <div className="button-options">
  <div className="content">
    <input name="boldInput" id="boldInput" hidden="" type="checkbox" />
    <label className="label-layout" for="boldInput">
      <b>B</b>
    </label>

    <input name="italicInput" id="italicInput" hidden="" type="checkbox" />
    <label className="label-layout" for="italicInput">
      <i>i</i>
    </label>

    <input
      name="underlineInput"
      id="underlineInput"
      hidden=""
      type="checkbox"
    />
    <label className="label-layout" for="underlineInput">
      <u>U</u>
    </label>
    <span className="title">L❤VE FRONT-END</span>
  </div>
</div>
        </div>
        );

        export default Button_strong;
        
        
         */
}
