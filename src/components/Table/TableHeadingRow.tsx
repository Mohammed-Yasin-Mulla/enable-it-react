import { TableRowInterface } from ".";
import HeaderTableElement from "../HeaderTableElement";
import styles from "./styles.module.css";

interface TableHeadingRowProps {
  handleSort: (key: keyof TableRowInterface) => () => void;
}

export function TableHeadingRow({ handleSort }: TableHeadingRowProps) {
  return (
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
  );
}
