import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { Row } from "@tanstack/react-table";

import type Emissions from "./columns";
import type { JSX } from "react";

interface EmissionsSheetProps<Emissions> {
  row: Row<Emissions>;
}

export default function EmissionsSheet<Emissions>({
  row,
}: EmissionsSheetProps<Emissions>) {
  //const fn = row.getValue("FacilityName");

  /*
  function Sheet({
    ...props
  }: React.ComponentProps<typeof SheetPrimitive.Root>) {
    return <SheetPrimitive.Root data-slot="sheet" {...props} />;
  }
*/

  function DoLine(label: string, val: string) {
    //function DoLine(label: string, key: string): JSX.Element {
    // alert("row: " + toString(row));

    console.log(`label: ${label} val: ${val}`);

    return (
      <>
        <div className="text-right flex">{label}</div>
        <div className="text-left flex">{val}</div>
      </>
    );
  }

  function DoRow(): JSX.Element {
    // row.getAllCells().map;

    const cells = row.getVisibleCells().map((c) => {
      //alert("id:" + c.id + "  val:" + c.getValue());
      const v = c.getValue();
      return DoLine(c.id, v);
    });

    return <>{cells}</>;
  }

  return (
    <Sheet>
      <SheetTrigger className="underline">Gas Details</SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>{row.getValue("FacilityName")}</SheetTitle>
          <SheetDescription className="container">
            <DoRow />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

/*

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
          

*/
