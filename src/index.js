import React from 'react'
import ReactDOM from 'react-dom'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import './index.css'
import Home from './Home'
import Tour from './Tour'
import Features from './Features'
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
                <div>
                    <div>
                        {children}
                    </div>
                </div>
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
  
const MTWTabs = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'))
    const [value, setValue] = React.useState(0)
    const tabPanelSx = {
        maxWidth: "1200",
        width: "100%",
        padding: 20
    }
  
    const handleChange = (event, newValue) => {
      setValue(newValue)
    }
    
    return (
        <React.Fragment>
            <AppBar
                sx={{
                    height: 40,
                    alignItems: "center",
                    paddingLeft: "200px"
                }}
            >
                <Typography variant="h4">Make The World</Typography>
            </AppBar>
            <div
                sx={ matches
                    ? {
                        backgroundColor: theme.palette.background.paper,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "top",
                        paddingTop: 40
                    }
                    : {
                        paddingTop: 40
                    }
                }
            >
                <Tabs
                    orientation={matches ? "vertical" : "horizontal"}
                    variant="scrollable"
                    scrollButtons="auto"
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="navigation tabs"
                    sx={ matches
                        ? {
                            borderRight: `1px solid ${theme.palette.divider}`,
                            flexShrink: 0
                        }
                        : {
                            borderBottom: `1px solid ${theme.palette.divider}`
                        }
                    }
                >
                    <Tab label="Home" {...a11yProps(0)} />
                    <Tab label="Tour" {...a11yProps(1)} />
                    <Tab label="Features" {...a11yProps(2)} />
                    <Tab label="About Us" {...a11yProps(3)} />
                    <Tab label="News" {...a11yProps(4)} />
                    <Tab label="Contact" {...a11yProps(5)} />
                </Tabs>
                <TabPanel sx={tabPanelSx} value={value} index={0} dir={theme.direction}>
                    <Home />
                </TabPanel>
                <TabPanel sx={tabPanelSx} value={value} index={1} dir={theme.direction}>
                    <Tour />
                </TabPanel>
                <TabPanel sx={tabPanelSx} value={value} index={2} dir={theme.direction}>
                    <Features />
                </TabPanel>
                <TabPanel sx={tabPanelSx} value={value} index={3} dir={theme.direction}>
                    <About />
                </TabPanel>
                <TabPanel sx={tabPanelSx} value={value} index={4} dir={theme.direction}>
                    <News />
                </TabPanel>
                <TabPanel sx={tabPanelSx} value={value} index={5} dir={theme.direction}>
                    <Contact />
                </TabPanel>
            </div>
        </React.Fragment>
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
