import React from "react";
import styles from "./Button_wheel.module.css";

const Button_wheel = () => (
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

export default Button_wheel;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_wheel = () => (
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

        export default Button_wheel;
        
        
         */
}
