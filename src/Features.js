import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    card: {
        border: '2px solid',
        borderColor: '#E7EDF3',
        borderRadius: 16,
        margin: "10px",
        height: "100%"
    }
}))

function Features() {
    const classes = useStyles()
    return (
        <div style={{ maxWidth: "1200px" }}>
            <Card className={classes.card}>
                <CardContent>
                    What sets Make The World apart from similar systems that have been running on the internet since before there even was an internet?  We've brought
                    several technical advances to the table, to give both game-administrators and players a better experience:
                </CardContent>
            </Card>

            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Card className={classes.card}>
                                <CardHeader title="Web-Native" />
                                <CardContent>
                                    The game lives (as far as you're concerned) in your web-browser.  That's where you make an imaginary world, and tell stories with the friends
                                    you will make in it.  Having the power of a web-browser to draw on means that we can present a richer experience than previous such games.
                                    So far we've built out visual maps, an always-on list of who is present in the game, and a web-friendly set of forms and dialogs for anything
                                    you need to edit or change.
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <Card className={classes.card}>
                                <CardHeader title="Grassroots-Focussed" />
                                <CardContent>
                                    Make The World is built from the foundations to support turning <em>players</em> into <em>collaborators</em>.  It makes it simple for players to
                                    create private rooms, neighborhoods, and worlds of their own, from the moment they log on ... while keeping these creations seamlessly hidden
                                    from other players, until they find someone with a public space who will, in turn, agree that they can make their creation public within it.
                                    Pushing creative and administrative tasks down as far as possible toward the grass-roots level means that a vibrant game can operate without
                                    requiring a dedicated (and frequently exhausted) staff of moderators and administrators to gate-keep every little detail.
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Card className={classes.card}>
                        <CardHeader title="Cloud-Powered" />
                        <CardContent>
                            A Make The World instance lives in the Amazon Web Services (AWS) cloud, as a constellation of storage resources and serverless compute calls.  That
                            means three things on a practical level:
                            <ul>
                                <li>
                                    First, the computing power available to the game scales to what it needs, smoothly, without any wasted expenses or capacity ceiling.
                                    Have a hundred people suddenly hitting the game for a gigantic event?  Make The World will smoothly provision resources to handle them.
                                    Have nobody online at all?  Make The World ceases to do anything at all (and therefore ceases accruing any costs).
                                </li>
                                <li>
                                    Second, the system is isolated from outside circumstances.  There is no server to maintain, no datacenter that might screw up your
                                    environment and take down your game.  As long as Amazon is still a going concern, your data will be secure (from everyone except yourself,
                                    that is) and your availability will be constant.
                                </li>
                                <li>
                                    Third, the system is cost-effective.  While we haven't (yet) had extensive tests with hundreds of users, we have had dozens of people
                                    pounding on the system, and the cost-per-day was measured in small numbers of pennies.  Our hope is that we will discover that moderately
                                    sized games can run continuously for a few dollars a month.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <br />

        </div>
    )
}

export default Features
