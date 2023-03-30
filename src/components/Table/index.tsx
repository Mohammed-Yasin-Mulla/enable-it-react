import { useEffect, useState } from "react";
import DataTableElement from "../DataTableElement";
import HeaderTableElement from "../HeaderTableElement";
import LoadingScreen from "../LoadingScreen";
import Spacer from "../Spacer";
import styles from "./styles.module.css";

//

interface TableRowInterface {
  ID: number;
  JobTitle: string;
  FirstNameLastName: string;
  Company: string;
  Email: string;
  Phone: string;
}

interface TableRowProps {
  data: TableRowInterface;
  removeValueWithID: (id: number) => void;
}

interface TableProps {
  pageNumber: number;
}

export default function index(props: TableProps) {
  const { pageNumber = 0 } = props;
  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
  }, [pageNumber]);

  const removeValueWithID = (id: number) => {
    const newData = apiData.filter((data: TableRowInterface) => data.ID !== id);
    setApiData(newData);
  };

  return (
    <div className={styles.tableContainer}>
      {isLoading && <LoadingScreen />}
      <div className={styles.rowContainer}>
        <HeaderTableElement children="ID 🪪" width={30} />
        <HeaderTableElement children="Job Title 🔨" width={90} />
        <HeaderTableElement children="Company 🏭" width={170} />
        <HeaderTableElement children="Name 😄" width={150} />
        <HeaderTableElement children="Email  📧" width={170} />
        <HeaderTableElement children="Phone 📞" width={125} />
      </div>
      <Spacer height={30} />
      {apiData.map((data: TableRowInterface) => {
        return <TableRow data={data} removeValueWithID={removeValueWithID} />;
      })}
    </div>
  );
}

const TableRow = (props: TableRowProps) => {
  const { data, removeValueWithID } = props;
  const { ID, JobTitle, FirstNameLastName, Email, Phone, Company } = data;

  return (
    <>
      <div
        className={styles.rowContainer}
        onClick={() => removeValueWithID(ID)}
      >
        <DataTableElement children={ID} width={30} />
        <DataTableElement children={JobTitle} width={90} />
        <DataTableElement children={Company} width={170} />
        <DataTableElement children={FirstNameLastName} width={150} />
        <DataTableElement children={Email} width={170} />
        <DataTableElement children={Phone} width={125} />
      </div>
      <Spacer height={5} />
    </>
  );
};
