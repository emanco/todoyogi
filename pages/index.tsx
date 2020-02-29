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
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';


import Schedule from "./schedule";
import {blue} from "@material-ui/core/colors";
import Paper from "@material-ui/core/Paper";

const drawerWidth = 350;

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
      flexBasis: '50%',
      flexShrink: 0,
    },
    secondaryHeading: {
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


export default function Index() {

  const classes = useStyles();
  // const theme = useTheme();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openProfile = Boolean(anchorEl);

  const [open, setOpen] = React.useState(false);

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
                        <div className={classes.column}>
                          <Typography className={classes.heading}>Location</Typography>
                        </div>
                        <div className={classes.column}>
                          <Typography className={classes.secondaryHeading}>Select trip destination</Typography>
                        </div>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails className={classes.details}>
                        <div className={classes.column} />
                        <div className={classes.column}>
                          <Chip label="Barbados" onDelete={() => {}} />
                        </div>
                        <div className={clsx(classes.column, classes.helper)}>
                          <Typography variant="caption">
                            Select your destination of choice
                            <br />
                            <a href="#secondary-heading-and-columns" className={classes.link}>
                              Learn more
                            </a>
                          </Typography>
                        </div>
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
                  Item Two
                </TabPanel>

                {/*<List>*/}
                {/*    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (*/}
                {/*        <ListItem button key={text}>*/}
                {/*            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
                {/*            <ListItemText primary={text} />*/}
                {/*        </ListItem>*/}
                {/*    ))}*/}
                {/*</List>*/}
                {/*<Divider />*/}
                {/*<List>*/}
                {/*    {['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
                {/*        <ListItem button key={text}>*/}
                {/*            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
                {/*            <ListItemText primary={text} />*/}
                {/*        </ListItem>*/}
                {/*    ))}*/}
                {/*</List>*/}
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
