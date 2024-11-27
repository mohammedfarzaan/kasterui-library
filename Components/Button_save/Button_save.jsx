import React from "react";
import styles from "./Button_save.module.css";

const Button_save = () => (
  <div>
    <div className={styles["icons"]}>
      <div className={styles["title"]}>
        <span>O</span>
        <span>N</span>
        <span>L</span>
        <span>Y</span>
        <span>C</span>
        <span>S</span>
        <span>S</span>
      </div>
      <div className={styles["icon-box"]}>
        <button className={styles["activity"]}>
          <span className={styles["line-1"]}></span>
          <span className={styles["line-2"]}></span>
          <span className={styles["line-3"]}></span>
          <span className={styles["line-4"]}></span>
          <span className={styles["line-5"]}></span>
        </button>
        <div className={styles["text"]}>Activity</div>
      </div>
      <div className={styles["icon-box"]}>
        <button className={styles["airplay"]}>
          <span className={styles["line-1"]}></span>
          <span className={styles["line-2"]}></span>
        </button>
        <div className={styles["text"]}>AirPlay</div>
      </div>
      <div className={styles["icon-box"]}>
        <button className={styles["alert-circle"]}>
          <span className={styles["line-1"]}></span>
          <span className={styles["line-2"]}></span>
        </button>
        <div className={styles["text"]}>Alert</div>
      </div>
      <div className={styles["icon-box"]}>
        <button className={styles["alert-octagon"]}>
          <span className={styles["line-1"]}></span>
          <span className={styles["line-2"]}></span>
          <span className={styles["line-3"]}></span>
          <span className={styles["line-4"]}></span>
          <div className={styles["center"]}>
            <span className={styles["line-5"]}></span>
            <span className={styles["line-6"]}></span>
          </div>
        </button>
        <div className={styles["text"]}>Alert</div>
      </div>
      <div className={styles["icon-box"]}>
        <button className={styles["center-text"]}>
          <span className={styles["line-1"]}></span>
          <span className={styles["line-2"]}></span>
          <span className={styles["line-3"]}></span>
          <span className={styles["line-4"]}></span>
        </button>
        <div className={styles["text"]}>Text Center</div>
      </div>
      <div className={styles["icon-box"]}>
        <button className={styles["justify-text"]}>
          <span className={styles["line-1"]}></span>
          <span className={styles["line-2"]}></span>
          <span className={styles["line-3"]}></span>
          <span className={styles["line-4"]}></span>
        </button>
        <div className={styles["text"]}>Text Justify</div>
      </div>
      <div className={styles["icon-box"]}>
        <button className={styles["left-text"]}>
          <span className={styles["line-1"]}></span>
          <span className={styles["line-2"]}></span>
          <span className={styles["line-3"]}></span>
          <span className={styles["line-4"]}></span>
        </button>
        <div className={styles["text"]}>Text Left</div>
      </div>
      <div className={styles["icon-box"]}>
        <button className={styles["right-text"]}>
          <span className={styles["line-1"]}></span>
          <span className={styles["line-2"]}></span>
          <span className={styles["line-3"]}></span>
          <span className={styles["line-4"]}></span>
        </button>
        <div className={styles["text"]}>Text Right</div>
      </div>
      <div className={styles["icon-box"]}>
        <button className={styles["left-arrow"]}>
          <span className={styles["line-1"]}></span>
          <span className={styles["line-2"]}></span>
        </button>
        <div className={styles["text"]}>Left Arrow</div>
      </div>
      <div className={styles["icon-box"]}>
        <button className={styles["right-arrow"]}>
          <span className={styles["line-1"]}></span>
          <span className={styles["line-2"]}></span>
        </button>
        <div className={styles["text"]}>Right Arrow</div>
      </div>
      <div className={styles["icon-box"]}>
        <button className={styles["bottom-arrow"]}>
          <span className={styles["line-1"]}></span>
          <span className={styles["line-2"]}></span>
        </button>
        <div className={styles["text"]}>Bottom Arrow</div>
      </div>
      <div className={styles["icon-box"]}>
        <button className={styles["top-arrow"]}>
          <span className={styles["line-1"]}></span>
          <span className={styles["line-2"]}></span>
        </button>
        <div className={styles["text"]}>Top Arrow</div>
      </div>
      <div className={styles["icon-box"]}>
        <button className={styles["battery-empty"]}>
          <span className={styles["line-1"]}></span>
          <span className={styles["line-2"]}></span>
        </button>
        <div className={styles["text"]}>Battery</div>
      </div>
      <div className={styles["icon-box"]}>
        <button className={styles["battery-charge"]}>
          <span className={styles["line-1"]}></span>
          <span className={styles["line-2"]}></span>
          <span className={styles["line-3"]}></span>
          <span className={styles["line-4"]}></span>
        </button>
        <div className={styles["text"]}>Battery C.</div>
      </div>
      <div className={styles["icon-box"]}>
        <button className={styles["battery"]}>
          <span className={styles["line-1"]}></span>
          <span className={styles["line-2"]}></span>
          <span className={styles["line-3"]}></span>
        </button>
        <div className={styles["text"]}>Battery 50%</div>
      </div>
      <div className={styles["icon-box"]}>
        <button className={styles["battery-full"]}>
          <span className={styles["line-1"]}></span>
          <span className={styles["line-2"]}></span>
          <span className={styles["line-3"]}></span>
        </button>
        <div className={styles["text"]}>Battery Full</div>
      </div>
    </div>
  </div>
);

