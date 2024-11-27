import React from "react";
import styles from "./Loader_silk.module.css";

const Loader_silk = () => (
  <div>
    <div className={styles["scene"]}>
      <div className={styles["forest"]}>
        <div className={styles["tree"] + styles["tree1"]}>
          <div className={styles["branch"] + styles["branch-top"]}></div>
          <div className={styles["branch"] + styles["branch-middle"]}></div>
        </div>

        <div className={styles["tree"] + styles["tree2"]}>
          <div className={styles["branch"] + styles["branch-top"]}></div>
          <div className={styles["branch"] + styles["branch-middle"]}></div>
          <div className={styles["branch"] + styles["branch-bottom"]}></div>
        </div>

        <div className={styles["tree"] + styles["tree3"]}>
          <div className={styles["branch"] + styles["branch-top"]}></div>
          <div className={styles["branch"] + styles["branch-middle"]}></div>
          <div className={styles["branch"] + styles["branch-bottom"]}></div>
        </div>

        <div className={styles["tree"] + styles["tree4"]}>
          <div className={styles["branch"] + styles["branch-top"]}></div>
          <div className={styles["branch"] + styles["branch-middle"]}></div>
          <div className={styles["branch"] + styles["branch-bottom"]}></div>
        </div>

        <div className={styles["tree"] + styles["tree5"]}>
          <div className={styles["branch"] + styles["branch-top"]}></div>
          <div className={styles["branch"] + styles["branch-middle"]}></div>
          <div className={styles["branch"] + styles["branch-bottom"]}></div>
        </div>

        <div className={styles["tree"] + styles["tree6"]}>
          <div className={styles["branch"] + styles["branch-top"]}></div>
          <div className={styles["branch"] + styles["branch-middle"]}></div>
          <div className={styles["branch"] + styles["branch-bottom"]}></div>
        </div>

        <div className={styles["tree"] + styles["tree7"]}>
          <div className={styles["branch"] + styles["branch-top"]}></div>
          <div className={styles["branch"] + styles["branch-middle"]}></div>
          <div className={styles["branch"] + styles["branch-bottom"]}></div>
        </div>
      </div>

      <div className={styles["tent"]}>
        <div className={styles["roof"]}></div>
        <div className={styles["roof-border-left"]}>
          <div className={styles["roof-border"] + styles["roof-border1"]}></div>
          <div className={styles["roof-border"] + styles["roof-border2"]}></div>
          <div className={styles["roof-border"] + styles["roof-border3"]}></div>
        </div>
        <div className={styles["entrance"]}>
          <div className={styles["door"] + styles["left-door"]}>
            <div className={styles["left-door-inner"]}></div>
          </div>
          <div className={styles["door"] + styles["right-door"]}>
            <div className={styles["right-door-inner"]}></div>
          </div>
        </div>
      </div>

      <div className={styles["floor"]}>
        <div className={styles["ground"] + styles["ground1"]}></div>
        <div className={styles["ground"] + styles["ground2"]}></div>
      </div>

      <div className={styles["fireplace"]}>
        <div className={styles["support"]}></div>
        <div className={styles["support"]}></div>
        <div className={styles["bar"]}></div>
        <div className={styles["hanger"]}></div>
        <div className={styles["smoke"]}></div>
        <div className={styles["pan"]}></div>
        <div className={styles["fire"]}>
          <div className={styles["line"] + styles["line1"]}>
            <div className={styles["particle"] + styles["particle1"]}></div>
            <div className={styles["particle"] + styles["particle2"]}></div>
            <div className={styles["particle"] + styles["particle3"]}></div>
            <div className={styles["particle"] + styles["particle4"]}></div>
          </div>
          <div className={styles["line"] + styles["line2"]}>
            <div className={styles["particle"] + styles["particle1"]}></div>
            <div className={styles["particle"] + styles["particle2"]}></div>
            <div className={styles["particle"] + styles["particle3"]}></div>
            <div className={styles["particle"] + styles["particle4"]}></div>
          </div>
          <div className={styles["line"] + styles["line3"]}>
            <div className={styles["particle"] + styles["particle1"]}></div>
            <div className={styles["particle"] + styles["particle2"]}></div>
            <div className={styles["particle"] + styles["particle3"]}></div>
            <div className={styles["particle"] + styles["particle4"]}></div>
          </div>
        </div>
      </div>

      <div className={styles["time-wrapper"]}>
        <div className={styles["time"]}>
          <div className={styles["day"]}></div>
          <div className={styles["night"]}>
            <div className={styles["moon"]}></div>
            <div
              className={styles["star"] + styles["star1"] + styles["star-big"]}
            ></div>
            <div
              className={styles["star"] + styles["star2"] + styles["star-big"]}
            ></div>
            <div
              className={styles["star"] + styles["star3"] + styles["star-big"]}
            ></div>
            <div className={styles["star"] + styles["star4"]}></div>
            <div className={styles["star"] + styles["star5"]}></div>
            <div className={styles["star"] + styles["star6"]}></div>
            <div className={styles["star"] + styles["star7"]}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader_silk;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_silk = () => (
         <div>
          <div className="scene">
  <div className="forest">
    <div className="tree tree1">
      <div className="branch branch-top"></div>
      <div className="branch branch-middle"></div>
    </div>

    <div className="tree tree2">
      <div className="branch branch-top"></div>
      <div className="branch branch-middle"></div>
      <div className="branch branch-bottom"></div>
    </div>

    <div className="tree tree3">
      <div className="branch branch-top"></div>
      <div className="branch branch-middle"></div>
      <div className="branch branch-bottom"></div>
    </div>

    <div className="tree tree4">
      <div className="branch branch-top"></div>
      <div className="branch branch-middle"></div>
      <div className="branch branch-bottom"></div>
    </div>

    <div className="tree tree5">
      <div className="branch branch-top"></div>
      <div className="branch branch-middle"></div>
      <div className="branch branch-bottom"></div>
    </div>

    <div className="tree tree6">
      <div className="branch branch-top"></div>
      <div className="branch branch-middle"></div>
      <div className="branch branch-bottom"></div>
    </div>

    <div className="tree tree7">
      <div className="branch branch-top"></div>
      <div className="branch branch-middle"></div>
      <div className="branch branch-bottom"></div>
    </div>
  </div>
  
  <div className="tent">
      <div className="roof"></div>
      <div className="roof-border-left">
        <div className="roof-border roof-border1"></div>
        <div className="roof-border roof-border2"></div>
        <div className="roof-border roof-border3"></div>
      </div>
      <div className="entrance">
        <div className="door left-door">
          <div className="left-door-inner"></div>
        </div>
        <div className="door right-door">
          <div className="right-door-inner"></div>
        </div>
      </div>
    </div>

  <div className="floor">
      <div className="ground ground1"></div>
      <div className="ground ground2"></div>
    </div>
  
  <div className="fireplace">
    <div className="support"></div>
    <div className="support"></div>
    <div className="bar"></div>
    <div className="hanger"></div>
    <div className="smoke"></div>
    <div className="pan"></div>
    <div className="fire">
      <div className="line line1">
        <div className="particle particle1"></div>
        <div className="particle particle2"></div>
        <div className="particle particle3"></div>
        <div className="particle particle4"></div>
      </div>
      <div className="line line2">
        <div className="particle particle1"></div>
        <div className="particle particle2"></div>
        <div className="particle particle3"></div>
        <div className="particle particle4"></div>
      </div>
      <div className="line line3">
        <div className="particle particle1"></div>
        <div className="particle particle2"></div>
        <div className="particle particle3"></div>
        <div className="particle particle4"></div>
      </div>
    </div>
  </div>
  
  <div className="time-wrapper">
    <div className="time">
      <div className="day"></div>
      <div className="night">
        <div className="moon"></div>
        <div className="star star1 star-big"></div>
        <div className="star star2 star-big"></div>
        <div className="star star3 star-big"></div>
        <div className="star star4"></div>
        <div className="star star5"></div>
        <div className="star star6"></div>
        <div className="star star7"></div>
      </div>
    </div>
  </div>
</div>
        </div>
        );

        export default Loader_silk;
        
        
         */
}
