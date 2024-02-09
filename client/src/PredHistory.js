import "./styles/LeagueTable.css";
import * as React from "react";
import {  useTable } from "react-table";

const PredHistory = (props) => { 
  
  const d =  JSON.parse(props.data).data
  const cols = [
    {
      Header: "No.1",
      accessor: "racenumber",
    },
    {
      Header: "P10",
      accessor: "p10",
    },
    {
      Header: "DNF",
      accessor: "dnf",
    }
  ];

  const data = React.useMemo(() => d, []);

  const columns = React.useMemo(
    () => 
    cols, []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="tablecontainer">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PredHistory;