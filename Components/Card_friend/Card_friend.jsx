import React from "react";
import styles from "./Card_friend.module.css";

const Card_friend = () => (
  <div>
    <div id="cal-body">
      <div className={styles["input"]}>
        <input type="text" />
      </div>
      <div style="padding-top: 40px;">
        <div className={styles["buttons"]}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>+</button>
        </div>
        <div className={styles["buttons"]}>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
        </div>
        <div className={styles["buttons"]}>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>*</button>
        </div>
        <div className={styles["buttons"]}>
          <button>.</button>
          <button>0</button>
          <button style="width: 140px;">=</button>
        </div>
      </div>
    </div>
  </div>
);

export default Card_friend;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_friend = () => (
         <div>
          <div id="cal-body">
            <div className="input">
                <input type="text" />
            </div>
            <div style="padding-top: 40px;">

                <div className="buttons">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>+</button>
                </div>
                <div className="buttons">
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>-</button>
                </div>
                <div className="buttons">
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>*</button>
                </div>
                <div className="buttons">
                    <button>.</button>
                    <button>0</button>
                    <button style="width: 140px;">=</button>
                    
                </div>
            </div>
        </div>
        </div>
        );

        export default Card_friend;
        
        
         */
}
