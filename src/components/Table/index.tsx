import DataTableElement from "../DataTableElement";
import HeaderTableElement from "../HeaderTableElement";
import Spacer from "../Spacer";
import styles from "./styles.module.css";

const dummyData: TableRowInterface[] = [
  {
    id: 1,
    jobTitleName: "Developer",
    name: "JohnDoe dfaddsfdsfdsfdsfdsfsdfgfhgfhgffg",
    phoneNumber: "408-1234567",
    emailAddress: "sdafsdfdsf@dfds.com",
  },
  {
    id: 1,
    jobTitleName: "Developer",
    name: "JohnDoe dfad",
    phoneNumber: "408-1234567",
    emailAddress: "sdafsdfdsf@dfds.com",
  },
  {
    id: 1,
    jobTitleName: "Developer",
    name: "JohnDoe dfad",
    phoneNumber: "408-1234567",
    emailAddress: "sdafsdfdsf@dfds.com",
  },
  {
    id: 1,
    jobTitleName: "Developer",
    name: "JohnDoe dfad",
    phoneNumber: "408-1234567",
    emailAddress: "sdafsdfdsf@dfds.com",
  },
  {
    id: 1,
    jobTitleName: "Developer",
    name: "JohnDoe dfad",
    phoneNumber: "408-1234567",
    emailAddress: "sdafsdfdsf@dfds.com",
  },
  {
    id: 1,
    jobTitleName: "Developer",
    name: "JohnDoe dfad",
    phoneNumber: "408-1234567",
    emailAddress: "sdafsdfdsf@dfds.com",
  },
  {
    id: 1,
    jobTitleName: "Developer",
    name: "JohnDoe dfad",
    phoneNumber: "408-1234567",
    emailAddress: "sdafsdfdsf@dfds.com",
  },
  {
    id: 1,
    jobTitleName: "Developer",
    name: "JohnDoe dfad",
    phoneNumber: "408-1234567",
    emailAddress: "sdafsdfdsf@dfds.com",
  },
  {
    id: 1,
    jobTitleName: "Developer",
    name: "JohnDoe dfad",
    phoneNumber: "408-1234567",
    emailAddress: "sdafsdfdsf@dfds.com",
  },
  {
    id: 1,
    jobTitleName: "Developer",
    name: "JohnDoe dfad",
    phoneNumber: "408-1234567",
    emailAddress: "sdafsdfdsf@dfds.com",
  },
];

interface TableRowInterface {
  id: number;
  jobTitleName: string;
  name: string;
  emailAddress: string;
  phoneNumber: string;
}

interface TableRowProps {
  data: TableRowInterface;
}

const TableRow = (props: TableRowProps) => {
  const { id, jobTitleName, name, emailAddress, phoneNumber } = props.data;
  return (
    <>
      <div className={styles.rowContainer}>
        <DataTableElement children={id} width={30} />
        <DataTableElement children={jobTitleName} width={90} />
        <DataTableElement children={emailAddress} width={170} />
        <DataTableElement children={name} width={150} />
        <DataTableElement children={emailAddress} width={170} />
        <DataTableElement children={phoneNumber} width={125} />
      </div>
      <Spacer height={5} />
    </>
  );
};

export default function index() {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.rowContainer}>
        <HeaderTableElement children="ID 🪪" width={30} />
        <HeaderTableElement children="Job Title 🔨" width={90} />
        <HeaderTableElement children="Email Add 📨" width={170} />
        <HeaderTableElement children="Name 😄" width={150} />
        <HeaderTableElement children="Email  📧" width={170} />
        <HeaderTableElement children="Phone 📞" width={125} />
      </div>
      <Spacer height={30} />
      {dummyData.map((data: TableRowInterface) => {
        return <TableRow data={data} />;
      })}
    </div>
  );
}
