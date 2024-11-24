import React from "react";
import styles from "./Button_aware.module.css";

const Button_aware = () => (
  <div>
    <div className={styles["box"]}>
      <button className={styles["button"]}>MATRIX</button>
      <div className={styles["matrix"]}>
        <span style="--i: 6" className={styles["code-line"]}>
          <p className={styles["code"]}>z</p>
          <p className={styles["code"]}>6</p>
          <p className={styles["code"]}>0</p>
          <p className={styles["code"]}>z</p>
        </span>
        <span style="--i: 8" className={styles["code-line"]}>
          <p className={styles["code"]}>6</p>
          <p className={styles["code"]}>9</p>
          <p className={styles["code"]}>p</p>
        </span>
        <span style="--i: 5" className={styles["code-line"]}>
          <p className={styles["code"]}>u</p>
          <p className={styles["code"]}>3</p>
          <p className={styles["code"]}>g</p>
        </span>
        <span style="--i: 12" className={styles["code-line"]}>
          <p className={styles["code"]}>a</p>
          <p className={styles["code"]}>t</p>
          <p className={styles["code"]}>7</p>
          <p className={styles["code"]}>2</p>
          <p className={styles["code"]}>g</p>
          <p className={styles["code"]}>h</p>
          <p className={styles["code"]}>0</p>
          <p className={styles["code"]}>k</p>
        </span>
        <span style="--i: 9" className={styles["code-line"]}>
          <p className={styles["code"]}>6</p>
          <p className={styles["code"]}>3</p>
          <p className={styles["code"]}>0</p>
        </span>
        <span style="--i: 6" className={styles["code-line"]}>
          <p className={styles["code"]}>7</p>
          <p className={styles["code"]}>s</p>
          <p className={styles["code"]}>b</p>
          <p className={styles["code"]}>q</p>
        </span>
        <span style="--i: 8" className={styles["code-line"]}>
          <p className={styles["code"]}>m</p>
          <p className={styles["code"]}>2</p>
          <p className={styles["code"]}>5</p>
          <p className={styles["code"]}>4</p>
          <p className={styles["code"]}>l</p>
          <p className={styles["code"]}>1</p>
        </span>
        <span style="--i: 12" className={styles["code-line"]}>
          <p className={styles["code"]}>9</p>
          <p className={styles["code"]}>1</p>
          <p className={styles["code"]}>s</p>
          <p className={styles["code"]}>2</p>
          <p className={styles["code"]}>t</p>
          <p className={styles["code"]}>7</p>
          <p className={styles["code"]}>4</p>
          <p className={styles["code"]}>h</p>
          <p className={styles["code"]}>0</p>
        </span>
        <span style="--i: 16" className={styles["code-line"]}>
          <p className={styles["code"]}>a</p>
          <p className={styles["code"]}>b</p>
          <p className={styles["code"]}>c</p>
          <p className={styles["code"]}>d</p>
          <p className={styles["code"]}>e</p>
        </span>
        <span style="--i: 9" className={styles["code-line"]}>
          <p className={styles["code"]}>f</p>
          <p className={styles["code"]}>g</p>
          <p className={styles["code"]}>h</p>
          <p className={styles["code"]}>i</p>
          <p className={styles["code"]}>j</p>
        </span>
        <span style="--i: 6" className={styles["code-line"]}>
          <p className={styles["code"]}>k</p>
          <p className={styles["code"]}>l</p>
          <p className={styles["code"]}>m</p>
          <p className={styles["code"]}>n</p>
        </span>
        <span style="--i: 19" className={styles["code-line"]}>
          <p className={styles["code"]}>u</p>
          <p className={styles["code"]}>v</p>
          <p className={styles["code"]}>w</p>
          <p className={styles["code"]}>v</p>
          <p className={styles["code"]}>2</p>
          <p className={styles["code"]}>3</p>
        </span>
        <span style="--i: 7" className={styles["code-line"]}>
          <p className={styles["code"]}>p</p>
          <p className={styles["code"]}>q</p>
          <p className={styles["code"]}>r</p>
          <p className={styles["code"]}>s</p>
          <p className={styles["code"]}>t</p>
        </span>
        <span style="--i: 12" className={styles["code-line"]}>
          <p className={styles["code"]}>1</p>
          <p className={styles["code"]}>2</p>
          <p className={styles["code"]}>6</p>
          <p className={styles["code"]}>x</p>
          <p className={styles["code"]}>5</p>
          <p className={styles["code"]}>h</p>
        </span>
        <span style="--i: 9" className={styles["code-line"]}>
          <p className={styles["code"]}>6</p>
          <p className={styles["code"]}>7</p>
          <p className={styles["code"]}>f</p>
          <p className={styles["code"]}>a</p>
          <p className={styles["code"]}>6</p>
          <p className={styles["code"]}>1</p>
        </span>
        <span style="--i: 17" className={styles["code-line"]}>
          <p className={styles["code"]}>j</p>
          <p className={styles["code"]}>f</p>
          <p className={styles["code"]}>0</p>
          <p className={styles["code"]}>x</p>
          <p className={styles["code"]}>6</p>
          <p className={styles["code"]}>0</p>
        </span>
        <span style="--i: 10" className={styles["code-line"]}>
          <p className={styles["code"]}>0</p>
          <p className={styles["code"]}>k</p>
          <p className={styles["code"]}>%</p>
          <p className={styles["code"]}>f</p>
          <p className={styles["code"]}>6</p>
          <p className={styles["code"]}>%</p>
        </span>
      </div>
    </div>
  </div>
);

