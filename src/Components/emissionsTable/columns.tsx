import { type ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Emissions = {
  FacilityName: string;
  ResponsibleEmitter: string;
  StateTerritoryOfOperation: string;
  //  StateTerritoryOfOperation:    | "NSW" | "VIC" | "NT" | "QLD" | "SA" | "TAS" | "WA" | "National";
  ANZSIC: string;
  ERC: string;
  BaselineEmissionsNumber: string;
};

export const columns: ColumnDef<Emissions>[] = [
  {
    accessorKey: "FacilityName",
    header: "Facility name",
  },
  {
    accessorKey: "ResponsibleEmitter",
    header: "Responsible emitter",
  },
  {
    accessorKey: "StateTerritoryOfOperation",
    header: "State/Territory of operation",
  },
  {
    accessorKey: "ANZSIC",
    header: "ANZSIC",
  },
  {
    accessorKey: "ERC",
    header: "ERC",
  },
  {
    accessorKey: "BaselineEmissionsNumber",
    header: "Baseline emissions number",
  },
  {
    accessorKey: "CoveredEmissions",
    header: "Covered emissions",
  },
  {
    accessorKey: "BorrowingAdjustmentAmount",
    header: "Borrowing adjustment amount",
  },
  {
    accessorKey: "ACCUsIssued",
    header: "ACCUs issued",
  },
  {
    accessorKey: "ACCUsDeemedSurrendered",
    header: "ACCUs deemed surrendered",
  },
  {
    accessorKey: "ACCUsSurrendered",
    header: "ACCUs surrendered",
  },
  {
    accessorKey: "SMCsSurrendered",
    header: "SMCs surrendered",
  },
  {
    accessorKey: "NetEmissionsNumber",
    header: "Net emissions number",
  },
  {
    accessorKey: "NetPositionNumber",
    header: "Net position number",
  },
  {
    accessorKey: "SMCsIssued",
    header: "SMCs Issued",
  },
  {
    accessorKey: "CumulativeMYMPNetEmissionsNumber",
    header: "Cumulative MYMP net emissions number",
  },
  {
    accessorKey: "CumulativeMYMPNetPositionNumber",
    header: "Cumulative MYMP net position number",
  },
  {
    accessorKey: "GHGCarbonDioxide",
    header: "GHG Carbon Dioxide",
  },
  {
    accessorKey: "GHGMethane",
    header: "GHG Methane",
  },
  {
    accessorKey: "GHGNitrousOxide",
    header: "GHG Nitrous oxide",
  },
  {
    accessorKey: "GHGOther",
    header: "GHG Other",
  },
  {
    accessorKey: "Notes",
    header: "Notes",
  },
];
