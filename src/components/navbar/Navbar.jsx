import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DashboardIcon from '@material-ui/icons/Dashboard';
import './navbar.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#000'
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="nav">
      <AppBar position="static" style={{backgroundColor: "#2C363F", height: '5vh'}}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Petting Zoo" {...a11yProps(0)} />
          <Tab label="Longhorn Photos" {...a11yProps(1)} />
          <Tab label="Carriage Rides" {...a11yProps(2)} />
          <Tab label="Horseback Riding" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <AppBar position="static" style={{backgroundColor: "#FFF"}} >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <DashboardIcon />
            StockYard Stables
          </IconButton>
          <Typography variant="h6" className={classes.title}></Typography>
          <Button>Home</Button>          
          <Button>Attractions</Button>
          <Button>Contact Us</Button>
          <Button className="tickets" style={{backgroundColor: "#8F0200", color: "#FFF"}}>Tickets</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;