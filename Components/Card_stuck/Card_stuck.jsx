import React from "react";
import styles from "./Card_stuck.module.css";

const Card_stuck = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["window"]}>
        <div className={styles["window-title"]}>
          <p>Console Window</p>
          <div className={styles["window-buttons"]}>
            <div
              className={styles["window-button"] + styles["fullscreen"]}
            ></div>
            <div className={styles["window-button"] + styles["reduce"]}></div>
            <div className={styles["window-button"] + styles["close"]}></div>
          </div>
        </div>
        <div className={styles["console"]}>
          <pre>
            <code>
              def main(): for i in range(100): print(f"Add to favorites {i}") if
              favorite = true: Favorite() def Favorite(): print("thanks") main()
            </code>
          </pre>
        </div>
      </div>
    </div>
  </div>
);

export default Card_stuck;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_stuck = () => (
         <div>
          <div className="container"> 
  <div className="window"> 
    <div className="window-title">
      <p>Console Window</p>
      <div className="window-buttons">
        <div className="window-button fullscreen"></div>
        <div className="window-button reduce"></div>
        <div className="window-button close"></div>
      </div>
    </div>
    <div className="console">
      <pre><code>def main():
  for i in range(100):
    print(f"Add to favorites {i}")
    if favorite = true:
      Favorite()

def Favorite():
  print("thanks")

main()</code></pre>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_stuck;
        
        
         */
}
