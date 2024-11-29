import React from "react";
import styles from "./Loader_flame.module.css";

const Loader_flame = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["top"]}>
        <div className={styles["square"]}>
          <div className={styles["square"]}>
            <div className={styles["square"]}>
              <div className={styles["square"]}>
                <div className={styles["square"]}>
                  <div className={styles["square"]}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["bottom"]}>
        <div className={styles["square"]}>
          <div className={styles["square"]}>
            <div className={styles["square"]}>
              <div className={styles["square"]}>
                <div className={styles["square"]}>
                  <div className={styles["square"]}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["left"]}>
        <div className={styles["square"]}>
          <div className={styles["square"]}>
            <div className={styles["square"]}>
              <div className={styles["square"]}>
                <div className={styles["square"]}>
                  <div className={styles["square"]}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["right"]}>
        <div className={styles["square"]}>
          <div className={styles["square"]}>
            <div className={styles["square"]}>
              <div className={styles["square"]}>
                <div className={styles["square"]}>
                  <div className={styles["square"]}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_flame;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Loader_flame = () => (
         <div>
          <div className="container">
  <div className="top">
    <div className="square">
      <div className="square">
        <div className="square">
          <div className="square">
            <div className="square"><div className="square">
            </div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="bottom">
    <div className="square">
      <div className="square">
        <div className="square">
          <div className="square">
            <div className="square"><div className="square">
            </div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="left">
    <div className="square">
      <div className="square">
        <div className="square">
          <div className="square">
            <div className="square"><div className="square">
            </div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="right">
    <div className="square">
      <div className="square">
        <div className="square">
          <div className="square">
            <div className="square"><div className="square">
            </div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_flame;
        
        
         */
}
