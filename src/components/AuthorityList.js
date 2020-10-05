import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#000",
  },
  header: {
    backgroundColor: "#e6e6e6",
  },
  tableRightBorder: {
    borderWidth: 1,
    borderColor: "#000",
    borderRightStyle: "solid",
    borderBottomStyle: "none",
  },
});

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name) {
  return { name };
}

const rows = [
  createData("Form and Style Manual for Legislative Measures"),
  createData("House Legislative Counsel's Manual on Drafting Style"),
  createData("How to Write a Dictionary Definition"),
  createData("How to Write an Extended Definition"),
  createData("ISO 704:2009 Ter,omp;pgu wprl -- Principles and methods"),
  createData("Maine Legislative Drafting Manual"),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow className={classes.header}>
            <TableCell
              style={{
                lineHeight: "0.2rem",
                padding: 10,
                // borderTopStyle: "solid",
                // borderWidth: 2,
              }}
              className={classes.tableRightBorder}
            >
              Authority Document Name
            </TableCell>
            <TableCell
              align='center'
              style={{
                lineHeight: "0.2rem",
                padding: 10,
                // borderTopStyle: "solid",
                // borderWidth: 2,
              }}
              width='80px'
            >
              Get info
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <TableCell
                component='th'
                scope='row'
                className={classes.tableRightBorder}
              >
                {row.name}
              </TableCell>
              <TableCell align='center' style={{ borderBottomStyle: "none" }}>
                <Icon style={{ color: "#e6e6e6" }}>info-icon</Icon>
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
