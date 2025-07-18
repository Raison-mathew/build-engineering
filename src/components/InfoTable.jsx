import {
  Grid,
  Column,
  Tag,
  Button,
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
} from "@carbon/react";


const InfoTable = ({ headers, rows, title, renderers = {} }) => {
   return (
    <div style={{marginBottom: "20px"}}>
      <DataTable rows={rows} headers={headers} isSortable={false}>
        {({ rows, headers, getHeaderProps }) => (
          <TableContainer title={title}>
            <Table size="sm">
              <TableHead>
                <TableRow>
                  {headers.map((header) => (
                    <TableHeader key={header.key} {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>
                        {renderers[cell.info.header] ? renderers[cell.info.header](row) : cell.value}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DataTable>
    </div>
    
  )
    
}

export default InfoTable;