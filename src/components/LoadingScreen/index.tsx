import styles from "./styles.module.css";

interface LoadingScreenProps {
  loadingString?: string;
}

export default function LoadingScreen(props: LoadingScreenProps) {
  const { loadingString = "Loading...." } = props;
  return (
    <div className={styles.loadingBackdrop}>
      <div className={styles.loadingText}>{loadingString}</div>
    </div>
  );
}
