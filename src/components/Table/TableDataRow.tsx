import { TableRowInterface } from ".";
import DataTableElement from "../DataTableElement";
import Spacer from "../Spacer";
import styles from "./styles.module.css";

interface TableRowProps {
  data: TableRowInterface;
  removeValueWithID: (id: number) => void;
}

export default function TableDataRow(props: TableRowProps) {
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
}
