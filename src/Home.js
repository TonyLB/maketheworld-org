import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    card: {
        border: '2px solid',
        borderColor: '#E7EDF3',
        borderRadius: 16,
        margin: "10px",
        height: "100%"
    },
    hoverCard: {
        border: '2px solid',
        borderColor: '#E7EDF3',
        borderRadius: 16,
        margin: "10px",
        height: "100%",
        backgroundColor: "#FFFFFF",
        cursor: "pointer",
        textDecoration: "none",
        "&:hover": {
            backgroundColor: "#DDDDFF"
        },
        "&:active": {
            backgroundColor: "#FFFFFF"
        },
        transition: theme.transitions.create(['backgroundColor'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),

    },
    media: {
        height: "100px"
    },
    header: {
        color: "#FFFFFF",
        textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
    }
}))

function Home() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('lg'))
    const classes = useStyles()
    return (
        <div style={{ maxWidth: "1200px" }}>
            <Card className={classes.card}>
                { (matches &&
                    <CardMedia
                        style={{ width: "100%", height: "320px" }}
                        image="/images/Solarium.png"
                        title="Solarium"
                    />) ||
                    <CardHeader title={<img src="/images/Solarium.png" alt="Example" style={{ width: "100%", objectFit: "contain", margin: "0px" }} />} />
                }
                <CardContent>
                    <p>Welcome to Make The World.  MTW is a text-based social and exploration game-builder, using modern gaming and computer tech with a
                    retro feel.  If you've played a TinyMUD or TinyMUSH you should feel right at home. Play in Worlds hosted by others, or install your
                    own instance of MTW and invite your friends to help create a world from scratch!</p>
                </CardContent>
            </Card>

            <Grid container>
                <Grid item xs={6}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.media}
                            image="/images/Mural.jpg"
                            title="Mural"
                        >
                            <CardHeader className={classes.header} title="Join and Play" />
                        </CardMedia>
                        <CardContent>
                            Join one of the worlds that have been created by other people.  When you join a pre-existing game, there will be a foundation
                            setting to inspire you, and other players with their own stories and relationships already in play.  You can dive right in with
                            a new character, telling your own stories and creating your own spaces within a world imagined by everyone.
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card
                        className={classes.hoverCard}
                        onClick={() => { window.open("https://github.com/TonyLB/maketheworld", "_blank") }}
                    >
                        <CardMedia
                            className={classes.media}
                            image="/images/Map.png"
                            title="Map"
                        >
                            <CardHeader className={classes.header} title="Create a World" />
                        </CardMedia>
                        <CardContent>
                            Or create an instance of MTW to make your own explorable digital space with places and pathways that work with your particular game.
                            Design rooms, share them with your friends, use them for ongoing freeform play or to closely map a space to support your GMd game.
                            Use MTW to provide a more concrete sense of space for gaming over other tech like Discord or Zoom or Hangouts, or to start a
                            freeform community.
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <br /><br />

            <div style={{ width: "100%" }}>
                <Typography variant="h4" gutterBottom align="center">Featured Worlds</Typography>
            </div>
            <Grid container>
                <Grid item xs={6}>
                    <Card
                        className={classes.hoverCard}
                        onClick={ () => { window.open('https://awbo.maketheworld.org/') }}
                        style={{ cursor: 'pointer' }}
                    >
                        <CardMedia
                            className={classes.media}
                            image="/images/Outback.jpg"
                            title="Apocalype World - Burned Over"
                        >
                            <CardHeader className={classes.header} title="Apocalypse World - Burned Over" />
                        </CardMedia>
                        <CardContent>
                            <p>
                            Some say the world will end in fire, some say in ice ... but how about underground?  Or flooded?  Overgrown?  Burnt and decayed?
                            </p>
                            <p>
                            Apocalype World - Burned Over provides you with a variety of post-apocalyptic settings.  Choose a blasted and ruined world,
                            and tell the story of your character as they find themselves, those they can trust, and maybe even a little hope.
                            </p>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card
                        className={classes.hoverCard}
                        onClick={ () => { window.open('https://spacestationzero.maketheworld.org/') }}
                        style={{ cursor: 'pointer' }}
                    >
                        <CardMedia
                            className={classes.media}
                            image="/images/SpaceStationZero.jpg"
                            title="Space"
                        >
                            <CardHeader className={classes.header} title="Space Station Zero" />
                        </CardMedia>
                        <CardContent>
                            Space Station Zero is a MTW instance with initial design and hosted by William Nichols! Explore a far-flung space habitat, live
                            in its walls. Or, leave the station to explore strange new worlds! Make up new worlds and new spaceships for others to explore,
                            or keep them to yourself! To join the SSZ instance, click here to make your character for this freeform PBP multi-player game.
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card
                        className={classes.hoverCard}
                        onClick={ () => { window.open('https://amethystmill.maketheworld.org/') }}
                        style={{ cursor: 'pointer' }}
                    >
                        <CardMedia
                            className={classes.media}
                            image="/images/AmethystMill.jpg"
                            title="Amethyst Mill"
                        >
                            <CardHeader className={classes.header} title="Amethyst Mill" />
                        </CardMedia>
                        <CardContent>
                            <p>
                            Since 1830, the house has been there. Growing organically along the edge of the ridge above the stream that gives it the name: Amethyst Mill.
                            Grand and humble, serene and vibrant, home to a thousand stories, while porches become rooms and rooms become wings and out buildings
                            come and go. What will your story be? When will you visit Amethyst Mill?
                            </p>
                            <p>
                            Amethyst Mill is a MTW instance designed and hosted by Meguey Baker! Freeform roleplay in and around a large multi-generational home featured
                            in her Local History Rescue work. To join the Amethyst Mill instance, click here to make your character for this PBP multi-player game.
                            </p>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </div>
    )
}

export default Home
