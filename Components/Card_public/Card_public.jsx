import React from "react";
import styles from "./Card_public.module.css";

const Card_public = () => (
  <div>
    <div className={styles["card"]}>
      <button className={styles["card__btn"] + styles["card__btn-menu"]}>
        <svg
          fill="none"
          height="18"
          viewBox="0 0 24 18"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m0 0h24v3h-12-12zm0 7.5h24v3h-24zm0 7.5h24v3h-24z"
            fill="#fff"
          ></path>
        </svg>
      </button>
      <div className={styles["card__img"]}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
          <circle r="60" fill="#ffd8c9" cy="64" cx="64"></circle>
          <circle r="48" opacity=".3" fill="#fff" cy="64" cx="64"></circle>
          <path
            fill="#393c54"
            d="m64 14a31 31 0 0 1 31 31v41.07a9.93 9.93 0 0 1 -9.93 9.93h-42.14a9.93 9.93 0 0 1 -9.93-9.93v-41.07a31 31 0 0 1 31-31z"
          ></path>
          <circle r="7" fill="#fbc0aa" cy="60" cx="89"></circle>
          <path
            fill="#00adfe"
            d="m64 124a59.7 59.7 0 0 0 34.7-11.07l-3.33-10.29a10 10 0 0 0 -9.37-6.64h-43.95a10 10 0 0 0 -9.42 6.64l-3.33 10.29a59.7 59.7 0 0 0 34.7 11.07z"
          ></path>
          <path
            fill="#ff8475"
            d="m46.54 121.45a59.93 59.93 0 0 0 34.92 0l-2.46-25.45h-30z"
          ></path>
          <path fill="#f85565" d="m48.13 105h31.74l-.39-4h-30.96z"></path>
          <path fill="#ffd8c9" d="m76 96a12 12 0 0 1 -24 0z"></path>
          <path
            strokeWidth="14"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="#fbc0aa"
            fill="none"
            d="m64 83v12"
          ></path>
          <circle r="7" fill="#fbc0aa" cy="60" cx="39"></circle>
          <path
            fill="#ffd8c9"
            d="m64 90a25 25 0 0 1 -25-25v-16.48a25 25 0 1 1 50 0v16.48a25 25 0 0 1 -25 25z"
          ></path>
          <path
            strokeWidth="5"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="#fbc0aa"
            fill="none"
            d="m64 64.75v6.5"
          ></path>
          <path
            fill="#515570"
            d="m64.83 18.35a27.51 27.51 0 0 0 -28.32 27.47v4.76a2 2 0 0 0 2 2h.58a1 1 0 0 0 .86-.49l4.05-7.09 2.48 4.13a1 1 0 0 0 1.71 0l2.48-4.13 2.47 4.13a1 1 0 0 0 1.72 0l2.47-4.13 2.48 4.13a1 1 0 0 0 1.71 0l2.48-4.13 2.48 4.13a1 1 0 0 0 1.71 0l2.48-4.13 2.47 4.13a1 1 0 0 0 1.72 0l2.47-4.13 2.48 4.13a1 1 0 0 0 1.71 0l2.48-4.13 4 7.09a1 1 0 0 0 .86.49h.58a2 2 0 0 0 2-2v-4.18c.05-14.95-11.66-27.61-26.61-28.05z"
          ></path>
          <path fill="#f85565" d="m47.35 113h33.29l-.38-4h-32.52z"></path>
          <path fill="#f85565" d="m46.58 121h34.84l-.39-4h-34.06z"></path>
          <path
            opacity=".7"
            fill="#ff8475"
            d="m58.52 79.39c0-.84 11-.84 11 0 0 1.79-2.45 3.25-5.48 3.25s-5.52-1.46-5.52-3.25z"
          ></path>
          <path
            opacity=".7"
            fill="#f85565"
            d="m69.48 79.29c0 .78-11 .78-11 0 .04-1.79 2.52-3.29 5.52-3.29s5.48 1.5 5.48 3.29z"
          ></path>
          <circle r="3" fill="#515570" cy="58.75" cx="76.25"></circle>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="#515570"
            fill="none"
            d="m70.75 59.84a6.61 6.61 0 0 1 11.5-1.31"
          ></path>
          <path
            style={{
              fill: "none",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              stroke: "#515570",
              strokeWidth: "2",
              opacity: ".2",
            }}
            d="m72.11 51.46 5.68-.4a4.62 4.62 0 0 1 4.21 2.1l.77 1.21"
          ></path>
          <circle r="3" fill="#515570" cy="58.75" cx="51.75"></circle>
          <g strokeLinecap="round" fill="none">
            <path
              strokeLinejoin="round"
              stroke="#515570"
              d="m57.25 59.84a6.61 6.61 0 0 0 -11.5-1.31"
            ></path>
            <path
              strokeWidth="2"
              strokeLinejoin="round"
              stroke="#515570"
              opacity=".2"
              d="m55.89 51.45-5.68-.39a4.59 4.59 0 0 0 -4.21 2.11l-.77 1.21"
            ></path>
            <path
              stroke-miterlimit="10"
              stroke="#f85565"
              d="m57.25 78.76a17.4 17.4 0 0 0 6.75 1.12 17.4 17.4 0 0 0 6.75-1.12"
            ></path>
          </g>
        </svg>
      </div>
      <div className={styles["card__title"]}>Runaway</div>
      <div className={styles["card__subtitle"]}>Smalltown Boy , Shane D</div>
      <div className={styles["card__wrapper"]}>
        <div className={styles["card__time"] + styles["card__time-passed"]}>
          03:34
        </div>
        <div className={styles["card__timeline"]}>
          <progress value="55" max="100"></progress>
        </div>
        <div className={styles["card__time"] + styles["card__time-left"]}>
          02:04
        </div>
      </div>
      <div className={styles["card__wrapper"]}>
        <button className={styles["card__btn"]}>
          <svg
            fill="none"
            height="12"
            viewBox="0 0 20 12"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <clipPath id="a">
              <path d="m0 0h20v12h-20z"></path>
            </clipPath>
            <g>
              <path
                d="m17 1c0-.265216-.1054-.51957-.2929-.707107-.1875-.187536-.4419-.292893-.7071-.292893h-8v2h7v5h-3l3.969 5 4.031-5h-3zm-14 10c0 .2652.10536.5196.29289.7071.18754.1875.44189.2929.70711.2929h8v-2h-7v-5h3l-4-5-4 5h3z"
                fill="#fff"
              ></path>
            </g>
          </svg>
        </button>
        <button className={styles["card__btn"]}>
          <svg
            width="23"
            height="16"
            viewBox="0 0 23 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 8V0L0 8L11.5 16V8ZM23 0L11.5 8L23 16V0Z"
              fill="#fff"
            ></path>
          </svg>
        </button>
        <button className={styles["card__btn"] + styles["card__btn-play"]}>
          <svg
            fill="none"
            height="22"
            viewBox="0 0 18 22"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m0 0v22l18-11z" fill="#000"></path>
          </svg>
        </button>
        <button className={styles["card__btn"]}>
          <svg
            width="23"
            height="16"
            viewBox="0 0 23 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 8V0L23 8L11.5 16V8ZM0 0L11.5 8L0 16V0Z"
              fill="#fff"
            ></path>
          </svg>
        </button>
        <button className={styles["card__btn"]}>
          <svg
            fill="#fff"
            height="20"
            viewBox="0 0 20 20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <clipPath id="a">
              <path d="m0 .5h20v19h-20z"></path>
            </clipPath>
            <g fill="#fff">
              <path d="m15 14.5h-1.559l-9.7-10.673c-.09376-.10305-.20802-.18536-.33545-.24168-.12744-.05631-.26523-.08537-.40455-.08532h-3.001v2h2.559l4.09 4.5-4.09 4.501h-2.559v2h3.001c.13932 0 .27711-.029.40455-.0853.12743-.0563.24169-.1387.33545-.2417l4.259-4.687 4.259 4.686c.0938.103.208.1854.3355.2417.1274.0563.2652.0853.4045.0853h2.001v3l5-4-5-4z"></path>
              <path d="m13.4406 5.5h1.559v3l5-3.938-5-4.062v3h-2.001c-.1393-.00005-.2771.02901-.4045.08532-.1275.05632-.2417.13863-.3355.24168l-3.36798 3.707 1.47998 1.346z"></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  </div>
);

