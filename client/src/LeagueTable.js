import "./styles/LeagueTable.css";
import * as React from "react";
import { useTable } from "react-table";

const LeagueTable = (props) => { 
    console.log( 'fickprops', props)

  const data = React.useMemo(() =>  JSON.parse(props.data).data, []);
  console.log( 'fick', data)

  const columns = React.useMemo(
    () => [
      {
        Header: "Rank",
        accessor: "rank",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "P10 pts",
        accessor: "p10_points",
      },
      {
        Header: "DNF pts",
        accessor: "dnf_points",
      },
      {
        Header: "Total pts",
        accessor: "total_points",
      },

      {
        Header: "Trend",
        accessor: "trend",
      },
    ],
    []
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

export default LeagueTable;