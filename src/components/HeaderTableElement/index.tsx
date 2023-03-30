import styles from "./styles.module.css";

interface HeaderTableElementProps {
  children: React.ReactNode;
  width?: number;
  onClick?: () => void;
}

export default function HeaderTableElement(props: HeaderTableElementProps) {
  const { children, width, onClick } = props;

  return (
    <div
      className={styles.container}
      style={{
        width: width ? `${width}px` : "auto",
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
