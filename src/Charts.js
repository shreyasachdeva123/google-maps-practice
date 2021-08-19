import React from "react";
import Barchart2 from "./Barchart2";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";


const Charts = () => {
    const tableHeadRow = ["Station", "Passengers", "Gates", "Accessibility Rank"];
    const tableBodyRows = [["Granville", 1000, 4, 2], ["Burrard", 800, 2, 4], ["Production Way", 1200, 4, 1], ["WaterFront", 1000, 2, 6], ["Stadium China Town", 600, 1, 3], ["Commercial Drive", 1500, 6, 2]];

    return (
        <div className="charts">
            <div className="barchart1">

                <Table style={{ width: "100%" }}>
                    <TableHead>
                        <TableRow>
                            {tableHeadRow.map((heading, index) => {
                                return (
                                    <TableCell align="center" key={index}>{heading}</TableCell>
                                )
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            tableBodyRows.map((row, index) => {
                                return (
                                    <TableRow key={index}>
                                        {
                                            row.map((item, index) => {
                                                return (
                                                    <TableCell align="center" key={index}>{item}</TableCell>
                                                )
                                            })
                                        }
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </div>
            <Barchart2 />
        </div>
    )
}

export default Charts;