import React from 'react'

import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import AppCard from './AppCard'

function Features() {
    return (
        <div style={{ maxWidth: "1200px" }}>
            <AppCard>
                <CardContent>
                    What sets Make The World apart from similar systems that have been running on the internet since before there even was an internet?  We've brought
                    several technical advances to the table, to give both game-administrators and players a better experience:
                </CardContent>
            </AppCard>

            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <AppCard>
                                <CardMedia
                                    sx={{ height: "100px" }}
                                    image="/images/Spiderweb.jpg"
                                    title="Web"
                                >
                                    <CardHeader 
                                        sx={{
                                                color: "#FFFFFF",
                                                textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"                                        
                                        }}
                                        title="Web-Native"
                                    />
                                </CardMedia>
                                <CardContent>
                                    Everything you need to play the game is in your web-browser.  That's where you create an imaginary world, and tell stories with the friends
                                    you will make in it.  Making the game web-native means that it has the easiest outreach (no application required) while still giving MTW
                                    the power to present a rich experience that you can dive into however you want.
                                </CardContent>
                            </AppCard>
                        </Grid>
                        <Grid item xs={12}>
                            <AppCard>
                                <CardMedia
                                    sx={{ height: "100px" }}
                                    image="/images/Grass.jpg"
                                    title="Web"
                                >
                                    <CardHeader
                                        sx={{
                                            color: "#FFFFFF",
                                            textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
                                        }}
                                        title="Grassroots-Focussed"
                                    />
                                </CardMedia>
                                <CardContent>
                                    Make The World is built from the foundations to support turning <em>players</em> into <em>collaborators</em>.  It makes it simple for players to
                                    create private rooms, neighborhoods, and worlds of their own, from the moment they log on ... while keeping these creations seamlessly private
                                    from other players, until they decide that their draft is ready for review. Making creative tools available in a safe sandbox as easily as possible
                                    means that a vibrant game can operate without requiring a dedicated (and frequently exhausted) staff of moderators and administrators to manually
                                    approve (or even have to implement) every little detail.
                                </CardContent>
                            </AppCard>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <AppCard>
                        <CardMedia
                            sx={{ height: "100px" }}
                            image="/images/Cloud.jpg"
                            title="Web"
                        >
                            <CardHeader
                                sx={{
                                    color: "#FFFFFF",
                                    textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"                            
                                }}
                                title="Cloud-Powered"
                            />
                        </CardMedia>
                        <CardContent>
                            The power behind a Make The World instance lives in the Amazon Web Services (AWS) cloud, as a constellation of storage resources and serverless compute
                            calls.  That means three things on a practical level:
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
                    </AppCard>
                </Grid>
            </Grid>
            <br />

        </div>
    )
}

export default Features
