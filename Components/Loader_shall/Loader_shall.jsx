import React from "react";
import styles from "./Loader_shall.module.css";

const Loader_shall = () => (
  <div>
    <div className={styles["orbit"]}>
      <ul className={styles["orbit-wrap"]}>
        <li className={styles["orbit-center"]}>
          <i
            className={
              styles["orbit-center__icon"] + styles["fa"] + styles["fa-code"]
            }
          ></i>
        </li>

        <li>
          <ul className={styles["ring-0"]}>
            <li>
              <i
                className={
                  styles["orbit-icon"] + styles["fa"] + styles["fa-git"]
                }
              ></i>
            </li>
            <li>
              <i
                className={
                  styles["orbit-icon"] +
                  styles["fa"] +
                  styles["fa-free-code-camp"]
                }
              ></i>
            </li>
            <li>
              <i
                className={
                  styles["orbit-icon"] + styles["fa"] + styles["fa-meetup"]
                }
              ></i>
            </li>
            <li>
              <i
                className={
                  styles["orbit-icon"] + styles["fa"] + styles["fa-codepen"]
                }
              ></i>
            </li>
          </ul>
        </li>

        <li>
          <ul className={styles["ring-1"]}>
            <li>
              <i
                className={
                  styles["orbit-icon"] + styles["fa"] + styles["fa-podcast"]
                }
              ></i>
            </li>
            <li>
              <i
                className={
                  styles["orbit-icon"] + styles["fa"] + styles["fa-css3"]
                }
              ></i>
            </li>
            <li>
              <i
                className={
                  styles["orbit-icon"] + styles["fa"] + styles["fa-html5"]
                }
              ></i>
            </li>
          </ul>
        </li>
        <li>
          <ul className={styles["ring-2"]}>
            <li>
              <i
                className={
                  styles["orbit-icon"] + styles["fa"] + styles["fa-windows"]
                }
              ></i>
            </li>
            <li>
              <i
                className={
                  styles["orbit-icon"] + styles["fa"] + styles["fa-safari"]
                }
              ></i>
            </li>
            <li>
              <i
                className={
                  styles["orbit-icon"] + styles["fa"] + styles["fa-edge"]
                }
              ></i>
            </li>
            <li>
              <i
                className={
                  styles["orbit-icon"] + styles["fa"] + styles["fa-linux"]
                }
              ></i>
            </li>
            <li>
              <i
                className={
                  styles["orbit-icon"] + styles["fa"] + styles["fa-apple"]
                }
              ></i>
            </li>
            <li>
              <i
                className={
                  styles["orbit-icon"] + styles["fa"] + styles["fa-chrome"]
                }
              ></i>
            </li>
            <li>
              <i
                className={
                  styles["orbit-icon"] + styles["fa"] + styles["fa-android"]
                }
              ></i>
            </li>
            <li>
              <i
                className={
                  styles["orbit-icon"] + styles["fa"] + styles["fa-firefox"]
                }
              ></i>
            </li>
          </ul>
        </li>
        <li>
          <ul className={styles["ring-3"]}>
            <li>
              <i
                className={
                  styles["orbit-icon"] + styles["fa"] + styles["fa-coffee"]
                }
              ></i>
            </li>
            <li>
              <i
                className={
                  styles["orbit-icon"] + styles["fa"] + styles["fa-terminal"]
                }
              ></i>
            </li>
            <li>
              <i
                className={
                  styles["orbit-icon"] + styles["fa"] + styles["fa-heart-o"]
                }
              ></i>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
);

export default Loader_shall;
{
  /* Since module.css isn't scoped globally, if the css is not getting applied properly delete the code above and uncomment the code below and paste the css in your global.css file it should work */
}
{
  /*
            
        import React from 'react';

        const Loader_shall = () => (
         <div>
          <div className="orbit">
  
  <ul className="orbit-wrap">
    
    <li className="orbit-center">
      <i className="orbit-center__icon fa fa-code"></i>
    </li>

    <li>
      <ul className="ring-0">
        <li><i className="orbit-icon fa fa-git"></i></li>
        <li><i className="orbit-icon fa fa-free-code-camp"></i></li>
        <li><i className="orbit-icon fa fa-meetup"></i></li>
        <li><i className="orbit-icon fa fa-codepen"></i></li>
      </ul>
    </li>

    <li>
      <ul className="ring-1">
        <li><i className="orbit-icon fa fa-podcast"></i></li>
        <li><i className="orbit-icon fa fa-css3"></i></li>
        <li><i className="orbit-icon fa fa-html5"></i></li>
      </ul>
    </li>
    <li>
      <ul className="ring-2">
        <li><i className="orbit-icon fa fa-windows"></i></li>
        <li><i className="orbit-icon fa fa-safari"></i></li>
        <li><i className="orbit-icon fa fa-edge"></i></li>
        <li><i className="orbit-icon fa fa-linux"></i></li>
        <li><i className="orbit-icon fa fa-apple"></i></li>
        <li><i className="orbit-icon fa fa-chrome"></i></li>
        <li><i className="orbit-icon fa fa-android"></i></li>
        <li><i className="orbit-icon fa fa-firefox"></i></li>
      </ul>
    </li>
    <li>
      <ul className="ring-3">
        <li><i className="orbit-icon fa fa-coffee"></i></li>
        <li><i className="orbit-icon fa fa-terminal"></i></li>
        <li><i className="orbit-icon fa fa-heart-o"></i></li>
      </ul>
    </li>

  </ul>
  
</div>
        </div>
        );

        export default Loader_shall;
        
        
         */
}
