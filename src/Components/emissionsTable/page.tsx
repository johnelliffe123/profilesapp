//import fs from "fs";
import emissionsJson from "../../assets/2023-24-baselines-and-emissions-table.json";

import { columns, type Emissions } from "./columns";
import { DataTable } from "./data-table";

function getData(): Emissions[] {
  try {
    //    const jsonStr = fs.readFileSync(emissionsJson, "utf8");

    //return JSON.parse(emissionsJson);
    return emissionsJson.slice(0, 10);
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default function EmissionsPage() {
  const data = getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
