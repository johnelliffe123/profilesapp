import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PageHeader from "./Components/PageHeader";

import { Button } from "./Components/ui/button";

import EmissionsPage from "./Components/emissionsTable/page";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <PageHeader />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>count is {count}</button>
        <div className="flex min-h-svh flex-col items-center justify-center">
          <Button variant="destructive" onClick={handleClick}>
            Click me - count is {count}
          </Button>
        </div>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <EmissionsPage></EmissionsPage>
    </>
  );
}

export default App;