export default Card_public;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_public = () => (
         <div>
          <div className="card">
    <button className="card__btn card__btn-menu">
        <svg fill="none" height="18" viewBox="0 0 24 18" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h24v3h-12-12zm0 7.5h24v3h-24zm0 7.5h24v3h-24z" fill="#fff"></path></svg>
    </button>
    <div className="card__img">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><circle r="60" fill="#ffd8c9" cy="64" cx="64"></circle><circle r="48" opacity=".3" fill="#fff" cy="64" cx="64"></circle><path fill="#393c54" d="m64 14a31 31 0 0 1 31 31v41.07a9.93 9.93 0 0 1 -9.93 9.93h-42.14a9.93 9.93 0 0 1 -9.93-9.93v-41.07a31 31 0 0 1 31-31z"></path><circle r="7" fill="#fbc0aa" cy="60" cx="89"></circle><path fill="#00adfe" d="m64 124a59.7 59.7 0 0 0 34.7-11.07l-3.33-10.29a10 10 0 0 0 -9.37-6.64h-43.95a10 10 0 0 0 -9.42 6.64l-3.33 10.29a59.7 59.7 0 0 0 34.7 11.07z"></path><path fill="#ff8475" d="m46.54 121.45a59.93 59.93 0 0 0 34.92 0l-2.46-25.45h-30z"></path><path fill="#f85565" d="m48.13 105h31.74l-.39-4h-30.96z"></path><path fill="#ffd8c9" d="m76 96a12 12 0 0 1 -24 0z"></path><path strokeWidth="14" strokeLinejoin="round" strokeLinecap="round" stroke="#fbc0aa" fill="none" d="m64 83v12"></path><circle r="7" fill="#fbc0aa" cy="60" cx="39"></circle><path fill="#ffd8c9" d="m64 90a25 25 0 0 1 -25-25v-16.48a25 25 0 1 1 50 0v16.48a25 25 0 0 1 -25 25z"></path><path strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" stroke="#fbc0aa" fill="none" d="m64 64.75v6.5"></path><path fill="#515570" d="m64.83 18.35a27.51 27.51 0 0 0 -28.32 27.47v4.76a2 2 0 0 0 2 2h.58a1 1 0 0 0 .86-.49l4.05-7.09 2.48 4.13a1 1 0 0 0 1.71 0l2.48-4.13 2.47 4.13a1 1 0 0 0 1.72 0l2.47-4.13 2.48 4.13a1 1 0 0 0 1.71 0l2.48-4.13 2.48 4.13a1 1 0 0 0 1.71 0l2.48-4.13 2.47 4.13a1 1 0 0 0 1.72 0l2.47-4.13 2.48 4.13a1 1 0 0 0 1.71 0l2.48-4.13 4 7.09a1 1 0 0 0 .86.49h.58a2 2 0 0 0 2-2v-4.18c.05-14.95-11.66-27.61-26.61-28.05z"></path><path fill="#f85565" d="m47.35 113h33.29l-.38-4h-32.52z"></path><path fill="#f85565" d="m46.58 121h34.84l-.39-4h-34.06z"></path><path opacity=".7" fill="#ff8475" d="m58.52 79.39c0-.84 11-.84 11 0 0 1.79-2.45 3.25-5.48 3.25s-5.52-1.46-5.52-3.25z"></path><path opacity=".7" fill="#f85565" d="m69.48 79.29c0 .78-11 .78-11 0 .04-1.79 2.52-3.29 5.52-3.29s5.48 1.5 5.48 3.29z"></path><circle r="3" fill="#515570" cy="58.75" cx="76.25"></circle><path strokeLinejoin="round" strokeLinecap="round" stroke="#515570" fill="none" d="m70.75 59.84a6.61 6.61 0 0 1 11.5-1.31"></path><path style={{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",stroke:"#515570",strokeWidth:"2",opacity:".2"}} d="m72.11 51.46 5.68-.4a4.62 4.62 0 0 1 4.21 2.1l.77 1.21"></path><circle r="3" fill="#515570" cy="58.75" cx="51.75"></circle><g strokeLinecap="round" fill="none"><path strokeLinejoin="round" stroke="#515570" d="m57.25 59.84a6.61 6.61 0 0 0 -11.5-1.31"></path><path strokeWidth="2" strokeLinejoin="round" stroke="#515570" opacity=".2" d="m55.89 51.45-5.68-.39a4.59 4.59 0 0 0 -4.21 2.11l-.77 1.21"></path><path stroke-miterlimit="10" stroke="#f85565" d="m57.25 78.76a17.4 17.4 0 0 0 6.75 1.12 17.4 17.4 0 0 0 6.75-1.12"></path></g></svg>
    </div>
    <div className="card__title">Runaway</div>
    <div className="card__subtitle">Smalltown Boy , Shane D</div>
    <div className="card__wrapper">
        <div className="card__time card__time-passed">03:34</div>
        <div className="card__timeline"><progress value="55" max="100"></progress></div>
        <div className="card__time card__time-left">02:04</div>
    </div>
    <div className="card__wrapper">
        <button className="card__btn"><svg fill="none" height="12" viewBox="0 0 20 12" width="20" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><clipPath id="a"><path d="m0 0h20v12h-20z"></path></clipPath><g><path d="m17 1c0-.265216-.1054-.51957-.2929-.707107-.1875-.187536-.4419-.292893-.7071-.292893h-8v2h7v5h-3l3.969 5 4.031-5h-3zm-14 10c0 .2652.10536.5196.29289.7071.18754.1875.44189.2929.70711.2929h8v-2h-7v-5h3l-4-5-4 5h3z" fill="#fff"></path></g></svg></button>
        <button className="card__btn"><svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 8V0L0 8L11.5 16V8ZM23 0L11.5 8L23 16V0Z" fill="#fff"></path></svg></button>
        <button className="card__btn card__btn-play"><svg fill="none" height="22" viewBox="0 0 18 22" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m0 0v22l18-11z" fill="#000"></path></svg></button>
        <button className="card__btn"><svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 8V0L23 8L11.5 16V8ZM0 0L11.5 8L0 16V0Z" fill="#fff"></path></svg></button>
        <button className="card__btn"><svg fill="#fff" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><clipPath id="a"><path d="m0 .5h20v19h-20z"></path></clipPath><g fill="#fff"><path d="m15 14.5h-1.559l-9.7-10.673c-.09376-.10305-.20802-.18536-.33545-.24168-.12744-.05631-.26523-.08537-.40455-.08532h-3.001v2h2.559l4.09 4.5-4.09 4.501h-2.559v2h3.001c.13932 0 .27711-.029.40455-.0853.12743-.0563.24169-.1387.33545-.2417l4.259-4.687 4.259 4.686c.0938.103.208.1854.3355.2417.1274.0563.2652.0853.4045.0853h2.001v3l5-4-5-4z"></path><path d="m13.4406 5.5h1.559v3l5-3.938-5-4.062v3h-2.001c-.1393-.00005-.2771.02901-.4045.08532-.1275.05632-.2417.13863-.3355.24168l-3.36798 3.707 1.47998 1.346z"></path></g></svg></button>
    </div>
</div>
        </div>
        );

        export default Card_public;
        
        
         */
}
