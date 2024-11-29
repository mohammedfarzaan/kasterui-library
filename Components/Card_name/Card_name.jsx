import React from "react";
import styles from "./Card_name.module.css";

const Card_name = () => (
  <div>
    <div className={styles["calculator"]}>
      <div className={styles["output"]}>
        <span className={styles["result"]}></span>
      </div>
      <div className={styles["buttons"]}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>*</button>
        <button className={styles["bg-red"]}>C</button>
        <button>0</button>
        <button className={styles["bg-green"]}>=</button>
        <button>/</button>
      </div>
    </div>
  </div>
);

export default Card_name;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_name = () => (
         <div>
          <div className="calculator">
  <div className="output">
    <span className="result"></span>
  </div>
  <div className="buttons">
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>+</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>-</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button>*</button>
    <button className="bg-red">C</button>
    <button>0</button>
    <button className="bg-green">=</button>
    <button>/</button>
  </div>
</div>
        </div>
        );

        export default Card_name;
        
        
         */
}
