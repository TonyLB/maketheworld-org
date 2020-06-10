import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    card: {
        border: '2px solid',
        borderColor: '#E7EDF3',
        borderRadius: 16,
        margin: "10px",
        height: "100%"
    },
    paper: {
        height: "100%"
    },
    header: {
    }
}))

function About() {
    const classes = useStyles()
    return (
        <div style={{ maxWidth: "1200px" }}>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardHeader
                                className={classes.header}
                                title="Meguey Baker"
                                titleTypographyProps={{ variant: "h5" }}
                                avatar={<Avatar alt="Meg" src="/images/Meg.jpg" style={{ width: "60px", height: "60px", border: "2px solid #a342fe" }} />}
                                style={{ backgroundColor: "#c98fff" }}
                            />
                            <CardContent>
                                Meg's a badass game designer, with such games as Apocalypse World, PsiRun  and Under Hollow Hills to her name, and runs LARP at the
                                local high school for 25 students a year. She spent most of the 1990s playing and moderating MUSHs.
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardHeader
                                className={classes.header}
                                title="Tony Lower-Basch"
                                titleTypographyProps={{ variant: "h5" }}
                                avatar={<Avatar alt="Tony" src="/images/FennecFox.jpg" style={{ width: "60px", height: "60px", border: "2px solid #ffc81c" }} />}
                                style={{ backgroundColor: "#ffe9a4" }}
                            />
                            <CardContent>
                                Tony dissects and builds systems.  He's been building ways for gamers to come together for decades, some successful, many not.
                                Bringing mathematics and computers together with that is a rare treat.
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardHeader
                                className={classes.header}
                                title="William Nichols"
                                titleTypographyProps={{ variant: "h5" }}
                                avatar={<Avatar alt="William" src="/images/William.jpg" style={{ width: "60px", height: "60px", border: "2px solid #20c234" }} />}
                                style={{ backgroundColor: "#93e89e" }}
                            />
                            <CardContent>
                                William verbs games, and manages software projects professionally. He's been building communities of gamers for years, and knows he
                                doesn't quite get video-based online RPGs -- he's the sort whose favorite video game is a kindle.
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default About
