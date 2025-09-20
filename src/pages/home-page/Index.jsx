import styles from "./Index.module.css";
import Header from "@shared/components/header/Index";
import SelfImprovementIcon from "@/assets/icons/SelfImprovementIcon.jsx";
import DownArrow from "@/assets/icons/DownArrow.jsx";

import Headshot from "/public/img/shared/test.jpg";

export default function HomePage() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <p className={styles.kicker}>
            <SelfImprovementIcon size={36} color={"var(--tea-green)"} />
            Judgement-free consulting
          </p>
          <div className={styles.body}>
            <h1>Come as you are.</h1>
            <div className={styles.spanContainer}>
              <span className={styles.heroBio}>
                Free 15-minute consultation. No pressure, no-payment leave with
                3 concrete steps tailored to you.
              </span>
            </div>

            <br></br>
            <div className={styles.btnContainer}>
              <button className={styles.btnGrad}>
                Book a Free
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
      </section>
      <div className={styles.gradientDivider}></div>
      <section className={styles.mainContent}>
        <div style={{ backgroundColor: "var(--surface)" }}>
          <DownArrow
            color={"var(--gunmetal)"}
            size={64}
            className={styles.downArrow}
          />
        </div>
        <div className={styles.waveTop}>
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path
              d="M0,80 C240,140 480,20 720,60 C960,100 1200,40 1440,80 L1440,0 L0,0 Z"
              fill="var(--surface) "
              z-index="-1"
            />
          </svg>
        </div>
        <div className={styles.mainText}>
          <div>
            <h2>Grow Yourself</h2>
            <p>
              Reach your full potential with our expert consulting services.
            </p>
            <button>Get started</button>
          </div>
          <div>
            <div>
              <div>
                <h3>About Me</h3>
                <img
                  src={Headshot}
                  style={{
                    borderRadius: "50%",
                    height: "200px",
                    width: "200px",
                  }}
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempore, officiis! Quo maiores repellat, inventore error
                  reiciendis explicabo alias, a iste excepturi architecto
                  molestias soluta voluptates aspernatur nam nesciunt. Quas,
                  possimus!
                </p>
                <ul>
                  <li>200+ coached</li>
                  <li>5 years</li>
                  <li>FAU News</li>
                </ul>
              </div>
            </div>
            <p>Got questions?</p>
            <h2>Frequently Asked Questions</h2>
          </div>
          <span>Still Not Sure?</span>
          <div>
            <h2>What My Clients Say</h2>
            <div>
              <div>
                <p>IMG</p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum, vel consequuntur. Quibusdam itaque natus veniam quasi
                  aperiam fuga labore necessitatibus.
                </p>
                <p>J.Patel</p>
                <span>Student</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
