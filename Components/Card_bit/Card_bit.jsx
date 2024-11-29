import React from "react";
import styles from "./Card_bit.module.css";

const Card_bit = () => (
  <div>
    <div className={styles["cards"]}>
      <div className={styles["outlinePage"]}>
        <svg
          className={styles["icon"] + styles["trophy"]}
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="160"
          height="160"
        >
          <path
            d="M469.333333 682.666667h85.333334v128h-85.333334zM435.2 810.666667h153.6c4.693333 0 8.533333 3.84 8.533333 8.533333v34.133333h-170.666666v-34.133333c0-4.693333 3.84-8.533333 8.533333-8.533333z"
            fill="#ea9518"
            data-spm-anchor-id="a313x.search_index.0.i10.40193a81WcxQiT"
            class=""
          ></path>
          <path
            d="M384 853.333333h256a42.666667 42.666667 0 0 1 42.666667 42.666667v42.666667H341.333333v-42.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z"
            fill="#6e4a32"
            data-spm-anchor-id="a313x.search_index.0.i1.40193a81WcxQiT"
            class=""
          ></path>
          <path
            d="M213.333333 256v85.333333a42.666667 42.666667 0 0 0 85.333334 0V256H213.333333zM170.666667 213.333333h170.666666v128a85.333333 85.333333 0 1 1-170.666666 0V213.333333zM725.333333 256v85.333333a42.666667 42.666667 0 0 0 85.333334 0V256h-85.333334z m-42.666666-42.666667h170.666666v128a85.333333 85.333333 0 1 1-170.666666 0V213.333333z"
            fill="#f4ea2a"
            data-spm-anchor-id="a313x.search_index.0.i9.40193a81WcxQiT"
            class=""
          ></path>
          <path
            d="M298.666667 85.333333h426.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v341.333333a256 256 0 1 1-512 0V128a42.666667 42.666667 0 0 1 42.666667-42.666667z"
            fill="#f2be45"
            data-spm-anchor-id="a313x.search_index.0.i5.40193a81WcxQiT"
            class=""
          ></path>
          <path
            d="M512 469.333333l-100.309333 52.736 19.157333-111.701333-81.152-79.104 112.128-16.298667L512 213.333333l50.176 101.632 112.128 16.298667-81.152 79.104 19.157333 111.701333z"
            fill="#FFF2A0"
          ></path>
        </svg>
        <p className={styles["ranking_number"]}>
          1<span className={styles["ranking_word"]}>st</span>
        </p>
        <div className={styles["splitLine"]}></div>
        <svg
          className={styles["icon"] + styles["userAvatar"]}
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
        >
          <path
            d="M512 0C228.693 0 0 228.693 0 512s228.693 512 512 512 512-228.693 512-512S795.307 0 512 0z m0 69.973c244.053 0 442.027 197.973 442.027 442.027 0 87.04-25.6 168.96-69.973 237.227-73.387-78.507-170.667-133.12-281.6-151.893 69.973-34.133 119.467-105.813 119.467-187.733 0-116.053-93.867-209.92-209.92-209.92s-209.92 93.867-209.92 209.92c0 83.627 47.787 155.307 119.467 187.733-110.933 20.48-208.213 75.093-281.6 153.6-44.373-68.267-69.973-150.187-69.973-238.933 0-244.053 197.973-442.027 442.027-442.027z"
            fill="#8a8a8a"
          ></path>
        </svg>
        <p className={styles["userName"]}>Jessie Ben</p>
      </div>
      <div className={styles["detailPage"]}>
        <svg
          className={styles["icon"] + styles["medals"] + styles["slide-in-top"]}
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
        >
          <path
            d="M896 42.666667h-128l-170.666667 213.333333h128z"
            fill="#FF4C4C"
          ></path>
          <path
            d="M768 42.666667h-128l-170.666667 213.333333h128z"
            fill="#3B8CFF"
          ></path>
          <path
            d="M640 42.666667h-128L341.333333 256h128z"
            fill="#F1F1F1"
          ></path>
          <path
            d="M128 42.666667h128l170.666667 213.333333H298.666667z"
            fill="#FF4C4C"
          ></path>
          <path
            d="M256 42.666667h128l170.666667 213.333333h-128z"
            fill="#3B8CFF"
          ></path>
          <path
            d="M384 42.666667h128l170.666667 213.333333h-128z"
            fill="#FBFBFB"
          ></path>
          <path
            d="M298.666667 256h426.666666v213.333333H298.666667z"
            fill="#E3A815"
          ></path>
          <path
            d="M512 661.333333m-320 0a320 320 0 1 0 640 0 320 320 0 1 0-640 0Z"
            fill="#FDDC3A"
          ></path>
          <path
            d="M512 661.333333m-256 0a256 256 0 1 0 512 0 256 256 0 1 0-512 0Z"
            fill="#E3A815"
          ></path>
          <path
            d="M512 661.333333m-213.333333 0a213.333333 213.333333 0 1 0 426.666666 0 213.333333 213.333333 0 1 0-426.666666 0Z"
            fill="#F5CF41"
          ></path>
          <path
            d="M277.333333 256h469.333334a21.333333 21.333333 0 0 1 0 42.666667h-469.333334a21.333333 21.333333 0 0 1 0-42.666667z"
            fill="#D19A0E"
          ></path>
          <path
            d="M277.333333 264.533333a12.8 12.8 0 1 0 0 25.6h469.333334a12.8 12.8 0 1 0 0-25.6h-469.333334z m0-17.066666h469.333334a29.866667 29.866667 0 1 1 0 59.733333h-469.333334a29.866667 29.866667 0 1 1 0-59.733333z"
            fill="#F9D525"
          ></path>
          <path
            d="M512 746.666667l-100.309333 52.736 19.157333-111.701334-81.152-79.104 112.128-16.298666L512 490.666667l50.176 101.632 112.128 16.298666-81.152 79.104 19.157333 111.701334z"
            fill="#FFF2A0"
          ></path>
        </svg>
        <div className={styles["gradesBox"]}>
          <svg
            className={styles["icon"] + styles["gradesIcon"]}
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
          >
            <path
              d="M382.6 805H242.2c-6.7 0-12.2-5.5-12.2-12.2V434.3c0-6.7 5.5-12.2 12.2-12.2h140.4c6.7 0 12.2 5.5 12.2 12.2v358.6c0 6.6-5.4 12.1-12.2 12.1z"
              fill="#ea9518"
              data-spm-anchor-id="a313x.search_index.0.i36.40193a81WcxQiT"
              class=""
            ></path>
            <path
              d="M591.1 805H450.7c-6.7 0-12.2-5.5-12.2-12.2V254.9c0-6.7 5.5-12.2 12.2-12.2h140.4c6.7 0 12.2 5.5 12.2 12.2v537.9c0 6.7-5.5 12.2-12.2 12.2z"
              fill="#f2be45"
              data-spm-anchor-id="a313x.search_index.0.i35.40193a81WcxQiT"
              class=""
            ></path>
            <path
              d="M804.4 805H663.9c-6.7 0-12.2-5.5-12.2-12.2v-281c0-6.7 5.5-12.2 12.2-12.2h140.4c6.7 0 12.2 5.5 12.2 12.2v281c0.1 6.7-5.4 12.2-12.1 12.2z"
              fill="#ea9518"
              data-spm-anchor-id="a313x.search_index.0.i37.40193a81WcxQiT"
              class=""
            ></path>
          </svg>
          <p className={styles["gradesBoxLabel"]}>SCORE</p>
          <p className={styles["gradesBoxNum"]}>1105</p>
        </div>
      </div>
    </div>
  </div>
);

