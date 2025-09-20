import styles from "./Index.module.css";
import Header from "@shared/components/header/Index";
import SelfImprovementIcon from "@/assets/icons/SelfImprovementIcon.jsx";

export default function HomePage() {
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.container}>
          <p className={styles.kicker}>
            <SelfImprovementIcon size={36} />
            Judgement-free consulting
          </p>
          <div className={styles.body}>
            <h1>Come as you are.</h1>
            <div className={styles.spanContainer}>
              <span className={styles.heroBio}>
                Free 15-minute consultation. No pressure, no-payment leave with
                3 concrete next steps tailored to you.
              </span>
            </div>

            <br></br>
            <div className={styles.btnContainer}>
              <button className={styles.btnGrad}>
                Book Free
                <span className={styles.small}>
                  <br></br>(15-min Consult)
                </span>
              </button>
              <button className={styles.emailBtn}>Text or Email</button>
            </div>
            <ul>
              <li>Confidential</li>
              <li>Compassionate</li>
              <li>Action-oriented</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.heroTxt}>
        <p>yeah</p>
      </div>
    </>
  );
}
