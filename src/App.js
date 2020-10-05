import React from "react";
import AuthorityList from "./components/AuthorityList";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  title: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    margin: 50,
    borderWidth: 2,
    borderColor: "#000",
    borderStyle: "solid",
  },
  listText: {
    fontSize: 30,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper className={classes.paper} variant='outlined'>
        <List dense>
          <ListItem>
            <ListItemText
              primary='Authority Documents List'
              classes={{ primary: classes.listText }}
            />
          </ListItem>
          <ListItemSecondaryAction>
            <Button
              variant='contained'
              color='secondary'
              style={{
                borderStyle: "solid",
                borderWidth: 2,
                borderColor: "#000",
              }}
            >
              Export This List
            </Button>
          </ListItemSecondaryAction>
        </List>
        <Divider style={{ background: "black" }} />
        <List component='nav' aria-label='secondary mailbox folders'>
          <ListItem button>
            <ListItemText primary='' />
          </ListItem>
        </List>

        <AuthorityList />
      </Paper>
    </React.Fragment>
  );
}

export default App;
