import React from "react";
import Box from '@material-ui/core/Box';

import {createMuiTheme, createStyles, makeStyles, MuiThemeProvider, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { Hidden } from '@material-ui/core';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
// import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';


import Schedule from "./schedule";
import {blue} from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";

import Chip from '@material-ui/core/Chip';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

const drawerWidth = 600;

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexGrow: 1,
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: 'none',
    },
    icon: {
      verticalAlign: 'bottom',
      height: 20,
      width: 20,
    },
    details: {
      alignItems: 'center',
    },
    column: {
      flexBasis: '33.33%',
    },
    helper: {
      borderLeft: `2px solid ${theme.palette.divider}`,
      padding: theme.spacing(1, 2),
    },
    link: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    tab: {
      minWidth: 72,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      textTransform: 'initial'
    },
    tabPanel: {
      padding: 0,
    },
    tabs: {
      marginLeft: '-14px',
      marginRight: '-14px',
      marginTop: '-14px',
      marginBottom: '-14px',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '75%',
      flexShrink: 0,
      alignItems: 'center',
    },
    description: {
      fontSize: theme.typography.pxToRem(13)
    },
    secondaryHeading: {
      flexBasis: '100px',
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(1),
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: '100%',
      marginTop: theme.spacing(9),
        marginLeft: 0
    },
    contentShift: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
       width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
  }),
);


