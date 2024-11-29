import React from "react";
import styles from "./Card_snow.module.css";

const Card_snow = () => (
  <div>
    <div className={styles["main_wrapper"]}>
      <div className={styles["main"]}>
        <div className={styles["antenna"]}>
          <div className={styles["antenna_shadow"]}></div>
          <div className={styles["a1"]}></div>
          <div className={styles["a1d"]}></div>
          <div className={styles["a2"]}></div>
          <div className={styles["a2d"]}></div>
          <div className={styles["a_base"]}></div>
        </div>
        <div className={styles["tv"]}>
          <div className={styles["cruve"]}>
            <svg
              xml:space="preserve"
              viewBox="0 0 189.929 189.929"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              className={styles["curve_svg"]}
            >
              <path
                d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
              ></path>
            </svg>
          </div>
          <div className={styles["display_div"]}>
            <div className={styles["screen_out"]}>
              <div className={styles["screen_out1"]}>
                <div className={styles["screen"]}>
                  <span className={styles["notfound_text"]}> NOT FOUND</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["lines"]}>
            <div className={styles["line1"]}></div>
            <div className={styles["line2"]}></div>
            <div className={styles["line3"]}></div>
          </div>
          <div className={styles["buttons_div"]}>
            <div className={styles["b1"]}>
              <div></div>
            </div>
            <div className={styles["b2"]}></div>
            <div className={styles["speakers"]}>
              <div className={styles["g1"]}>
                <div className={styles["g11"]}></div>
                <div className={styles["g12"]}></div>
                <div className={styles["g13"]}></div>
              </div>
              <div className={styles["g"]}></div>
              <div className={styles["g"]}></div>
            </div>
          </div>
        </div>
        <div className={styles["bottom"]}>
          <div className={styles["base1"]}></div>
          <div className={styles["base2"]}></div>
          <div className={styles["base3"]}></div>
        </div>
      </div>
      <div className={styles["text_404"]}>
        <div className={styles["text_4041"]}>4</div>
        <div className={styles["text_4042"]}>0</div>
        <div className={styles["text_4043"]}>4</div>
      </div>
    </div>
  </div>
);

export default Card_snow;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_snow = () => (
         <div>
          <div className="main_wrapper">
  <div className="main">
    <div className="antenna">
      <div className="antenna_shadow"></div>
      <div className="a1"></div>
      <div className="a1d"></div>
      <div className="a2"></div>
      <div className="a2d"></div>
      <div className="a_base"></div>
    </div>
    <div className="tv">
      <div className="cruve">
        <svg
          xml:space="preserve"
          viewBox="0 0 189.929 189.929"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="curve_svg"
        >
          <path
            d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
          ></path>
        </svg>
      </div>
      <div className="display_div">
        <div className="screen_out">
          <div className="screen_out1">
            <div className="screen">
              <span className="notfound_text"> NOT FOUND</span>
            </div>
          </div>
        </div>
      </div>
      <div className="lines">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="buttons_div">
        <div className="b1"><div></div></div>
        <div className="b2"></div>
        <div className="speakers">
          <div className="g1">
            <div className="g11"></div>
            <div className="g12"></div>
            <div className="g13"></div>
          </div>
          <div className="g"></div>
          <div className="g"></div>
        </div>
      </div>
    </div>
    <div className="bottom">
      <div className="base1"></div>
      <div className="base2"></div>
      <div className="base3"></div>
    </div>
  </div>
  <div className="text_404">
    <div className="text_4041">4</div>
    <div className="text_4042">0</div>
    <div className="text_4043">4</div>
  </div>
</div>
        </div>
        );

        export default Card_snow;
        
        
         */
}
