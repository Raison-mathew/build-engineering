import React from "react";
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Button,
} from "@carbon/react";
import { Renew, Play } from "@carbon/icons-react";

const AutoTargetTable = () => {
  return (
    <div className="bx--grid" style={{ maxWidth: "800px", margin: "auto" }}>
      <h4>Auto Target - Status: OFF</h4>

      <DataTable rows={[]} headers={[]} isSortable={false}>
        {() => (
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader colSpan={2}>Targeting Report</TableHeader>
                <TableHeader>Manual</TableHeader>
                <TableHeader>Schedule (Auto)</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* First Row Group */}
              <TableRow>
                <TableCell colSpan={2} style={{ backgroundColor: "#e3f2fd" }}>
                  905.24
                </TableCell>
                <TableCell rowSpan={2}>
                  <Button
                    renderIcon={Play}
                    size="sm"
                    kind="tertiary"
                    iconDescription="Kick off"
                  >
                    Kick off
                  </Button>
                </TableCell>
                <TableCell rowSpan={2}>Status: OFF</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Targeted</TableCell>
                <TableCell>3</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ready to Target</TableCell>
                <TableCell>2</TableCell>
                <TableCell />
                <TableCell />
              </TableRow>

              {/* Second Row Group */}
              <TableRow>
                <TableCell colSpan={2} style={{ backgroundColor: "#e3f2fd" }}>
                  855.28
                </TableCell>
                <TableCell rowSpan={2}>
                  <Button
                    renderIcon={Play}
                    size="sm"
                    kind="tertiary"
                    iconDescription="Kick off"
                  >
                    Kick off
                  </Button>
                </TableCell>
                <TableCell rowSpan={2}>Status: ON</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Targeted</TableCell>
                <TableCell>5</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ready to Target</TableCell>
                <TableCell>7</TableCell>
                <TableCell />
                <TableCell>
                  <Button
                    renderIcon={Renew}
                    size="sm"
                    kind="ghost"
                    iconDescription="Refresh"
                  >
                    Refresh
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        )}
      </DataTable>
    </div>
  );
};

export default AutoTargetTable;
