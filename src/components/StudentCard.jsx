// src/components/StudentCard.jsx
import styles from './StudentCard.module.css';

export default function StudentCard({ student }) {
  const { name, course, yearLevel, status, gwa } = student;

  const isDeansLister = gwa <= 1.75;
  const isOnProbation = status === 'On Probation';

  const cardClassName = `${styles.card} ${isOnProbation ? styles.probation : ''}`;

  return (
    <div className={cardClassName}>
      {isDeansLister && <span className={styles.badge}>Dean's Lister</span>}

      <h2 className={styles.name}>{name}</h2>
      <p className={styles.infoText}><strong>Course:</strong> {course}</p>
      <p className={styles.infoText}><strong>Year Level:</strong> {yearLevel}</p>
      <p className={styles.infoText}><strong>Status:</strong> {status}</p>
      <p className={styles.infoText}><strong>GWA:</strong> {gwa.toFixed(2)}</p>
    </div>
  );
}