import React from "react";
import styles from "./Card_atom.module.css";

const Card_atom = () => (
  <div>
    <div className={styles["card"]}>
      <div className={styles["card__side"] + styles["card__side_front"]}>
        <div className={styles["flex__1"]}>
          <p className={styles["card__side__name-bank"]}>monobank</p>
          <div className={styles["card__side__chip"]}></div>
          <p className={styles["card__side__name-person"]}>PAVLO MATVIIENKO</p>
        </div>
      </div>
      <div className={styles["card__side"] + styles["card__side_back"]}>
        <div className={styles["card__side__black"]}></div>
        <p className={styles["card__side__number"]}>XXXX XXXX XXXX XXXX</p>
        <div className={styles["flex__2"]}>
          <p
            className={
              styles["card__side__other-numbers"] +
              styles["card__side__other-numbers_1"]
            }
          >
            XX/XX
          </p>
          <p
            className={
              styles["card__side__other-numbers"] +
              styles["card__side__other-numbers_2"]
            }
          >
            XXX
          </p>
          <div className={styles["card__side__photo"]}>your-photo</div>
          <div className={styles["card__side__debit"]}>debit</div>
        </div>
        <p className={styles["card__side__other-info"]}>
          MONOBANK.UA | 0 800 205 205 | АТ "УНІВЕРСАЛ БАНК". ЛІЦЕНЗІЯ НБУ №92
          ВІД 20.01.1994 | PCE PC100650 WORLD DEBIT
        </p>
      </div>
    </div>
  </div>
);

export default Card_atom;
{
  /* If The CSS Is Not Being Applied Properly Due To module.css Not Being Scoped Globally, Delete The Code Above, Uncomment The Code Below, And Paste The CSS Into Your Global.CSS File. This Should Resolve The Issue. */
}
{
  /*
            
        import React from 'react';

        const Card_atom = () => (
         <div>
          <div className="card">
         <div className="card__side card__side_front">
            <div className="flex__1">
               <p className="card__side__name-bank">monobank</p>
               <div className="card__side__chip"></div>
               <p className="card__side__name-person">PAVLO MATVIIENKO</p>
            </div>
         </div>
         <div className="card__side card__side_back">
            <div className="card__side__black"></div>
            <p className="card__side__number">XXXX XXXX XXXX XXXX</p>
            <div className="flex__2">
               <p className="card__side__other-numbers card__side__other-numbers_1">XX/XX</p>
               <p className="card__side__other-numbers card__side__other-numbers_2">XXX</p>
               <div className="card__side__photo">your-photo</div>
               <div className="card__side__debit">debit</div>
            </div>
            <p className="card__side__other-info">
               MONOBANK.UA | 0 800 205 205 | 
               АТ "УНІВЕРСАЛ БАНК". ЛІЦЕНЗІЯ 
               НБУ №92 ВІД 20.01.1994 | 
               PCE PC100650 WORLD DEBIT
            </p>
         </div>
      </div>
        </div>
        );

        export default Card_atom;
        
        
         */
}
