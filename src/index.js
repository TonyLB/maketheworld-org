import React from 'react'
import ReactDOM from 'react-dom'

import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import './index.css'
import Home from './Home'
import About from './About'
import News from './News'
import Contact from './Contact'
import * as serviceWorker from './serviceWorker'

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`mtw-tabpanel-${index}`}
            aria-labelledby={`mtw-tab-${index}`}
            {...other}
        >
            {value === index && (
                <React.Fragment>{children}</React.Fragment>
            )}
        </div>
    )
}

const a11yProps = (index) => {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      maxWidth: "1000",
      margin: "auto"
    },
  }));
  
const MTWTabs = () => {
    const classes = useStyles()
    const theme = useTheme()
    const [value, setValue] = React.useState(0)
  
    const handleChange = (event, newValue) => {
      setValue(newValue)
    }
    
    return (
        <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
            <div className={classes.root}>
                <AppBar position="static" color="default" style={{ width: "100%" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                        aria-label="full width tabs example"
                    >
                        <Tab label="Home" {...a11yProps(0)} />
                        <Tab label="About" {...a11yProps(1)} />
                        <Tab label="News" {...a11yProps(2)} />
                        <Tab label="Contact" {...a11yProps(3)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Home />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <About />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <News />
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <Contact />
                </TabPanel>
            </div>
        </div>
    )
}

ReactDOM.render(
    <MTWTabs />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
