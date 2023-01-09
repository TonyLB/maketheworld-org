import React from 'react'

import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import AppCard from './AppCard'

function Home() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('lg'))
    return (
        <div style={{ maxWidth: "1200px" }}>
            <AppCard sx={{ borderRadius: "0px 0px 16px 16px" }}>
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
            </AppCard>

            <Grid container>
                <Grid item xs={6}>
                    <AppCard>
                        <CardMedia
                            sx={{ height: "100px" }}
                            image="/images/Mural.jpg"
                            title="Mural"
                        >
                            <CardHeader
                                sx={{
                                    color: "#FFFFFF",
                                    textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"                            
                                }}
                                title="Join and Play"
                            />
                        </CardMedia>
                        <CardContent>
                            Join one of the worlds that have been created by other people.  When you join a pre-existing game, there will be a foundation
                            setting to inspire you, and other players with their own stories and relationships already in play.  You can dive right in with
                            a new character, telling your own stories and creating your own spaces within a world imagined by everyone.
                        </CardContent>
                    </AppCard>
                </Grid>
                <Grid item xs={6}>
                    <AppCard>
                        <CardMedia
                            sx={{ height: "100px" }}
                            image="/images/Map.png"
                            title="Map"
                        >
                            <CardHeader
                                sx={{
                                    color: "#FFFFFF",
                                    textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"                            
                                }}
                                title="Create a World"
                            />
                        </CardMedia>
                        <CardContent>
                            Or create an instance of MTW to make your own explorable digital space with places and pathways that work with your particular game.
                            Design rooms, share them with your friends, use them for ongoing freeform play or to closely map a space to support your GMd game.
                            Use MTW to provide a more concrete sense of space for gaming over other tech like Discord or Zoom or Hangouts, or to start a
                            freeform community.
                        </CardContent>
                    </AppCard>
                </Grid>
            </Grid>

        </div>
    )
}

export default Home
