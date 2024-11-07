import styles from "./footer.module.css";

export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed ToDos:{completedTodos}</span>
      <span>Total ToDos:{totalTodos}</span>
    </div>
  );
}
