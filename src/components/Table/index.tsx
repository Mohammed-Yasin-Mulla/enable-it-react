import { useEffect, useState } from "react";
import Button from "../Button";
import TableDataRow from "./TableDataRow";
import HeaderTableElement from "../HeaderTableElement";
import LoadingScreen from "../LoadingScreen";
import Spacer from "../Spacer";
import styles from "./styles.module.css";
import Arrow from "../../assets/SimpleArrow.svg";
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
  console.log("💡 ~ index ~ apiData:", apiData);
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
    const sortedData = apiData.sort(
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
    setApiData([...sortedData]);
  };

  return (
    <div className={styles.tableContainer}>
      {isLoading && <LoadingScreen />}

      <div
        style={{
          position: "absolute",
          left: -180,
          top: -65,
        }}
      >
        <p>
          <b>📝 Note:</b> Click on the <br /> header to sort the data <br />
          in ascending order.
        </p>
        <img src={Arrow} alt="arrow mark" />
      </div>

      <div
        style={{
          position: "absolute",
          left: -230,
          top: 200,
          width: 250,
        }}
      >
        <b>📝 Note:</b> Click on remove row
        <b />
        <img src={Arrow} alt="arrow mark" />
      </div>

      <div className={styles.refetchButton}>
        <Button
          children={"Refetch 🌀"}
          onClick={() => setRefetch((prevData) => !prevData)}
        />
      </div>
      <Spacer height={12} />
      <div className={styles.rowContainer}>
        <HeaderTableElement
          children="ID 🪪"
          width={30}
          onClick={handleSort("ID")}
        />
        <HeaderTableElement
          children="Job Title 🔨"
          width={90}
          onClick={handleSort("JobTitle")}
        />
        <HeaderTableElement
          children="Company 🏭"
          width={170}
          onClick={handleSort("Company")}
        />
        <HeaderTableElement
          children="Name 😄"
          width={150}
          onClick={handleSort("FirstNameLastName")}
        />
        <HeaderTableElement
          children="Email  📧"
          width={170}
          onClick={handleSort("Email")}
        />
        <HeaderTableElement
          children="Phone 📞"
          width={125}
          onClick={handleSort("Phone")}
        />
      </div>
      <Spacer height={30} />
      {apiData.map((data: TableRowInterface) => {
        return (
          <TableDataRow data={data} removeValueWithID={removeValueWithID} />
        );
      })}
    </div>
  );
}
