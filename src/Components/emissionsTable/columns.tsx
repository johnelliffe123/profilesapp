import { type ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
//import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

import EmissionsSheet from "./emissions-sheet";

export type Emissions = {
  FacilityName: string;
  ResponsibleEmitter: string;
  StateTerritoryOfOperation: string;
  //  StateTerritoryOfOperation:    | "NSW" | "VIC" | "NT" | "QLD" | "SA" | "TAS" | "WA" | "National";
  ANZSIC: string;
  ERC: string;
  BaselineEmissionsNumber: string;
  CoveredEmissions: string;
  BorrowingAdjustmentAmount: string;
  ACCUsIssued: string;
  ACCUsDeemedSurrendered: string;
  ACCUsSurrendered: string;
  SMCsSurrendered: string;
  NetEmissionsNumber: string;
  NetPositionNumber: string;
  SMCsIssued: string;
  CumulativeMYMPNetEmissionsNumber: string;
  CumulativeMYMPNetPositionNumber: string;
  GHGCarbonDioxide: string;
  GHGMethane: string;
  GHGNitrousOxide: string;
  GHGOther: string;
  Notes: string;
};

/*
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];
 */

export const columns: ColumnDef<Emissions>[] = [
  {
    accessorKey: "FacilityName",
    //header: () => <div className="text-left">Facility name</div>,

    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Facility name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },

    cell: ({ row }) => (
      <div className="text-left">{row.getValue("FacilityName")}</div>
    ),
  },
  {
    accessorKey: "ResponsibleEmitter",
    header: "Responsible emitter",
    cell: ({ row }) => (
      <div className="text-left">{row.getValue("ResponsibleEmitter")}</div>
    ),
  },
  {
    accessorKey: "StateTerritoryOfOperation",
    header: "State/Territory of operation",
    enableHiding: true,
  },
  {
    accessorKey: "ANZSIC",
    header: () => <div className="text-center">ANZSIC</div>,
  },
  {
    accessorKey: "ERC",
    header: "ERC",
  },
  {
    accessorKey: "BaselineEmissionsNumber",
    // header: "Baseline emissions number",
    header: () => (
      <div className="text-right">
        Baseline <br />
        emissions number
      </div>
    ),
    cell: ({ row }) => (
      <div className="text-right">
        {row.getValue("BaselineEmissionsNumber")}
      </div>
    ),
  },
  /*
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
    accessorKey: "Action",
    header: "Action",
    cell: ({ row }) => {
      //const n = row.original.Notes.trim();
      //const notes = toString(row.getValue("Notes"));
      return (
        <div>
          <EmissionsSheet row={row} />
        </div>
      );
    },
  },
   */
];

/*
    cell: ({ row }) => {
      const n = row.original.Notes.trim();
      //const notes = toString(row.getValue("Notes"));
      return n != "-" ? (
        <HoverCard>
          <HoverCardTrigger>Notes</HoverCardTrigger>
          <HoverCardContent>{n}</HoverCardContent>
        </HoverCard>
      ) : (
        <div>
          <p>chips</p>
          <EmissionsSheet row={row} />;
        </div>
      );
    },


    cell: ({ row }) => {
      const n = row.original.Notes.trim();
      //const notes = toString(row.getValue("Notes"));
      return n != "-" ? (
        <Popover>
          <PopoverTrigger>Notes</PopoverTrigger>
          <PopoverContent>{n}</PopoverContent>
        </Popover>
      ) : (
        ""
      );
    },



    cell: ({ row }) => (
      <div className="text-right">
        {row.getValue("BaselineEmissionsNumber")}
      </div>
    ),

        cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
*/
