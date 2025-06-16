import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
//import type { Row } from "@tanstack/react-table";

//import type { Emissions } from "./columns";
import type {
  JSX,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";

/*
interface EmissionsSheetProps<Emissions> {
  row: Row<Emissions>;
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );

*/

interface EmissionsSheetProps<Emissions> {
  data: Emissions;
}

export default function EmissionsSheet<Emissions>({
  data,
}: EmissionsSheetProps<Emissions>) {
  //const fn = row.getValue("FacilityName");

  /*
  function Sheet({
    ...props
  }: React.ComponentProps<typeof SheetPrimitive.Root>) {
    return <SheetPrimitive.Root data-slot="sheet" {...props} />;
  }
*/
  /*
  function DoLine1({ label, dataKey }) {
    const x = data[dataKey];
    console.log(`label: ${label} val: ${x}`);
    return (
      <>
        <div className="text-right flex">{label}</div>
        <div className="text-left flex">data.${dataKey}</div>
      </>
    );
  }
*/
  function DoLine({ label, value }): JSX.Element {
    return (
      <div className="flex">
        <div className="text-right w-60 flex-none">{label}</div>
        <div className="text-left w-3 flex-1">&nbsp;:&nbsp;</div>
        <div className="text-left flex-2">{value}</div>
      </div>
    );
  }

  return (
    <Sheet>
      <SheetTrigger className="underline">Gas Details</SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>{data.FacilityName}</SheetTitle>
          <SheetDescription className="container"></SheetDescription>
          <DoLine
            label="Baseline Emissions Number"
            value={data.BaselineEmissionsNumber}
          />
          <DoLine label="Covered Emissions" value={data.CoveredEmissions} />
          <DoLine
            label="Borrowing Adjustment Amount"
            value={data.BorrowingAdjustmentAmount}
          />
          <DoLine label="ACCUs Issued" value={data.ACCUsIssued} />
          <DoLine
            label="ACCUs Deemed Surrendered"
            value={data.ACCUsDeemedSurrendered}
          />
          <DoLine label="ACCUs Surrendered" value={data.ACCUsSurrendered} />
          <DoLine
            label="Net Emissions Number"
            value={data.NetEmissionsNumber}
          />
          <DoLine label="SMCs Issued" value={data.SMCsIssued} />
          <DoLine
            label="Cumulative MYMP Net Emissions Number"
            value={data.CumulativeMYMPNetEmissionsNumber}
          />
          <DoLine
            label="Cumulative MYMP Net Position Number"
            value={data.CumulativeMYMPNetPositionNumber}
          />
          <DoLine label="GHG Carbon Dioxide" value={data.GHGCarbonDioxide} />
          <DoLine label="GHG Methane" value={data.GHGMethane} />
          <DoLine label="GHG Nitrous Oxide" value={data.GHGNitrousOxide} />
          <DoLine label="GHG Other" value={data.GHGOther} />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

/*

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left"
}) {
  return (


          <SheetTitle>{row.getValue("FacilityName")}</SheetTitle>

  function DoRow(): JSX.Element {
    // row.getAllCells().map;

    const cells = row.getVisibleCells().map((c) => {
      //alert("id:" + c.id + "  val:" + c.getValue());
      const v = c.getValue();
      return DoLine(c.id, v);
    });

    return <>{cells}</>;
  }

            <DoLine label="Facility Name" key="FacilityName" />

      cell.id
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}

    return (
      <>
        <div className="text-right flex">{label}</div>
        <div className="text-left flex">{row.getValue(value)}</div>
      </>
    );
  }
*/

/*
            <DoLine label="Covered Emissions" value="CoveredEmissions" />
            <DoLine
              label="Borrowing Adjustment Amount"
              value="BorrowingAdjustmentAmount"
            />
            <DoLine label="ACCUs Issued" value="ACCUsIssued" />
            <DoLine
              label="ACCUs Deemed Surrendered"
              value="ACCUsDeemedSurrendered"
            />
            <DoLine label="ACCUs Surrendered" value="ACCUsSurrendered" />
          

              function DoRow(): JSX.Element {
    // row.getAllCells().map;
    console.log(`data: ${typeof data} `);

    const cells = data.map((c) => {
      //alert("id:" + c.id + "  val:" + c.getValue());
      const v = c.getValue();
      return DoLine(c.id, v);
    });

    return <>{cells}</>;
  }

*/