export default Card_bit;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_bit = () => (
         <div>
          <div className="cards">
  <div className="outlinePage">
    <svg
      className="icon trophy"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="160"
      height="160"
    >
      <path
        d="M469.333333 682.666667h85.333334v128h-85.333334zM435.2 810.666667h153.6c4.693333 0 8.533333 3.84 8.533333 8.533333v34.133333h-170.666666v-34.133333c0-4.693333 3.84-8.533333 8.533333-8.533333z"
        fill="#ea9518"
        data-spm-anchor-id="a313x.search_index.0.i10.40193a81WcxQiT"
        class=""
      ></path>
      <path
        d="M384 853.333333h256a42.666667 42.666667 0 0 1 42.666667 42.666667v42.666667H341.333333v-42.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z"
        fill="#6e4a32"
        data-spm-anchor-id="a313x.search_index.0.i1.40193a81WcxQiT"
        class=""
      ></path>
      <path
        d="M213.333333 256v85.333333a42.666667 42.666667 0 0 0 85.333334 0V256H213.333333zM170.666667 213.333333h170.666666v128a85.333333 85.333333 0 1 1-170.666666 0V213.333333zM725.333333 256v85.333333a42.666667 42.666667 0 0 0 85.333334 0V256h-85.333334z m-42.666666-42.666667h170.666666v128a85.333333 85.333333 0 1 1-170.666666 0V213.333333z"
        fill="#f4ea2a"
        data-spm-anchor-id="a313x.search_index.0.i9.40193a81WcxQiT"
        class=""
      ></path>
      <path
        d="M298.666667 85.333333h426.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v341.333333a256 256 0 1 1-512 0V128a42.666667 42.666667 0 0 1 42.666667-42.666667z"
        fill="#f2be45"
        data-spm-anchor-id="a313x.search_index.0.i5.40193a81WcxQiT"
        class=""
      ></path>
      <path
        d="M512 469.333333l-100.309333 52.736 19.157333-111.701333-81.152-79.104 112.128-16.298667L512 213.333333l50.176 101.632 112.128 16.298667-81.152 79.104 19.157333 111.701333z"
        fill="#FFF2A0"
      ></path>
    </svg>
    <p className="ranking_number">1<span className="ranking_word">st</span></p>
    <div className="splitLine"></div>
    <svg
      className="icon userAvatar"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
    >
      <path
        d="M512 0C228.693 0 0 228.693 0 512s228.693 512 512 512 512-228.693 512-512S795.307 0 512 0z m0 69.973c244.053 0 442.027 197.973 442.027 442.027 0 87.04-25.6 168.96-69.973 237.227-73.387-78.507-170.667-133.12-281.6-151.893 69.973-34.133 119.467-105.813 119.467-187.733 0-116.053-93.867-209.92-209.92-209.92s-209.92 93.867-209.92 209.92c0 83.627 47.787 155.307 119.467 187.733-110.933 20.48-208.213 75.093-281.6 153.6-44.373-68.267-69.973-150.187-69.973-238.933 0-244.053 197.973-442.027 442.027-442.027z"
        fill="#8a8a8a"
      ></path>
    </svg>
    <p className="userName">Jessie Ben</p>
  </div>
  <div className="detailPage">
    <svg
      className="icon medals slide-in-top"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
    >
      <path
        d="M896 42.666667h-128l-170.666667 213.333333h128z"
        fill="#FF4C4C"
      ></path>
      <path
        d="M768 42.666667h-128l-170.666667 213.333333h128z"
        fill="#3B8CFF"
      ></path>
      <path d="M640 42.666667h-128L341.333333 256h128z" fill="#F1F1F1"></path>
      <path
        d="M128 42.666667h128l170.666667 213.333333H298.666667z"
        fill="#FF4C4C"
      ></path>
      <path
        d="M256 42.666667h128l170.666667 213.333333h-128z"
        fill="#3B8CFF"
      ></path>
      <path
        d="M384 42.666667h128l170.666667 213.333333h-128z"
        fill="#FBFBFB"
      ></path>
      <path
        d="M298.666667 256h426.666666v213.333333H298.666667z"
        fill="#E3A815"
      ></path>
      <path
        d="M512 661.333333m-320 0a320 320 0 1 0 640 0 320 320 0 1 0-640 0Z"
        fill="#FDDC3A"
      ></path>
      <path
        d="M512 661.333333m-256 0a256 256 0 1 0 512 0 256 256 0 1 0-512 0Z"
        fill="#E3A815"
      ></path>
      <path
        d="M512 661.333333m-213.333333 0a213.333333 213.333333 0 1 0 426.666666 0 213.333333 213.333333 0 1 0-426.666666 0Z"
        fill="#F5CF41"
      ></path>
      <path
        d="M277.333333 256h469.333334a21.333333 21.333333 0 0 1 0 42.666667h-469.333334a21.333333 21.333333 0 0 1 0-42.666667z"
        fill="#D19A0E"
      ></path>
      <path
        d="M277.333333 264.533333a12.8 12.8 0 1 0 0 25.6h469.333334a12.8 12.8 0 1 0 0-25.6h-469.333334z m0-17.066666h469.333334a29.866667 29.866667 0 1 1 0 59.733333h-469.333334a29.866667 29.866667 0 1 1 0-59.733333z"
        fill="#F9D525"
      ></path>
      <path
        d="M512 746.666667l-100.309333 52.736 19.157333-111.701334-81.152-79.104 112.128-16.298666L512 490.666667l50.176 101.632 112.128 16.298666-81.152 79.104 19.157333 111.701334z"
        fill="#FFF2A0"
      ></path>
    </svg>
    <div className="gradesBox">
      <svg
        className="icon gradesIcon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
      >
        <path
          d="M382.6 805H242.2c-6.7 0-12.2-5.5-12.2-12.2V434.3c0-6.7 5.5-12.2 12.2-12.2h140.4c6.7 0 12.2 5.5 12.2 12.2v358.6c0 6.6-5.4 12.1-12.2 12.1z"
          fill="#ea9518"
          data-spm-anchor-id="a313x.search_index.0.i36.40193a81WcxQiT"
          class=""
        ></path>
        <path
          d="M591.1 805H450.7c-6.7 0-12.2-5.5-12.2-12.2V254.9c0-6.7 5.5-12.2 12.2-12.2h140.4c6.7 0 12.2 5.5 12.2 12.2v537.9c0 6.7-5.5 12.2-12.2 12.2z"
          fill="#f2be45"
          data-spm-anchor-id="a313x.search_index.0.i35.40193a81WcxQiT"
          class=""
        ></path>
        <path
          d="M804.4 805H663.9c-6.7 0-12.2-5.5-12.2-12.2v-281c0-6.7 5.5-12.2 12.2-12.2h140.4c6.7 0 12.2 5.5 12.2 12.2v281c0.1 6.7-5.4 12.2-12.1 12.2z"
          fill="#ea9518"
          data-spm-anchor-id="a313x.search_index.0.i37.40193a81WcxQiT"
          class=""
        ></path>
      </svg>
      <p className="gradesBoxLabel">SCORE</p>
      <p className="gradesBoxNum">1105</p>
    </div>
  </div>
</div>
        </div>
        );

        export default Card_bit;
        
        
         */
}