export default function _index() {

  const classes = useStyles();
  // const theme = useTheme();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openProfile = Boolean(anchorEl);

  const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

  const [value, setValue] = React.useState(0);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);

    console.log(event);
  };

  const theme = createMuiTheme({ palette: { type: "light", primary: blue } });

  return (
    <MuiThemeProvider theme={theme}>
      <Paper>
        <div className={classes.root}>
          <Hidden xsUp>
            <FormGroup>
              <FormControlLabel
                control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
                label={auth ? 'Logout' : 'Login'}
              />
            </FormGroup>
          </Hidden>

          <AppBar position="fixed"
                  className={clsx(classes.appBar, {
                      [classes.appBarShift]: open,
                  })}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                TodoYogi
              </Typography>
              {auth && (
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={openProfile}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                  </Menu>
                </div>
              )}
            </Toolbar>
          </AppBar>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >



                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />

                <Paper square>
                  <Tabs value={value} onChange={handleTabChange} aria-label="simple tabs example" indicatorColor="primary" textColor="primary">
                    <Tab className={classes.tab} label="Space/Project" {...a11yProps(0)} disableRipple/>
                    <Tab className={classes.tab} label="Status" {...a11yProps(1)} disableRipple/>
                  </Tabs>
                </Paper>

                <TabPanel value={value} index={0}>
                  <div className="tabs">
                    <ExpansionPanel defaultExpanded>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                      >
                          <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                          >
                              <Typography className={classes.heading}>Finalise API Specs</Typography>
                              <Chip label="Project" color="default"/>
                          </Grid>

                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails className={classes.details}>

                          <Box width="100%">

                              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                  <Grid container wrap="nowrap" spacing={2}>
                                      <Grid item xs>
                                          <Typography className={classes.description}>Identify and assess the data model for TodoYogi once wireframe is signed off and design is final. Note: Specs have to be done before any dev work.</Typography>
                                      </Grid>
                                  </Grid>

                                  <Grid container
                                        direction="row"
                                        justify="space-between"
                                        alignItems="center"
                                  >
                                      <KeyboardDatePicker
                                          margin="normal"
                                          id="date-picker-dialog"
                                          label="Date picker dialog"
                                          format="MM/dd/yyyy"
                                          value={selectedDate}
                                          onChange={handleDateChange}
                                          KeyboardButtonProps={{
                                              'aria-label': 'change date',
                                          }}
                                      />
                                      <KeyboardTimePicker
                                          margin="normal"
                                          id="time-picker"
                                          label="Time picker"
                                          value={selectedDate}
                                          onChange={handleDateChange}
                                          KeyboardButtonProps={{
                                              'aria-label': 'change time',
                                          }}
                                      />
                                  </Grid>
                              </MuiPickersUtilsProvider>
                          </Box>
                      </ExpansionPanelDetails>
                      <Divider />
                      <ExpansionPanelActions>
                        <Button size="small">Cancel</Button>
                        <Button size="small" color="primary">
                          Save
                        </Button>
                      </ExpansionPanelActions>
                    </ExpansionPanel>
                    <ExpansionPanel>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                      >
                          <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                          >
                              <Typography className={classes.heading}>Client Demo with Martin</Typography>
                              <Chip label="Client" color="primary"/>
                          </Grid>

                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails className={classes.details}>

                          <Box width="100%">

                              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                  <Grid container wrap="nowrap" spacing={2}>
                                      <Grid item xs>
                                          <Typography className={classes.description}>Showcase provisional prototype with React and Material UI directly on the continous integration cloud server.</Typography>
                                      </Grid>
                                  </Grid>

                                  <Grid container
                                        direction="row"
                                        justify="space-between"
                                        alignItems="center"
                                  >
                                      <KeyboardDatePicker
                                          margin="normal"
                                          id="date-picker-dialog"
                                          label="Date picker dialog"
                                          format="MM/dd/yyyy"
                                          value={selectedDate}
                                          onChange={handleDateChange}
                                          KeyboardButtonProps={{
                                              'aria-label': 'change date',
                                          }}
                                      />
                                      <KeyboardTimePicker
                                          margin="normal"
                                          id="time-picker"
                                          label="Time picker"
                                          value={selectedDate}
                                          onChange={handleDateChange}
                                          KeyboardButtonProps={{
                                              'aria-label': 'change time',
                                          }}
                                      />
                                  </Grid>
                              </MuiPickersUtilsProvider>
                          </Box>
                      </ExpansionPanelDetails>
                      <Divider />
                      <ExpansionPanelActions>
                        <Button size="small">Cancel</Button>
                        <Button size="small" color="primary">
                          Save
                        </Button>
                      </ExpansionPanelActions>
                    </ExpansionPanel>
                    <ExpansionPanel>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                      >
                          <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                          >
                              <Typography className={classes.heading}>Dentist appointment</Typography>
                              <Chip label="Personal" color="secondary"/>
                          </Grid>

                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails className={classes.details}>

                          <Box width="100%">

                              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                  <Grid container wrap="nowrap" spacing={2}>
                                      <Grid item xs>
                                          <Typography className={classes.description}>Asses dental implant cost and feasability.</Typography>
                                      </Grid>
                                  </Grid>

                                  <Grid container
                                        direction="row"
                                        justify="space-between"
                                        alignItems="center"
                                  >
                                      <KeyboardDatePicker
                                          margin="normal"
                                          id="date-picker-dialog"
                                          label="Date picker dialog"
                                          format="MM/dd/yyyy"
                                          value={selectedDate}
                                          onChange={handleDateChange}
                                          KeyboardButtonProps={{
                                              'aria-label': 'change date',
                                          }}
                                      />
                                      <KeyboardTimePicker
                                          margin="normal"
                                          id="time-picker"
                                          label="Time picker"
                                          value={selectedDate}
                                          onChange={handleDateChange}
                                          KeyboardButtonProps={{
                                              'aria-label': 'change time',
                                          }}
                                      />
                                  </Grid>
                              </MuiPickersUtilsProvider>
                          </Box>
                      </ExpansionPanelDetails>
                      <Divider />
                      <ExpansionPanelActions>
                        <Button size="small">Cancel</Button>
                        <Button size="small" color="primary">
                          Save
                        </Button>
                      </ExpansionPanelActions>
                    </ExpansionPanel>
                    <ExpansionPanel>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                      >
                          <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                          >
                              <Typography className={classes.heading}>Sort out unpaid bills</Typography>
                              <Chip label="Finance" color="primary"/>
                          </Grid>

                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails className={classes.details}>

                          <Box width="100%">

                              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                  <Grid container wrap="nowrap" spacing={2}>
                                      <Grid item xs>
                                          <Typography className={classes.description}>Run through all overdue bills before the end of the month.</Typography>
                                      </Grid>
                                  </Grid>

                                  <Grid container
                                        direction="row"
                                        justify="space-between"
                                        alignItems="center"
                                  >
                                      <KeyboardDatePicker
                                          margin="normal"
                                          id="date-picker-dialog"
                                          label="Date picker dialog"
                                          format="MM/dd/yyyy"
                                          value={selectedDate}
                                          onChange={handleDateChange}
                                          KeyboardButtonProps={{
                                              'aria-label': 'change date',
                                          }}
                                      />
                                      <KeyboardTimePicker
                                          margin="normal"
                                          id="time-picker"
                                          label="Time picker"
                                          value={selectedDate}
                                          onChange={handleDateChange}
                                          KeyboardButtonProps={{
                                              'aria-label': 'change time',
                                          }}
                                      />
                                  </Grid>
                              </MuiPickersUtilsProvider>
                          </Box>
                      </ExpansionPanelDetails>
                      <Divider />
                      <ExpansionPanelActions>
                        <Button size="small">Cancel</Button>
                        <Button size="small" color="primary">
                          Save
                        </Button>
                      </ExpansionPanelActions>
                    </ExpansionPanel>
                    <ExpansionPanel>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                      >
                          <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                          >
                              <Typography className={classes.heading}>Final budget revision</Typography>
                              <Chip label="Personal" color="default"/>
                          </Grid>

                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails className={classes.details}>

                          <Box width="100%">

                              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                  <Grid container wrap="nowrap" spacing={2}>
                                      <Grid item xs>
                                          <Typography className={classes.description}>Asses current balance and next quarter forecast.</Typography>
                                      </Grid>
                                  </Grid>

                                  <Grid container
                                        direction="row"
                                        justify="space-between"
                                        alignItems="center"
                                  >
                                      <KeyboardDatePicker
                                          margin="normal"
                                          id="date-picker-dialog"
                                          label="Date picker dialog"
                                          format="MM/dd/yyyy"
                                          value={selectedDate}
                                          onChange={handleDateChange}
                                          KeyboardButtonProps={{
                                              'aria-label': 'change date',
                                          }}
                                      />
                                      <KeyboardTimePicker
                                          margin="normal"
                                          id="time-picker"
                                          label="Time picker"
                                          value={selectedDate}
                                          onChange={handleDateChange}
                                          KeyboardButtonProps={{
                                              'aria-label': 'change time',
                                          }}
                                      />
                                  </Grid>
                              </MuiPickersUtilsProvider>
                          </Box>
                      </ExpansionPanelDetails>
                      <Divider />
                      <ExpansionPanelActions>
                        <Button size="small">Cancel</Button>
                        <Button size="small" color="primary">
                          Save
                        </Button>
                      </ExpansionPanelActions>
                    </ExpansionPanel>
                    <ExpansionPanel>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                      >
                          <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                          >
                              <Typography className={classes.heading}>Renew Netflix subscription</Typography>
                              <Chip label="Entertainment" color="secondary"/>
                          </Grid>

                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails className={classes.details}>

                          <Box width="100%">

                              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                  <Grid container wrap="nowrap" spacing={2}>
                                      <Grid item xs>
                                          <Typography className={classes.description}>Might consider to upgrade to the 4k plan.</Typography>
                                      </Grid>
                                  </Grid>

                                  <Grid container
                                        direction="row"
                                        justify="space-between"
                                        alignItems="center"
                                  >
                                      <KeyboardDatePicker
                                          margin="normal"
                                          id="date-picker-dialog"
                                          label="Date picker dialog"
                                          format="MM/dd/yyyy"
                                          value={selectedDate}
                                          onChange={handleDateChange}
                                          KeyboardButtonProps={{
                                              'aria-label': 'change date',
                                          }}
                                      />
                                      <KeyboardTimePicker
                                          margin="normal"
                                          id="time-picker"
                                          label="Time picker"
                                          value={selectedDate}
                                          onChange={handleDateChange}
                                          KeyboardButtonProps={{
                                              'aria-label': 'change time',
                                          }}
                                      />
                                  </Grid>
                              </MuiPickersUtilsProvider>
                          </Box>
                      </ExpansionPanelDetails>
                      <Divider />
                      <ExpansionPanelActions>
                        <Button size="small">Cancel</Button>
                        <Button size="small" color="primary">
                          Save
                        </Button>
                      </ExpansionPanelActions>
                    </ExpansionPanel>
                    <ExpansionPanel>
                      <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                      >
                          <Grid container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                          >
                              <Typography className={classes.heading}>Plan trip to Paris</Typography>
                              <Chip label="Holidays" color="primary"/>
                          </Grid>

                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails className={classes.details}>

                          <Box width="100%">

                              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                  <Grid container wrap="nowrap" spacing={2}>
                                      <Grid item xs>
                                          <Typography className={classes.description}>Accomodation and travel needs to be booked ahead.</Typography>
                                      </Grid>
                                  </Grid>

                                  <Grid container
                                        direction="row"
                                        justify="space-between"
                                        alignItems="center"
                                  >
                                      <KeyboardDatePicker
                                          margin="normal"
                                          id="date-picker-dialog"
                                          label="Date picker dialog"
                                          format="MM/dd/yyyy"
                                          value={selectedDate}
                                          onChange={handleDateChange}
                                          KeyboardButtonProps={{
                                              'aria-label': 'change date',
                                          }}
                                      />
                                      <KeyboardTimePicker
                                          margin="normal"
                                          id="time-picker"
                                          label="Time picker"
                                          value={selectedDate}
                                          onChange={handleDateChange}
                                          KeyboardButtonProps={{
                                              'aria-label': 'change time',
                                          }}
                                      />
                                  </Grid>
                              </MuiPickersUtilsProvider>
                          </Box>
                      </ExpansionPanelDetails>
                      <Divider />
                      <ExpansionPanelActions>
                        <Button size="small">Cancel</Button>
                        <Button size="small" color="primary">
                          Save
                        </Button>
                      </ExpansionPanelActions>
                    </ExpansionPanel>
                  </div>

                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1c-content"
                            id="panel1c-header"
                        >
                            <Grid container
                                  direction="row"
                                  justify="space-between"
                                  alignItems="center"
                            >
                                <Typography className={classes.heading}>Set up Continous Integration</Typography>
                                <Chip label="Overdue" color="secondary"/>
                            </Grid>

                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.details}>

                            <Box width="100%">

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container wrap="nowrap" spacing={2}>
                                        <Grid item xs>
                                            <Typography className={classes.description}>Showcase provisional prototype with React and Material UI directly on the continous integration cloud server.</Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container
                                          direction="row"
                                          justify="space-between"
                                          alignItems="center"
                                    >
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label="Date picker dialog"
                                            format="MM/dd/yyyy"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                        <KeyboardTimePicker
                                            margin="normal"
                                            id="time-picker"
                                            label="Time picker"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change time',
                                            }}
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>
                            </Box>
                        </ExpansionPanelDetails>
                        <Divider />
                        <ExpansionPanelActions>
                            <Button size="small">Cancel</Button>
                            <Button size="small" color="primary">
                                Save
                            </Button>
                        </ExpansionPanelActions>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1c-content"
                            id="panel1c-header"
                        >
                            <Grid container
                                  direction="row"
                                  justify="space-between"
                                  alignItems="center"
                            >
                                <Typography className={classes.heading}>Renew Netflix subscription</Typography>
                                <Chip label="Overdue" color="secondary"/>
                            </Grid>

                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.details}>

                            <Box width="100%">

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container wrap="nowrap" spacing={2}>
                                        <Grid item xs>
                                            <Typography className={classes.description}>Might consider to upgrade to the 4k plan.</Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container
                                          direction="row"
                                          justify="space-between"
                                          alignItems="center"
                                    >
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label="Date picker dialog"
                                            format="MM/dd/yyyy"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                        <KeyboardTimePicker
                                            margin="normal"
                                            id="time-picker"
                                            label="Time picker"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change time',
                                            }}
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>
                            </Box>
                        </ExpansionPanelDetails>
                        <Divider />
                        <ExpansionPanelActions>
                            <Button size="small">Cancel</Button>
                            <Button size="small" color="primary">
                                Save
                            </Button>
                        </ExpansionPanelActions>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1c-content"
                            id="panel1c-header"
                        >
                            <Grid container
                                  direction="row"
                                  justify="space-between"
                                  alignItems="center"
                            >
                                <Typography className={classes.heading}>Sort out unpaid bills</Typography>
                                <Chip label="This Week" color="primary"/>
                            </Grid>

                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.details}>

                            <Box width="100%">

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container wrap="nowrap" spacing={2}>
                                        <Grid item xs>
                                            <Typography className={classes.description}>Run through all overdue bills before the end of the month.</Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container
                                          direction="row"
                                          justify="space-between"
                                          alignItems="center"
                                    >
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label="Date picker dialog"
                                            format="MM/dd/yyyy"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                        <KeyboardTimePicker
                                            margin="normal"
                                            id="time-picker"
                                            label="Time picker"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change time',
                                            }}
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>
                            </Box>
                        </ExpansionPanelDetails>
                        <Divider />
                        <ExpansionPanelActions>
                            <Button size="small">Cancel</Button>
                            <Button size="small" color="primary">
                                Save
                            </Button>
                        </ExpansionPanelActions>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1c-content"
                            id="panel1c-header"
                        >
                            <Grid container
                                  direction="row"
                                  justify="space-between"
                                  alignItems="center"
                            >
                                <Typography className={classes.heading}>Dentist appointment</Typography>
                                <Chip label="This Week" color="primary"/>
                            </Grid>

                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.details}>

                            <Box width="100%">

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container wrap="nowrap" spacing={2}>
                                        <Grid item xs>
                                            <Typography className={classes.description}>Asses dental implant cost and feasability.</Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container
                                          direction="row"
                                          justify="space-between"
                                          alignItems="center"
                                    >
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label="Date picker dialog"
                                            format="MM/dd/yyyy"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                        <KeyboardTimePicker
                                            margin="normal"
                                            id="time-picker"
                                            label="Time picker"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change time',
                                            }}
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>
                            </Box>
                        </ExpansionPanelDetails>
                        <Divider />
                        <ExpansionPanelActions>
                            <Button size="small">Cancel</Button>
                            <Button size="small" color="primary">
                                Save
                            </Button>
                        </ExpansionPanelActions>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1c-content"
                            id="panel1c-header"
                        >
                            <Grid container
                                  direction="row"
                                  justify="space-between"
                                  alignItems="center"
                            >
                                <Typography className={classes.heading}>Client Demo with Martin</Typography>
                                <Chip label="This Week" color="primary"/>
                            </Grid>

                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.details}>

                            <Box width="100%">

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container wrap="nowrap" spacing={2}>
                                        <Grid item xs>
                                            <Typography className={classes.description}>Showcase provisional prototype with React and Material UI directly on the continous integration cloud server.</Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container
                                          direction="row"
                                          justify="space-between"
                                          alignItems="center"
                                    >
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label="Date picker dialog"
                                            format="MM/dd/yyyy"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                        <KeyboardTimePicker
                                            margin="normal"
                                            id="time-picker"
                                            label="Time picker"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change time',
                                            }}
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>
                            </Box>
                        </ExpansionPanelDetails>
                        <Divider />
                        <ExpansionPanelActions>
                            <Button size="small">Cancel</Button>
                            <Button size="small" color="primary">
                                Save
                            </Button>
                        </ExpansionPanelActions>
                    </ExpansionPanel>
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1c-content"
                            id="panel1c-header"
                        >
                            <Grid container
                                  direction="row"
                                  justify="space-between"
                                  alignItems="center"
                            >
                                <Typography className={classes.heading}>Plan trip to Paris</Typography>
                                <Chip label="To do" color="default"/>
                            </Grid>

                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails className={classes.details}>

                            <Box width="100%">

                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container wrap="nowrap" spacing={2}>
                                        <Grid item xs>
                                            <Typography className={classes.description}>Accomodation and travel needs to be booked ahead.</Typography>
                                        </Grid>
                                    </Grid>

                                    <Grid container
                                          direction="row"
                                          justify="space-between"
                                          alignItems="center"
                                    >
                                        <KeyboardDatePicker
                                            margin="normal"
                                            id="date-picker-dialog"
                                            label="Date picker dialog"
                                            format="MM/dd/yyyy"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                        <KeyboardTimePicker
                                            margin="normal"
                                            id="time-picker"
                                            label="Time picker"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change time',
                                            }}
                                        />
                                    </Grid>
                                </MuiPickersUtilsProvider>
                            </Box>
                        </ExpansionPanelDetails>
                        <Divider />
                        <ExpansionPanelActions>
                            <Button size="small">Cancel</Button>
                            <Button size="small" color="primary">
                                Save
                            </Button>
                        </ExpansionPanelActions>
                    </ExpansionPanel>
                </TabPanel>

            </Drawer>

        </div>


          <main
              className={clsx(classes.content, {
                  [classes.contentShift]: open,
              })}
          >
            <Box maxWidth="xl">
              <Schedule/>
            </Box>
          </main>

      </Paper>
    </MuiThemeProvider>

  );
}
