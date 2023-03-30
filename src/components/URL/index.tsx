import { Dispatch } from "react";
import styles from "./styles.module.css";

interface URLProps {
  pageNumber: number;
  setPageNumber: Dispatch<React.SetStateAction<number>>;
}

export default function (props: URLProps) {
  const { pageNumber, setPageNumber } = props;

  return (
    <div>
      Data From URL : give-me-users-forever.vercel.app/api/users/{" "}
      <input
        className={styles.input}
        value={pageNumber}
        onChange={(e) => {
          setPageNumber(parseInt(e.target.value) || 0);
        }}
        type="number"
        min={0}

      />
      /next
    </div>
  );
}