export default Button_save;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Button_save = () => (
         <div>
          <div className="icons">
  <div className="title">
    <span>O</span>
    <span>N</span>
    <span>L</span>
    <span>Y</span>
    <span>C</span>
    <span>S</span>
    <span>S</span>
  </div>
  <div className="icon-box">
    <button className="activity">
      <span className="line-1"></span>
      <span className="line-2"></span>
      <span className="line-3"></span>
      <span className="line-4"></span>
      <span className="line-5"></span>
    </button>
    <div className="text">Activity</div>
  </div>
  <div className="icon-box">
    <button className="airplay">
      <span className="line-1"></span>
      <span className="line-2"></span>
    </button>
    <div className="text">AirPlay</div>
  </div>
  <div className="icon-box">
    <button className="alert-circle">
      <span className="line-1"></span>
      <span className="line-2"></span>
    </button>
    <div className="text">Alert</div>
  </div>
  <div className="icon-box">
    <button className="alert-octagon">
      <span className="line-1"></span>
      <span className="line-2"></span>
      <span className="line-3"></span>
      <span className="line-4"></span>
      <div className="center">
        <span className="line-5"></span>
        <span className="line-6"></span>
      </div>
    </button>
    <div className="text">Alert</div>
  </div>
  <div className="icon-box">
    <button className="center-text">
      <span className="line-1"></span>
      <span className="line-2"></span>
      <span className="line-3"></span>
      <span className="line-4"></span>
    </button>
    <div className="text">Text Center</div>
  </div>
  <div className="icon-box">
    <button className="justify-text">
      <span className="line-1"></span>
      <span className="line-2"></span>
      <span className="line-3"></span>
      <span className="line-4"></span>
    </button>
    <div className="text">Text Justify</div>
  </div>
  <div className="icon-box">
    <button className="left-text">
      <span className="line-1"></span>
      <span className="line-2"></span>
      <span className="line-3"></span>
      <span className="line-4"></span>
    </button>
    <div className="text">Text Left</div>
  </div>
  <div className="icon-box">
    <button className="right-text">
      <span className="line-1"></span>
      <span className="line-2"></span>
      <span className="line-3"></span>
      <span className="line-4"></span>
    </button>
    <div className="text">Text Right</div>
  </div>
  <div className="icon-box">
    <button className="left-arrow">
      <span className="line-1"></span>
      <span className="line-2"></span>
    </button>
    <div className="text">Left Arrow</div>
  </div>
  <div className="icon-box">
    <button className="right-arrow">
      <span className="line-1"></span>
      <span className="line-2"></span>
    </button>
    <div className="text">Right Arrow</div>
  </div>
  <div className="icon-box">
    <button className="bottom-arrow">
      <span className="line-1"></span>
      <span className="line-2"></span>
    </button>
    <div className="text">Bottom Arrow</div>
  </div>
  <div className="icon-box">
    <button className="top-arrow">
      <span className="line-1"></span>
      <span className="line-2"></span>
    </button>
    <div className="text">Top Arrow</div>
  </div>
  <div className="icon-box">
    <button className="battery-empty">
      <span className="line-1"></span>
      <span className="line-2"></span>
    </button>
    <div className="text">Battery</div>
  </div>
  <div className="icon-box">
    <button className="battery-charge">
      <span className="line-1"></span>
      <span className="line-2"></span>
      <span className="line-3"></span>
      <span className="line-4"></span>
    </button>
    <div className="text">Battery C.</div>
  </div>
  <div className="icon-box">
    <button className="battery">
      <span className="line-1"></span>
      <span className="line-2"></span>
      <span className="line-3"></span>
    </button>
    <div className="text">Battery 50%</div>
  </div>
  <div className="icon-box">
    <button className="battery-full">
      <span className="line-1"></span>
      <span className="line-2"></span>
      <span className="line-3"></span>
    </button>
    <div className="text">Battery Full</div>
  </div>
</div>
        </div>
        );

        export default Button_save;
        
        
         */
}
