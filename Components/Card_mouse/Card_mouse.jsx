import React from "react";
import styles from "./Card_mouse.module.css";

const Card_mouse = () => (
  <div>
    <div className={styles["container"]}>
      <div className={styles["card"]}>
        <span className={styles["logo"]}>
          <svg
            viewBox="0 0 256 83"
            height="83"
            width="256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                y2="100%"
                y1="-2.006%"
                x2="54.877%"
                x1="45.974%"
                id="logosVisa0"
              >
                <stop stop-color="#222357" offset="0%"></stop>
                <stop stop-color="#254AA5" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              transform="matrix(1 0 0 -1 0 82.668)"
              d="M132.397 56.24c-.146-11.516 10.263-17.942 18.104-21.763c8.056-3.92 10.762-6.434 10.73-9.94c-.06-5.365-6.426-7.733-12.383-7.825c-10.393-.161-16.436 2.806-21.24 5.05l-3.744-17.519c4.82-2.221 13.745-4.158 23-4.243c21.725 0 35.938 10.724 36.015 27.351c.085 21.102-29.188 22.27-28.988 31.702c.069 2.86 2.798 5.912 8.778 6.688c2.96.392 11.131.692 20.395-3.574l3.636 16.95c-4.982 1.814-11.385 3.551-19.357 3.551c-20.448 0-34.83-10.87-34.946-26.428m89.241 24.968c-3.967 0-7.31-2.314-8.802-5.865L181.803 1.245h21.709l4.32 11.939h26.528l2.506-11.939H256l-16.697 79.963h-17.665m3.037-21.601l6.265-30.027h-17.158l10.893 30.027m-118.599 21.6L88.964 1.246h20.687l17.104 79.963h-20.679m-30.603 0L53.941 26.782l-8.71 46.277c-1.022 5.166-5.058 8.149-9.54 8.149H.493L0 78.886c7.226-1.568 15.436-4.097 20.41-6.803c3.044-1.653 3.912-3.098 4.912-7.026L41.819 1.245H63.68l33.516 79.963H75.473"
              fill="url(#logosVisa0)"
            ></path>
          </svg>
        </span>

        <span className={styles["number"]}>
          <div className={styles["wave-group"]}>
            <span className={styles["label-char"]} style="--index: 0">
              card
            </span>
            <span className={styles["label-char"]} style="--index: 1">
              number
            </span>
            <input required="" type="text" className={styles["input"]} />
            <span className={styles["bar"]}></span>
            <label className={styles["label"]}>
              <br />
            </label>
          </div>
        </span>
        <span className={styles["owner"]}>Thomas.F</span>
      </div>
    </div>
  </div>
);

export default Card_mouse;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_mouse = () => (
         <div>
          <div className="container">
  <div className="card">
    <span className="logo"
      ><svg
        viewBox="0 0 256 83"
        height="83"
        width="256"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            y2="100%"
            y1="-2.006%"
            x2="54.877%"
            x1="45.974%"
            id="logosVisa0"
          >
            <stop stop-color="#222357" offset="0%"></stop>
            <stop stop-color="#254AA5" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          transform="matrix(1 0 0 -1 0 82.668)"
          d="M132.397 56.24c-.146-11.516 10.263-17.942 18.104-21.763c8.056-3.92 10.762-6.434 10.73-9.94c-.06-5.365-6.426-7.733-12.383-7.825c-10.393-.161-16.436 2.806-21.24 5.05l-3.744-17.519c4.82-2.221 13.745-4.158 23-4.243c21.725 0 35.938 10.724 36.015 27.351c.085 21.102-29.188 22.27-28.988 31.702c.069 2.86 2.798 5.912 8.778 6.688c2.96.392 11.131.692 20.395-3.574l3.636 16.95c-4.982 1.814-11.385 3.551-19.357 3.551c-20.448 0-34.83-10.87-34.946-26.428m89.241 24.968c-3.967 0-7.31-2.314-8.802-5.865L181.803 1.245h21.709l4.32 11.939h26.528l2.506-11.939H256l-16.697 79.963h-17.665m3.037-21.601l6.265-30.027h-17.158l10.893 30.027m-118.599 21.6L88.964 1.246h20.687l17.104 79.963h-20.679m-30.603 0L53.941 26.782l-8.71 46.277c-1.022 5.166-5.058 8.149-9.54 8.149H.493L0 78.886c7.226-1.568 15.436-4.097 20.41-6.803c3.044-1.653 3.912-3.098 4.912-7.026L41.819 1.245H63.68l33.516 79.963H75.473"
          fill="url(#logosVisa0)"
        ></path></svg
    ></span>

    <span className="number">
      <div className="wave-group">
        <span className="label-char" style="--index: 0">card</span>
        <span className="label-char" style="--index: 1">number</span>
        <input required="" type="text" className="input" />
        <span className="bar"></span>
        <label className="label">
          <br />
        </label>
      </div>
    </span>
    <span className="owner">Thomas.F</span>
  </div>
</div>
        </div>
        );

        export default Card_mouse;
        
        
         */
}
