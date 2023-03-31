import { NoteWithArrow } from "./NoteWithArrow";
import { TableHeadingRow } from "./TableHeadingRow";
import { useEffect, useState } from "react";
import Button from "../Button";
import TableDataRow from "./TableDataRow";
import LoadingScreen from "../LoadingScreen";
import Spacer from "../Spacer";
import styles from "./styles.module.css";
export interface TableRowInterface {
  ID: number;
  JobTitle: string;
  FirstNameLastName: string;
  Company: string;
  Email: string;
  Phone: string;
}

interface TableProps {
  pageNumber: number;
}

export default function index(props: TableProps) {
  const { pageNumber = 0 } = props;
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // used to refetch data after deleting a row
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://give-me-users-forever.vercel.app/api/users/${pageNumber}/next`
    )
      .then((response) => response.json())
      .then((json) => {
        setApiData(json.users);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("~ index ~ err", err);
        setIsLoading(false);
      });
  }, [pageNumber, refetch]);

  const removeValueWithID = (id: number) => {
    const newData = apiData.filter((data: TableRowInterface) => data.ID !== id);
    setApiData(newData);
  };

  const handleSort = (key: keyof TableRowInterface) => () => {
    let sortedData = [];
    if (key != "ID") {
      sortedData = apiData.sort(
        (a: TableRowInterface, b: TableRowInterface) => {
          if (a[key] < b[key]) {
            return -1;
          }
          if (a[key] > b[key]) {
            return 1;
          }
          return 0;
        }
      );
    } else {
      sortedData = apiData.sort(
        (a: TableRowInterface, b: TableRowInterface) => {
          return a[key] - b[key];
        }
      );
    }
    setApiData([...sortedData]);
  };

  return (
    <div className={styles.tableContainer}>
      {isLoading && <LoadingScreen />}

      <NoteWithArrow />

      <div className={styles.refetchButton}>
        <Button
          children={"Refetch 🌀"}
          onClick={() => setRefetch((prevData) => !prevData)}
        />
      </div>

      <Spacer height={12} />

      <TableHeadingRow handleSort={handleSort} />

      <Spacer height={30} />

      {apiData.map((data: TableRowInterface) => {
        return (
          <TableDataRow data={data} removeValueWithID={removeValueWithID} />
        );
      })}
    </div>
  );
}
