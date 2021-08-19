import React from "react";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { useState } from "react";

const Barchart2 = () => {
    const headingRow = ["Stations", "Passengers with Accessibility"];
    const bodyRow = [["Granville", 350], ["Burrard", 600], ["Production Way", 100], ["Waterfront", 480], ["Stadium ChinaTown", 300], ["Commercial Drive", 200]];


    return (
        <div className="barchart2">
            <Table style={{ width: "100%" }}>
                <TableHead>
                    <TableRow>
                        {headingRow.map((heading, index) => {
                            return (
                                <TableCell align="center" key={index}>{heading}</TableCell>
                            )
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        bodyRow.map((row, index) => {
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
    )
}

export default Barchart2;