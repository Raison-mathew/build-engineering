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

const initialBuildData = [
  {
    id: 905.24,
    status: "OFF",
    builds: [
      { label: "Last Committed", value: "f5242521.01" },
      { label: "Ready to Commit", value: "f5242521.02" },
      { label: "BVT Testing", value: "f5242521.03" },
    ],
    scheduledTime: null,
  },
  {
    id: 855.28,
    status: "ON",
    builds: [
      { label: "Last Committed", value: "f5242521.01" },
      { label: "Ready to Commit", value: "f5242521.02" },
      { label: "BVT Testing", value: "f5242521.03" },
    ],
    scheduledTime: null,
  },
];

const BuildStatusTable = () => {
  const [buildData, setBuildData] = useState(initialBuildData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const openScheduleModal = (rowId) => {
    const row = buildData.find((r) => r.id === rowId);
    setSelectedRowId(rowId);
    setSelectedDate(row?.scheduledTime?.date || "");
    setSelectedTime(row?.scheduledTime?.time || "");
    setIsModalOpen(true);
  };

  const handleScheduleSave = () => {
    const updated = buildData.map((row) =>
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
    setBuildData(updated);
    setIsModalOpen(false);
  };

  return (
    <div className="bx--grid" style={{ maxWidth: "1000px", margin: "auto" }}>
      <h4>Build Status Table</h4>

      <DataTable rows={[]} headers={[]} isSortable={false}>
        {() => (
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader colSpan={1}> </TableHeader>
                <TableHeader colSpan={2}>Build Status</TableHeader>
                <TableHeader>Manual</TableHeader>
                <TableHeader>Auto</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {buildData.map((row) => (
                <React.Fragment key={row.id}>
                  <TableRow>
                    <TableCell rowSpan={3} style={{ backgroundColor: "#e3f2fd" }}>
                      {row.id}
                    </TableCell>
                    <TableCell>{row.builds[0].label}</TableCell>
                    <TableCell>{row.builds[0].value}</TableCell>
                    <TableCell rowSpan={3}>
                      <Button
                        renderIcon={Play}
                        kind="tertiary"
                        size="sm"
                        iconDescription="Commit"
                      >
                        Commit
                      </Button>
                    </TableCell>
                    <TableCell rowSpan={3}>
                      <div>Status: {row.status}</div>
                      {row.scheduledTime && (
                        <div style={{ marginTop: "0.5rem" }}>
                          <strong>
                            {row.scheduledTime.date} {row.scheduledTime.time}
                          </strong>
                        </div>
                      )}
                      <Button
                        size="sm"
                        kind="ghost"
                        renderIcon={Calendar}
                        onClick={() => openScheduleModal(row.id)}
                        style={{ marginTop: "0.5rem" }}
                      >
                        {row.scheduledTime ? "Update" : "Schedule"}
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{row.builds[1].label}</TableCell>
                    <TableCell>{row.builds[1].value}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>{row.builds[2].label}</TableCell>
                    <TableCell>{row.builds[2].value}</TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
              <TableRow>
                <TableCell colSpan={4} />
                <TableCell>
                  <Button
                    renderIcon={Renew}
                    kind="ghost"
                    size="sm"
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

      {/* Schedule Modal */}
      <Modal
        open={isModalOpen}
        modalHeading="Schedule Build Job"
        primaryButtonText="Save"
        secondaryButtonText="Cancel"
        onRequestClose={() => setIsModalOpen(false)}
        onRequestSubmit={handleScheduleSave}
      >
        <p style={{ marginBottom: "1rem" }}>
          Set schedule for ID:{" "}
          <strong>
            {buildData.find((r) => r.id === selectedRowId)?.id}
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

export default BuildStatusTable;
