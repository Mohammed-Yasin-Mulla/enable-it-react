import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => any;
  disabled?: boolean;
}

export default function Button(props: ButtonProps) {
  const { children, onClick, disabled } = props;
  return (
    <button disabled={disabled} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
