import React from "react";
import styles from "./Card_alive.module.css";

const Card_alive = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card-top"]}>
        <p className={styles["card__title"]}>Rick And Morty</p>
        <div className={styles["rating"]}>
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
            <path
              d="M8.51948 1.625C9.1214 1.625 10.0427 4.16625 10.4636 5.43013C10.6014 5.8437 10.9837 6.13054 11.4192 6.14904C12.7373 6.20505 15.375 6.39722 15.375 7.0384C15.375 7.66696 13.5161 9.17543 12.5322 9.92976C12.1816 10.1986 12.0365 10.6604 12.1687 11.082C12.5631 12.34 13.2755 14.8755 12.7573 15.3009C12.2506 15.717 10.2147 14.2326 9.15246 13.4009C8.77021 13.1016 8.22949 13.1012 7.84719 13.4004C6.78473 14.2321 4.75246 15.717 4.28166 15.3009C3.79912 14.8745 4.47615 12.3275 4.84741 11.0727C4.97086 10.6555 4.82425 10.2029 4.47885 9.93826C3.49798 9.18681 1.625 7.66933 1.625 7.0384C1.625 6.3962 4.2711 6.20444 5.5871 6.14878C6.0197 6.13048 6.3998 5.84769 6.53973 5.43793C6.97041 4.17673 7.91633 1.625 8.51948 1.625Z"
              fill="#00B9AE"
              stroke="#00B9AE"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </div>
      <div className={styles["card__info"]}>
        <p className={styles["episode__num"]}>46Ep</p>
        <p className={styles["episode__type"]}>Fantasy</p>
      </div>
      <div className={styles["card__btns"]}>
        <button className={styles["add-btn"]}>+</button>
        <button className={styles["watch-btn"]}>watch</button>
      </div>
    </div>
  </div>
);

export default Card_alive;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_alive = () => (
         <div>
          <div className="card">
    <div className="card-top">
        <p className="card__title">Rick And Morty</p>
        <div className="rating">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M8.51948 1.625C9.1214 1.625 10.0427 4.16625 10.4636 5.43013C10.6014 5.8437 10.9837 6.13054 11.4192 6.14904C12.7373 6.20505 15.375 6.39722 15.375 7.0384C15.375 7.66696 13.5161 9.17543 12.5322 9.92976C12.1816 10.1986 12.0365 10.6604 12.1687 11.082C12.5631 12.34 13.2755 14.8755 12.7573 15.3009C12.2506 15.717 10.2147 14.2326 9.15246 13.4009C8.77021 13.1016 8.22949 13.1012 7.84719 13.4004C6.78473 14.2321 4.75246 15.717 4.28166 15.3009C3.79912 14.8745 4.47615 12.3275 4.84741 11.0727C4.97086 10.6555 4.82425 10.2029 4.47885 9.93826C3.49798 9.18681 1.625 7.66933 1.625 7.0384C1.625 6.3962 4.2711 6.20444 5.5871 6.14878C6.0197 6.13048 6.3998 5.84769 6.53973 5.43793C6.97041 4.17673 7.91633 1.625 8.51948 1.625Z" fill="#00B9AE" stroke="#00B9AE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </div>
    </div>
    <div className="card__info">
        <p className="episode__num">46Ep</p>
        <p className="episode__type">Fantasy</p>
    </div>
    <div className="card__btns">
        <button className="add-btn">+</button>
        <button className="watch-btn">watch</button>
    </div>
</div>
        </div>
        );

        export default Card_alive;
        
        
         */
}
