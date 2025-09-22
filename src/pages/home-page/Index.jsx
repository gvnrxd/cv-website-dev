import styles from "./Index.module.css";
import SelfImprovementIcon from "@/assets/icons/SelfImprovementIcon.jsx";
import DownArrow from "@/assets/icons/DownArrow.jsx";
import headShot from "@/assets/img/test.jpg";
import ClientCard from "@shared/components/common/client-card/Index.jsx";
import customer1 from "@/assets/img/customer1.jpg";
import cusomter2 from "@/assets/img/cusomter2.jpg";
import cusomter3 from "@/assets/img/cusomter3.jpg";
import { useState } from "react";

function Collapsible({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.collapsibleWrap}>
      <button
        className={`${styles.collapsible} ${isOpen ? styles.active : ""}`}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
      >
        {title}
      </button>
      <div className={styles.content} hidden={!isOpen}>
        {children}
      </div>
    </div>
  );
}

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
              fill="var(--surface)"
              z-index="-1"
            />
          </svg>
        </div>
        <div className={styles.dividerText}>
          <h3>Grow Yourself</h3>
          <p>Reach your full potential with our expert consulting services.</p>
          <button>Get Started</button>
        </div>
        <div className={styles.waveFull}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
            <path
              fill="var(--bg)"
              d="M0,80 C240,140 480,20 720,60 C960,100 1200,40 1440,80 L1440,0 L0,0 Z"
            />
          </svg>
        </div>
        <div className={styles.mainText}>
          <div className={styles.aboutMe}>
            <h2>About Me</h2>
            <div className={styles.aboutMeHeader}>
              <div className={styles.headshotWrap}>
                <img
                  src={headShot}
                  alt="Headshot"
                  className={styles.headshot}
                />
              </div>
              <p className={styles.intro}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Distinctio, non.
              </p>
            </div>

            <div className={styles.textBlock}>
              <p>
                Tempore, officiis! Quo maiores repellat, inventore error
                reiciendis explicabo alias, a iste excepturi architecto
                molestias soluta voluptates aspernatur nam nesciunt.
              </p>

              <span>Quas, possimus!</span>
              <ul>
                <li>200+ coached</li>
                <li>5 years</li>
                <li>FAU News</li>
              </ul>
            </div>
          </div>
          <div>
            <h2>What People Say</h2>
            <div className={styles.clientBox}>
              <ClientCard
                img={cusomter2}
                desc="Lorem ipsum dolor sit amet."
                name="J.Patel"
                occupation="Student"
              />
              <ClientCard
                img={customer1}
                desc="Lorem ipsum dolor sit amet."
                name="J.Patel"
                occupation="Student"
              />
              <ClientCard
                img={cusomter3}
                desc="Lorem ipsum dolor sit amet."
                name="J.Patel"
                occupation="Student"
              />
              <ClientCard
                img={cusomter3}
                desc="Lorem ipsum dolor sit amet."
                name="J.Patel"
                occupation="Student"
              />
            </div>
          </div>
          <div className={styles.fAQ}>
            <div className={styles.waveFooter}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
                <path
                  fill="var(--surface)"
                  d="M0,80 C240,140 480,20 720,60 C960,100 1200,40 1440,80 L1440,0 L0,0 Z"
                />
              </svg>
            </div>
            <div className={styles.fAQContent}>
              <h2>Frequently Asked Questions</h2>
              <div className={styles.collapsibleContainer}>
                <Collapsible title="What can I expect in the first consultation?">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem voluptatem soluta asperiores quisquam alias fugit hic
                    omnis explicabo, aliquid cum.
                  </p>
                </Collapsible>

                <Collapsible title="Who do you usually work with?">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem voluptatem soluta asperiores quisquam alias fugit hic
                    omnis explicabo, aliquid cum.
                  </p>
                </Collapsible>

                <Collapsible title="Do you offer virtual sessions?">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem voluptatem soluta asperiores quisquam alias fugit hic
                    omnis explicabo, aliquid cum.
                  </p>
                </Collapsible>

                <Collapsible title="What is your approach to consulting?  ">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem voluptatem soluta asperiores quisquam alias fugit hic
                    omnis explicabo, aliquid cum.
                  </p>
                </Collapsible>

                <Collapsible title="How do you ensure confidentiality?">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem voluptatem soluta asperiores quisquam alias fugit hic
                    omnis explicabo, aliquid cum.
                  </p>
                </Collapsible>

                <Collapsible title="What are your fees and payment options?">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem voluptatem soluta asperiores quisquam alias fugit hic
                    omnis explicabo, aliquid cum.
                  </p>
                </Collapsible>

                <Collapsible title="How can I prepare for my first session?">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem voluptatem soluta asperiores quisquam alias fugit hic
                    omnis explicabo, aliquid cum.
                  </p>
                </Collapsible>
              </div>
            </div>

            <div className={styles.fAQFooter}>
              <p>Have more questions?</p>
              <button className={styles.contactButton}>Contact Me</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
