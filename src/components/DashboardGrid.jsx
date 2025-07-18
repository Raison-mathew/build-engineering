import React from 'react';
import { Button, TextInput } from '@carbon/react';
import { Play } from "@carbon/icons-react";

const data = [
  { id: '905', version: '25', autoStatus: 'OFF', autoScheduleStatus: 'OFF' },
  { id: '855', version: '28', autoStatus: 'OFF', autoScheduleStatus: 'ON' },
];

const DashboardGrid = () => {
  return (
    <div className="dashboard-grid" style={{ display: 'flex', gap: '2rem' }}>
      {/* Build Basics Table */}
      <div style={{ border: '1px solid black', padding: '1rem' }}>
        <table className="cds--data-table">
          <thead>
            <tr>
              <th>Build Basics</th>
              <th>Manual</th>
              <th>Auto</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={`build-${row.id}`}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span>{row.id}</span>
                    <TextInput
                      id={`version-${row.id}`}
                      labelText=""
                      placeholder="Enter Version Eg: 25"
                      size="sm"
                    />
                  </div>
                </td>
                <td>
                     <Button
                        renderIcon={Play}
                        kind="tertiary"
                        size="sm"
                        iconDescription="Commit"
                      >
                        Start
                      </Button>
                </td>
                <td>Status: {row.autoStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Test Record Verification Table */}
      <div style={{ border: '1px solid black', padding: '1rem' }}>
        <table className="cds--data-table">
          <thead>
            <tr>
              <th>Test Record Verification</th>
              <th>Manual</th>
              <th>Auto</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={`verify-${row.id}`}>
                <td>{row.id}</td>
                <td>
                     <Button
                        renderIcon={Play}
                        kind="tertiary"
                        size="sm"
                        iconDescription="Commit"
                      >
                        Start
                      </Button>
                </td>
                <td>Status: {row.autoScheduleStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardGrid;
