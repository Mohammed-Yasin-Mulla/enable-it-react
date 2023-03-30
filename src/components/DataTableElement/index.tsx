import styles from "./styles.module.css";
interface DataTableElementProps {
  children: string | number;
  width?: number;
}

export default function DataTableElement(props: DataTableElementProps) {
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
