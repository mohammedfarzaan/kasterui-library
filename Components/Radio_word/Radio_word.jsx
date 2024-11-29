import React from "react";
import styles from "./Radio_word.module.css";

const Radio_word = () => (
  <div>
    <div className={styles["radiogroup"]}>
      <div className={styles["wrapper"]}>
        <input
          value="a"
          id="a"
          name="app"
          type="radio"
          className={styles["state"]}
        />
        <label for="a" className={styles["label"]}>
          <div className={styles["indicator"]}></div>
          <span className={styles["text"]}>a) close</span>
        </label>
      </div>
      <div className={styles["wrapper"]}>
        <input
          value="b"
          id="b"
          name="app"
          type="radio"
          className={styles["state"]}
        />
        <label for="b" className={styles["label"]}>
          <div className={styles["indicator"]}></div>
          <span className={styles["text"]}>b) remove</span>
        </label>
      </div>
      <div className={styles["wrapper"]}>
        <input
          value="c"
          id="c"
          name="app"
          type="radio"
          className={styles["state"]}
        />
        <label for="c" className={styles["label"]}>
          <div className={styles["indicator"]}></div>
          <span className={styles["text"]}>c) delete</span>
        </label>
      </div>
      <div className={styles["wrapper"]}>
        <input
          value="d"
          id="d"
          name="app"
          type="radio"
          className={styles["state"]}
        />
        <label for="d" className={styles["label"]}>
          <div className={styles["indicator"]}></div>
          <span className={styles["text"]}>d) all of the above</span>
        </label>
      </div>
    </div>
  </div>
);

export default Radio_word;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_word = () => (
         <div>
          <div className="radiogroup">
  <div className="wrapper">
    <input value="a" id="a" name="app" type="radio" className="state" />
    <label for="a" className="label">
      <div className="indicator"></div>
      <span className="text">a) close</span>
    </label>
  </div>
  <div className="wrapper">
    <input value="b" id="b" name="app" type="radio" className="state" />
    <label for="b" className="label">
      <div className="indicator"></div>
      <span className="text">b) remove</span>
    </label>
  </div>
  <div className="wrapper">
    <input value="c" id="c" name="app" type="radio" className="state" />
    <label for="c" className="label">
      <div className="indicator"></div>
      <span className="text">c) delete</span>
    </label>
  </div>
  <div className="wrapper">
    <input value="d" id="d" name="app" type="radio" className="state" />
    <label for="d" className="label">
      <div className="indicator"></div>
      <span className="text">d) all of the above</span>
    </label>
  </div>
</div>
        </div>
        );

        export default Radio_word;
        
        
         */
}
