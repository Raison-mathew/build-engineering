/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, TextInput } from '@carbon/react';
import { Play } from "@carbon/icons-react";

const buildIds = ['905', '855'];

const tables = [
  {
    title: 'Ifix Enable',
    hasInput: true,
    autoStatuses: ['OFF', 'OFF'],
  },
  {
    title: 'APAR List Integration',
    hasInput: true,
    autoStatuses: ['OFF', 'OFF'],
  },
  {
    title: 'Ship the Published Builds',
    hasInput: false,
    autoStatuses: ['OFF', 'ON'],
  },
  {
    title: 'PKG Build',
    hasInput: true,
    autoStatuses: ['OFF', 'ON'],
  },
];

const BottomGrid = () => {
  return (
    <div className="dashboard-grid" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      {tables.map((table, index) => (
        <div
          key={table.title}
          style={{
            border: '1px solid black',
            padding: '1rem',
            minWidth: '300px',
            flexGrow: 1,
          }}
        >
          <table className="cds--data-table">
            <thead>
              <tr>
                <th>{table.title}</th>
                <th>Manual</th>
                <th>Auto</th>
              </tr>
            </thead>
            <tbody>
              {buildIds.map((id, idx) => (
                <tr key={`${table.title}-${id}`}>
                  <td>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <span>{id}</span>
                      {table.hasInput && (
                        <TextInput
                          id={`${table.title}-${id}`}
                          labelText=""
                          placeholder={`Enter Version Eg: ${id === '905' ? '25' : '28'}`}
                          size="sm"
                        />
                      )}
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
                  <td>Status: {table.autoStatuses[idx]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default BottomGrid;
