import styles from "./styles.module.css";

interface HeaderTableElementProps {
  children: React.ReactNode;
  width?: number;
}

export default function HeaderTableElement(props: HeaderTableElementProps) {
  const { children, width } = props;

  return (
    <div
      className={styles.container}
      style={{
        width: width ? `${width}px` : "auto",
      }}
    >
      {children}
    </div>
  );
}
