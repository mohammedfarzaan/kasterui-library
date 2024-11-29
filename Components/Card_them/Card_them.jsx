import React from "react";
import styles from "./Card_them.module.css";

const Card_them = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card__img"]}>
        <svg
          viewBox="0 0 128 128"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect
            className={styles["st1"]}
            height="78.6"
            transform="matrix(0.9761 0.2175 -0.2175 0.9761 15.4391 -12.3278)"
            width="101.2"
            x="13.1"
            y="24.7"
          ></rect>
          <rect
            className={styles["st53"]}
            height="78.6"
            transform="matrix(0.9761 0.2175 -0.2175 0.9761 15.4391 -12.3278)"
            width="101.2"
            x="13.1"
            y="24.7"
          ></rect>
          <polygon
            className={styles["st16"]}
            points="116,62 116,35.4 38.1,18 22.1,18 5.8,91.3 76.2,107 106,107"
          ></polygon>
          <polygon
            className={styles["st1"]}
            points="97.2,23 10,23 10,102 111,102 111,36.8"
          ></polygon>
          <polygon
            className={styles["st53"]}
            points="97.2,23 10,23 10,102 111,102 111,36.8"
          ></polygon>
          <g>
            <rect
              className={styles["st7"]}
              height="58"
              width="80"
              x="20"
              y="34"
            ></rect>
            <g>
              <polygon
                className={styles["st9"]}
                points="100.2,92 73.1,44.2 51.2,75.5 40,58.7 20.2,92 39.7,92"
              ></polygon>
              <circle
                className={styles["st18"]}
                cx="57"
                cy="52"
                r="11"
              ></circle>
              <polygon
                className={styles["st1"]}
                points="40,58.5 31.6,72.6 34.6,78.2 37.9,75.2 43.5,79.9 47,78.2 51,75.2"
              ></polygon>
              <path
                className={styles["st1"]}
                d="M57.7,66c0,0,4.1,7.2,4.3,6.6c0.2-0.6,6.1-5.6,6.1-5.6l6.9,3.6l1.5-10.3L88.9,72L73.1,44.1L57.7,66z"
              ></path>
              <polygon
                className={styles["st15"]}
                points="73.1,44.2 83.6,92 100.2,92"
              ></polygon>
              <polyline
                className={styles["st2"]}
                points="100.2,91.9 73.1,44.1 39.7,91.9"
              ></polyline>
              <polyline
                className={styles["st2"]}
                points="51.2,75.4 40,58.5 20.2,91.9"
              ></polyline>
              <polygon
                className={styles["st15"]}
                points="51.2,75.4 40,58.5 47,81.3"
              ></polygon>
              <polyline
                className={styles["st2"]}
                points="51.5,91.9 67.1,70.5 80.4,91.9"
              ></polyline>
              <polygon
                className={styles["st15"]}
                points="72.3,92 67.1,70.7 80.4,92"
              ></polygon>
            </g>
            <rect
              className={styles["st53"]}
              height="58"
              width="80"
              x="20"
              y="34"
            ></rect>
          </g>
          <polygon
            className={styles["st18"]}
            points="111,37 97,37 97,23"
          ></polygon>
          <polygon
            className={styles["st53"]}
            points="111,37 97,37 97,23"
          ></polygon>
        </svg>
      </div>
      <div className={styles["card__subtitle"]}>Type of work</div>
      <div className={styles["card__wrapper"]}>
        <div className={styles["card__title"]}>Project name</div>
        <div className={styles["card__icon"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            style={{
              userSelect: "none",
              width: "100%",
              height: "100%",
              display: "inline-block",
              fill: "rgb(224, 223, 220)",
              flexShrink: "0",
              cursor: "auto",
            }}
            color="rgb(224, 223, 220)"
          >
            <g color="rgb(224, 223, 220)">
              <circle cx="128" cy="128" r="96" opacity="0.2"></circle>
              <circle
                cx="128"
                cy="128"
                r="96"
                fill="none"
                stroke="rgb(224, 223, 220)"
                stroke-miterlimit="10"
                strokeWidth="16"
              ></circle>
              <polyline
                points="134.1 161.9 168 128 134.1 94.1"
                fill="none"
                stroke="rgb(224, 223, 220)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></polyline>
              <line
                x1="88"
                y1="128"
                x2="168"
                y2="128"
                fill="none"
                stroke="rgb(224, 223, 220)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              ></line>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default Card_them;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_them = () => (
         <div>
          <div className="card">
    <div className="card__img"><svg viewBox="0 0 128 128" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><rect className="st1" height="78.6" transform="matrix(0.9761 0.2175 -0.2175 0.9761 15.4391 -12.3278)" width="101.2" x="13.1" y="24.7"></rect><rect className="st53" height="78.6" transform="matrix(0.9761 0.2175 -0.2175 0.9761 15.4391 -12.3278)" width="101.2" x="13.1" y="24.7"></rect><polygon className="st16" points="116,62 116,35.4 38.1,18 22.1,18 5.8,91.3 76.2,107 106,107"></polygon><polygon className="st1" points="97.2,23 10,23 10,102 111,102 111,36.8"></polygon><polygon className="st53" points="97.2,23 10,23 10,102 111,102 111,36.8"></polygon><g><rect className="st7" height="58" width="80" x="20" y="34"></rect><g><polygon className="st9" points="100.2,92 73.1,44.2 51.2,75.5 40,58.7 20.2,92 39.7,92"></polygon><circle className="st18" cx="57" cy="52" r="11"></circle><polygon className="st1" points="40,58.5 31.6,72.6 34.6,78.2 37.9,75.2 43.5,79.9 47,78.2 51,75.2"></polygon><path className="st1" d="M57.7,66c0,0,4.1,7.2,4.3,6.6c0.2-0.6,6.1-5.6,6.1-5.6l6.9,3.6l1.5-10.3L88.9,72L73.1,44.1L57.7,66z"></path><polygon className="st15" points="73.1,44.2 83.6,92 100.2,92"></polygon><polyline className="st2" points="100.2,91.9 73.1,44.1 39.7,91.9"></polyline><polyline className="st2" points="51.2,75.4 40,58.5 20.2,91.9"></polyline><polygon className="st15" points="51.2,75.4 40,58.5 47,81.3"></polygon><polyline className="st2" points="51.5,91.9 67.1,70.5 80.4,91.9"></polyline><polygon className="st15" points="72.3,92 67.1,70.7 80.4,92"></polygon></g><rect className="st53" height="58" width="80" x="20" y="34"></rect></g><polygon className="st18" points="111,37 97,37 97,23"></polygon><polygon className="st53" points="111,37 97,37 97,23"></polygon></svg></div>
    <div className="card__subtitle">Type of work</div>
    <div className="card__wrapper">
        <div className="card__title">Project name</div>
        <div className="card__icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" style={{userSelect:"none",width:"100%",height:"100%",display:"inline-block",fill:"rgb(224, 223, 220)",flexShrink:"0",cursor:"auto"}} color="rgb(224, 223, 220)"><g color="rgb(224, 223, 220)"><circle cx="128" cy="128" r="96" opacity="0.2"></circle><circle cx="128" cy="128" r="96" fill="none" stroke="rgb(224, 223, 220)" stroke-miterlimit="10" strokeWidth="16"></circle><polyline points="134.1 161.9 168 128 134.1 94.1" fill="none" stroke="rgb(224, 223, 220)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline><line x1="88" y1="128" x2="168" y2="128" fill="none" stroke="rgb(224, 223, 220)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line></g></svg></div>

    </div>
</div>
        </div>
        );

        export default Card_them;
        
        
         */
}