export default Button_aware;

{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
        
        import React from 'react';

        const Button_aware = () => (
         <div>
          <div className="box">
  <button className="button">MATRIX</button>
  <div className="matrix">
    <span style="--i: 6" className="code-line">
      <p className="code">z</p><p className="code">6</p><p className="code">0</p><p className="code">z</p>
    </span>
    <span style="--i: 8" className="code-line">
      <p className="code">6</p><p className="code">9</p><p className="code">p</p>
    </span>
    <span style="--i: 5" className="code-line">
      <p className="code">u</p><p className="code">3</p><p className="code">g</p>
    </span>
    <span style="--i: 12" className="code-line">
      <p className="code">a</p><p className="code">t</p><p className="code">7</p><p className="code">2</p><p className="code">g</p><p className="code">h</p><p className="code">0</p><p className="code">k</p>
    </span>
    <span style="--i: 9" className="code-line">
      <p className="code">6</p><p className="code">3</p><p className="code">0</p>
    </span>
    <span style="--i: 6" className="code-line">
      <p className="code">7</p><p className="code">s</p><p className="code">b</p><p className="code">q</p>
    </span>
    <span style="--i: 8" className="code-line">
      <p className="code">m</p><p className="code">2</p><p className="code">5</p><p className="code">4</p><p className="code">l</p><p className="code">1</p>
    </span>
    <span style="--i: 12" className="code-line">
      <p className="code">9</p><p className="code">1</p><p className="code">s</p><p className="code">2</p><p className="code">t</p><p className="code">7</p><p className="code">4</p><p className="code">h</p><p className="code">0</p>
    </span>
    <span style="--i: 16" className="code-line">
      <p className="code">a</p><p className="code">b</p><p className="code">c</p><p className="code">d</p><p className="code">e</p>
    </span>
    <span style="--i: 9" className="code-line">
      <p className="code">f</p><p className="code">g</p><p className="code">h</p><p className="code">i</p><p className="code">j</p>
    </span>
    <span style="--i: 6" className="code-line">
      <p className="code">k</p><p className="code">l</p><p className="code">m</p><p className="code">n</p>
    </span>
    <span style="--i: 19" className="code-line">
      <p className="code">u</p><p className="code">v</p><p className="code">w</p><p className="code">v</p><p className="code">2</p><p className="code">3</p>
    </span>
    <span style="--i: 7" className="code-line">
      <p className="code">p</p><p className="code">q</p><p className="code">r</p><p className="code">s</p><p className="code">t</p>
    </span>
    <span style="--i: 12" className="code-line">
      <p className="code">1</p><p className="code">2</p><p className="code">6</p><p className="code">x</p><p className="code">5</p><p className="code">h</p>
    </span>
    <span style="--i: 9" className="code-line">
      <p className="code">6</p><p className="code">7</p><p className="code">f</p><p className="code">a</p><p className="code">6</p><p className="code">1</p>
    </span>
    <span style="--i: 17" className="code-line">
      <p className="code">j</p><p className="code">f</p><p className="code">0</p><p className="code">x</p><p className="code">6</p><p className="code">0</p>
    </span>
    <span style="--i: 10" className="code-line">
      <p className="code">0</p><p className="code">k</p><p className="code">%</p><p className="code">f</p><p className="code">6</p><p className="code">%</p>
    </span>
  </div>
</div>
        </div>
        );

        export default Button_aware;
        
        
         */
}
