import React from "react";
import styles from "./Loader_mainly.module.css";

const Loader_mainly = () => (
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

export default Loader_mainly;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_mainly = () => (
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

        export default Loader_mainly;
        
        
         */
}
