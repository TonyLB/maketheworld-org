import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
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
    }
}))

function News() {
    const classes = useStyles()
    return (
        <div style={{ maxWidth: "1200px" }}>
            <Grid container spacing={2}>
            <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardHeader title="The Future..." />
                            <CardContent>
                                Development doesn't stop at the minimum-viable-product!  We've got big plans for objects, asynchronous messages, game-state that will
                                allow for automated puzzles and processes, and much, much more!
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardHeader title="Late June..." />
                            <CardContent>
                                We released version 1.0 (the <em>minimum viable product</em>) to the public.  It supports rooms, neighborhoods, maps, navigation, chat,
                                direct messaging, permissions, etc.  V1.0 is a bit threadbare, but that's the nature of getting things in front of people as soon as
                                you can!
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardHeader title="Late April..." />
                            <CardContent>
                                We held our first open alpha-test with a few dozen people.  They rattled around the Apocalypse World, created new rooms and neighborhoods
                                to suit their fancy, and told stories with each other.  Space Station Zero emerged from some collaborative creation during that session,
                                and grew from there.
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item xs={6} spacing={4}>
                    <Paper elevation={0} className={classes.paper}>
                        <Card className={classes.card}>
                            <CardHeader title="Late February, 2020..." />
                            <CardContent>
                                Over on the Apocalypse World Discord server, Meg said she wished there was an Apocalypse World: Burned Over MUSH for the duration
                                of the pandemic. William said something like that was actually feasible and looped Tony into the project, who had the tech skill
                                to make it happen.
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default News
