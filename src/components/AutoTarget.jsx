import React, { useState } from "react";
import {
  DataTable,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Button,
  Modal,
  DatePicker,
  DatePickerInput,
  TimePicker,
  TimePickerSelect,
  SelectItem,
} from "@carbon/react";
import { Play, Renew, Calendar } from "@carbon/icons-react";

const initialRows = [
  {
    id: 1,
    reportId: 905.24,
    targeted: 3,
    readyToTarget: 2,
    status: "OFF",
    scheduledTime: null,
  },
  {
    id: 2,
    reportId: 855.28,
    targeted: 5,
    readyToTarget: 7,
    status: "ON",
    scheduledTime: null,
  },
];

const AutoTargetTable = () => {
  const [rows, setRows] = useState(initialRows);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const openScheduleModal = (rowId) => {
    setSelectedRowId(rowId);
    const existing = rows.find((r) => r.id === rowId)?.scheduledTime || {};
    setSelectedDate(existing.date || "");
    setSelectedTime(existing.time || "");
    setIsModalOpen(true);
  };

  const handleScheduleSave = () => {
    const updatedRows = rows.map((row) =>
      row.id === selectedRowId
        ? {
            ...row,
            scheduledTime: {
              date: selectedDate,
              time: selectedTime,
            },
          }
        : row
    );
    setRows(updatedRows);
    setIsModalOpen(false);
  };

  return (
    <div className="bx--grid" style={{ width: "50%", margin: "10px"}}>

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
              {rows.map((row) => (
                <React.Fragment key={row.id}>
                  <TableRow>
                    <TableCell
                      colSpan={2}
                      style={{ backgroundColor: "#e3f2fd" }}
                    >
                      {row.reportId}
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
                    <TableCell rowSpan={2}>
                      {row.scheduledTime ? (
                        <>
                          <div>
                            <strong>
                              {row.scheduledTime.date} {row.scheduledTime.time}
                            </strong>
                          </div>
                          <Button
                            size="sm"
                            kind="ghost"
                            renderIcon={Calendar}
                            onClick={() => openScheduleModal(row.id)}
                          >
                            Update
                          </Button>
                        </>
                      ) : (
                        <>
                          <div>Status: {row.status}</div>
                          <Button
                            size="sm"
                            kind="ghost"
                            renderIcon={Calendar}
                            onClick={() => openScheduleModal(row.id)}
                          >
                            Schedule
                          </Button>
                        </>
                      )}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Targeted</TableCell>
                    <TableCell>{row.targeted}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Ready to Target</TableCell>
                    <TableCell>{row.readyToTarget}</TableCell>
                    <TableCell />
                    <TableCell>
                      {row.id === 2 && (
                        <Button
                          renderIcon={Renew}
                          size="sm"
                          kind="ghost"
                          iconDescription="Refresh"
                        >
                          Refresh
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        )}
      </DataTable>

      {/* Schedule Modal */}
      <Modal
        open={isModalOpen}
        modalHeading="Schedule Auto Target"
        primaryButtonText="Save"
        secondaryButtonText="Cancel"
        onRequestClose={() => setIsModalOpen(false)}
        onRequestSubmit={handleScheduleSave}
      >
        <p style={{ marginBottom: "1rem" }}>
          Set schedule for target:{" "}
          <strong>
            {rows.find((r) => r.id === selectedRowId)?.reportId}
          </strong>
        </p>
        <DatePicker
          datePickerType="single"
          onChange={(dates) =>
            setSelectedDate(dates[0]?.toLocaleDateString("en-US") || "")
          }
          value={selectedDate}
        >
          <DatePickerInput
            id="date-picker"
            placeholder="mm/dd/yyyy"
            labelText="Select date"
            type="text"
          />
        </DatePicker>

        <TimePicker
          id="time-picker"
          labelText="Select time"
          style={{ marginTop: "1rem" }}
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
          <TimePickerSelect id="ampm-select" defaultValue="AM">
            <SelectItem value="AM" text="AM" />
            <SelectItem value="PM" text="PM" />
          </TimePickerSelect>
        </TimePicker>
      </Modal>
    </div>
  );
};

export default AutoTargetTable;
