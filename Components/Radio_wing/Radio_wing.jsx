import React from "react";
import styles from "./Radio_wing.module.css";

const Radio_wing = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["de"]}>
        <div className={styles["den"]}>
          <hr className={styles["line"]} />
          <hr className={styles["line"]} />
          <hr className={styles["line"]} />

          <div className={styles["switch"]}>
            <label for="switch_off">
              <span>OFF</span>
            </label>
            <label for="switch_1">
              <span>1</span>
            </label>
            <label for="switch_2">
              <span>2</span>
            </label>
            <label for="switch_3">
              <span>3</span>
            </label>
            <label for="switch_4">
              <span>4</span>
            </label>
            <label for="switch_5">
              <span>5</span>
            </label>

            <input type="radio" checked="" name="switch" id="switch_off" />
            <input type="radio" name="switch" id="switch_1" />
            <input type="radio" name="switch" id="switch_2" />
            <input type="radio" name="switch" id="switch_3" />
            <input type="radio" name="switch" id="switch_4" />
            <input type="radio" name="switch" id="switch_5" />

            <div className={styles["light"]}>
              <span></span>
            </div>

            <div className={styles["dot"]}>
              <span></span>
            </div>

            <div className={styles["dene"]}>
              <div className={styles["denem"]}>
                <div className={styles["deneme"]}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Radio_wing;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Radio_wing = () => (
         <div>
          <div className="container">

    
    <div className="de">

        
        <div className="den">

            
            <hr className="line" />
            <hr className="line" />
            <hr className="line" />

            
            <div className="switch">

                
                <label for="switch_off"><span>OFF</span></label>
                <label for="switch_1"><span>1</span></label>
                <label for="switch_2"><span>2</span></label>
                <label for="switch_3"><span>3</span></label>
                <label for="switch_4"><span>4</span></label>
                <label for="switch_5"><span>5</span></label>

                
                <input type="radio" checked="" name="switch" id="switch_off" />
                <input type="radio" name="switch" id="switch_1" />
                <input type="radio" name="switch" id="switch_2" />
                <input type="radio" name="switch" id="switch_3" />
                <input type="radio" name="switch" id="switch_4" />
                <input type="radio" name="switch" id="switch_5" />

                
                <div className="light"><span></span></div>

                
                <div className="dot"><span></span></div>

                
                <div className="dene">
                    <div className="denem">
                        <div className="deneme">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
        );

        export default Radio_wing;
        
        
         */
}
