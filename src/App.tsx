import { useState } from "react";
import "./App.css";

import Spacer from "./components/Spacer";
import Button from "./components/Button";
import Table from "./components/Table";
import URL from "./components/URL";

function App() {
  const [count, setCount] = useState<number>(0);

  const handleCountChange = (value: number) => {
    setCount((count) => count + value);
  };

  return (
    <div id="container">
      <URL pageNumber={count} setPageNumber={setCount} />
      <Spacer height={17} />

      <Table  pageNumber={count}/>

      <Spacer height={17} />

      <div className="btnContainer">
        <Button
          disabled={count <= 0}
          onClick={() => handleCountChange(-1)}
          children="Decrement 📉"
        />
        <Button onClick={() => handleCountChange(+1)} children="Increment 📈" />
      </div>
    </div>
  );
}

export default App;
