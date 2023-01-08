import React from 'react'

import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import AppCard from './AppCard'

function Tour() {
    return (
        <div style={{ maxWidth: "1200px" }}>
            <Grid container spacing={4}>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <AppCard>
                        <CardHeader title="System Tour" />
                        <CardContent>
                            What is Make The World really about, in practice?  Here's a quick preview of what you'll see if you pick a world to
                            log into ... it will also double as a getting started guide, to make it easier if you do choose to jump in.
                        </CardContent>
                    </AppCard>
                </Grid>
                <Grid item xs={3} />
                <Grid item xs={6}>
                    <AppCard>
                        <CardContent>
                            When you first visit a MTW site, it will ask you to identify who you are as a <em>player</em>, and give a password.
                            Since you'll never have visited this site before, your first step will be to create an account that lets MTW know
                            you as a player (distinct from the characters you play).  MTW will not reveal your player information to other players,
                            it will only use it behind the scenes to interact with you.  Click "Create an Account".
                        </CardContent>
                    </AppCard>
                </Grid>
                <Grid item xs={6}>
                    <AppCard>
                        <CardContent>
                            <img sx={{ maxWidth: "100%" }} alt="Tour1" src="/images/Tour/Tour1.png" />
                        </CardContent>
                    </AppCard>
                </Grid>
            </Grid>
        </div>
    )
}

export default Tour
