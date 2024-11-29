import React from "react";
import styles from "./Card_thus.module.css";

const Card_thus = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["GameImg"]}>
        <div className={styles["Gfooter"]}>
          <div className={styles["SmallIcon"]}></div>
          <span className={styles["Stars"]}>
            <svg
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 50.000000 50.000000"
              height="50.000000pt"
              width="50.000000pt"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              className={styles["StarIcon"]}
            >
              <g
                stroke="none"
                fill="#ebd300"
                transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
              >
                <path d="M210 405 l-33 -85 -83 0 c-45 0 -85 -4 -88 -9 -3 -5 23 -33 59 -62 36 -29 65 -60 65 -68 0 -9 -9 -48 -20 -86 -11 -38 -20 -71 -20 -72 0 -12 35 4 85 37 33 22 67 40 75 40 8 0 42 -18 75 -40 50 -33 85 -49 85 -37 0 1 -9 34 -20 72 -11 38 -20 77 -20 86 0 8 29 39 65 68 36 28 63 56 60 62 -4 5 -44 9 -90 9 l-83 0 -33 85 c-17 47 -35 85 -39 85 -4 0 -22 -38 -40 -85z"></path>
              </g>
            </svg>
            5/5
          </span>
          <span className={styles["Descripion"]}>
            This is Descripion of The Game
          </span>
        </div>

        <svg
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 50.000000 50.000000"
          height="50.000000pt"
          width="50.000000pt"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          className={styles["GameIcon"]}
        >
          <g
            stroke="none"
            fill="#ff5858"
            transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
          >
            <path d="M427 471 c-2 -11 -36 -35 -78 -57 -62 -33 -77 -46 -94 -81 -14 -30 -24 -41 -35 -36 -64 25 -90 27 -117 7 -58 -42 -115 -185 -99 -248 19 -76 81 -73 195 9 19 14 41 25 50 25 9 0 43 -18 75 -40 33 -22 70 -43 83 -46 64 -16 101 30 89 113 -7 56 -62 159 -99 187 -28 20 -56 18 -121 -9 -16 -7 -17 -5 -11 16 12 39 36 60 102 90 56 25 83 50 83 78 0 18 -17 12 -23 -8z m-41 -252 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m-236 -14 c0 -8 7 -15 15 -15 8 0 15 -7 15 -15 0 -8 -7 -15 -15 -15 -8 0 -15 -7 -15 -15 0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 -7 15 -15 15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 7 15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z m196 -26 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m80 0 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m-40 -40 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z"></path>
          </g>
        </svg>
        <span className={styles["Name"]}>Game Name</span>
      </div>
    </div>
  </div>
);

export default Card_thus;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_thus = () => (
         <div>
          <div className="card">
  <div className="GameImg">

    <div className="Gfooter">
      <div className="SmallIcon"></div>
      <span className="Stars"><svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 50.000000 50.000000" height="50.000000pt" width="50.000000pt" version="1.0" xmlns="http://www.w3.org/2000/svg" className="StarIcon">
      <g stroke="none" fill="#ebd300" transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)">
      <path d="M210 405 l-33 -85 -83 0 c-45 0 -85 -4 -88 -9 -3 -5 23 -33 59 -62 36 -29 65 -60 65 -68 0 -9 -9 -48 -20 -86 -11 -38 -20 -71 -20 -72 0 -12 35 4 85 37 33 22 67 40 75 40 8 0 42 -18 75 -40 50 -33 85 -49 85 -37 0 1 -9 34 -20 72 -11 38 -20 77 -20 86 0 8 29 39 65 68 36 28 63 56 60 62 -4 5 -44 9 -90 9 l-83 0 -33 85 c-17 47 -35 85 -39 85 -4 0 -22 -38 -40 -85z"></path>
      </g>
      </svg>
        5/5</span>
      <span className="Descripion">This is Descripion of The Game</span>
    </div>

    <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 50.000000 50.000000" height="50.000000pt" width="50.000000pt" version="1.0" xmlns="http://www.w3.org/2000/svg" className="GameIcon">
    <g stroke="none" fill="#ff5858" transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)">
    <path d="M427 471 c-2 -11 -36 -35 -78 -57 -62 -33 -77 -46 -94 -81 -14 -30 -24 -41 -35 -36 -64 25 -90 27 -117 7 -58 -42 -115 -185 -99 -248 19 -76 81 -73 195 9 19 14 41 25 50 25 9 0 43 -18 75 -40 33 -22 70 -43 83 -46 64 -16 101 30 89 113 -7 56 -62 159 -99 187 -28 20 -56 18 -121 -9 -16 -7 -17 -5 -11 16 12 39 36 60 102 90 56 25 83 50 83 78 0 18 -17 12 -23 -8z m-41 -252 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m-236 -14 c0 -8 7 -15 15 -15 8 0 15 -7 15 -15 0 -8 -7 -15 -15 -15 -8 0 -15 -7 -15 -15 0 -8 -7 -15 -15 -15 -8 0 -15 7 -15 15 0 8 -7 15 -15 15 -8 0 -15 7 -15 15 0 8 7 15 15 15 8 0 15 7 15 15 0 8 7 15 15 15 8 0 15 -7 15 -15z m196 -26 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m80 0 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m-40 -40 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z"></path></g></svg>
    <span className="Name">Game Name</span>
  </div>
</div>
        </div>
        );

        export default Card_thus;
        
        
         */
}
