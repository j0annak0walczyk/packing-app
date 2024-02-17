import styles from "./Button.module.css";

export const Button = ({ children, onClickFunction }) => {
  return (
    <button className={styles.reusableButton} onClick={onClickFunction}>
      {children}
    </button>
  );
};
