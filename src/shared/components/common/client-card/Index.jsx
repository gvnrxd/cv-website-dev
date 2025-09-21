import styles from "./Index.module.css";

export default function ClientCard({ img, desc, name, occupation }) {
  return (
    <>
      <div className={styles.cardBg}>
        <img className={styles.img} src={img} alt={`${img}`} />
        <p className={styles.desc}>{desc}</p>
        <div>
          <p className={styles.name}>{name}</p>
          <span className={styles.job}>{occupation}</span>
        </div>
      </div>
    </>
  );
}
