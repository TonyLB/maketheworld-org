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

function Home() {
    const classes = useStyles()
    return (
        <div style={{ maxWidth: "1200px" }}>
            <Card className={classes.card}>
                <CardContent>
                    <p><em>You’re in a large room. Cool breeze wafts through the open windows, blowing ragged curtains. A jumble of sturdy dark wooden furniture crowds one
                    end of the worn green rug. Long ago, someone left a dish of ceramic fruit on a small table under a wall mirror, and there’s marks on the walls where
                    frames once hung. The doorway you came in leads to a sun-filled courtyard full of overgrown flower beds, and past the conspiratorial chairs are two
                    open doorways, one to the stairwell, one to a tiled floor.  What do you want to do first?</em></p>

                    <p>Welcome to Make The World.  MTW is a text-based social and exploration game-builder similar to MUSHes, using modern gaming and computer tech with a
                    retro feel. Play in Worlds hosted by others, or install your own instance of MTW and invite your friends to help create a world from scratch!</p>
                </CardContent>
            </Card>

            <Grid container>
                <Grid item xs={6}>
                    <Card className={classes.card}>
                        <CardContent>
                            You can create an instance of MTW to make an explorable digital space with places and pathways that work with your particular game.
                            Design your own rooms, share them with your friends, use them for ongoing freeform play or to closely map a space to support your GMd game.
                            Use MTW to provide a more concrete sense of space for gaming over other tech like Discord or Zoom or Hangouts.
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card className={classes.card}>
                        <CardContent>
                            Or join one of the worlds that have been created by other people.  When you join a pre-existing world, there will be a foundation
                            setting to inspire you, and other players with their own stories and relationships already in play.  You can dive right in with
                            a new character, telling your own stories and creating your own spaces within a space imagined by everyone.
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <br />

            <Card className={classes.card}>
                <CardHeader title="Featured Worlds" />
                <CardContent>
                    <Grid container>
                        <Grid item xs={6}>
                            <Card className={classes.card}>
                                <CardHeader title="Apocalypse World: Burned Over" />
                                <CardContent>
                                    Apocalypse World: Burned Over is a MTW instance designed and hosted by Meg Baker! Freeform roleplay in an apocalyptic landscape.
                                    To join the AWBO instance, click here to make your character for this PBP multi-player game.
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card className={classes.card}>
                                <CardHeader title="Space Station Zero" />
                                <CardContent>
                                    Space Station Zero is a MTW instance with initial design and hosted by William Nichols! Explore a far-flung space habitat, live
                                    in its walls. Or, leave the station to explore strange new worlds! Make up new worlds and new spaceships for others to explore,
                                    or keep them to yourself! To join the SSZ instance, click here to make your character for this freeform PBP multi-player game.
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

        </div>
    )
}

export default Home
