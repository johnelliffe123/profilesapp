import "./App.css";
import EmissionsPage from "./components/emissionsTable/page";
import PageHeader from "./components/PageHeader";

function App() {
  return (
    <div className="container">
      <div className="item item-header">
        <PageHeader />
      </div>
      <div className="item item-main">
        <EmissionsPage />
      </div>
      <div className="item-footer">
        <PageHeader />
      </div>
    </div>
  );
}

export default App;
